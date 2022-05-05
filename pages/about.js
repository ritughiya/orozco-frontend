/**
 * @jest-environment jsdom
 */

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { urlFor, sanityClient } from '../sanity'
import PortableText from '@sanity/block-content-to-react'
import Image from "../components/Image"
import Circle from "../components/Circle"
import Static from 'next/image'
import Clock from 'react-live-clock';
import Quicklogo2 from '../components/Quicklogo2'
import Quickticker2 from '../components/Quickticker2'
import Footer from "../components/Footer"
import Head from 'next/head'
import Floorplan from "../components/Floorplan"



// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
  marks: {

    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noreferrer">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}


const about = ({ properties }) => {
  return (
    <div className="Aboutpage wrapper fullhog fullhogv2 ">
      <Head>
        <title>About | Gabriel Orozco: Spacetime</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Gabriel Orozco: Spacetime" />
        <meta property="og:url" content="https://go-spacetime.com/" />
        <meta property="og:description"
          content="Go-Spacetime is the online extension of Mexican artist, Gabriel Orozco’s (b. 1962), Spacetime exhibition, which opened at 24 West 57th Street, Room 305, New York, NY in June 2021. An open-archive project, the exhibition consists of a selection of over 500 works in a wide variety of media, including sculpture, drawing, photography and painting.  " />

      </Head>
      <Quicklogo2 />
      <Quickticker2 />
      {properties.map(post => (
        <div className="aboutshow fadepage" key={post._id}>
          <div className="about1">
            <div className="subhead">ABOUT SPACETIME</div>
            <div className="text">
              <PortableText
                blocks={post.aboutspacetime}
                serializers={serializers}
              />


              <Floorplan />



            </div>
          </div>

          <div className="about2 ">
            <div className="subhead">ABOUT GO</div>
            <div className="text">
              <PortableText
                blocks={post.aboutGO}
                serializers={serializers}

              /></div>
          </div>
        </div>
      ))}

      <Footer />


    </div>
  )

}

export const getServerSideProps = async () => {
  const query = `*[_type == "about" ]`
  const properties = await sanityClient.fetch(query)

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        properties,
      },
    }
  }
}

export default about;