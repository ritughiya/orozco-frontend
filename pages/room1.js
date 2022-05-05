/**
 * @jest-environment jsdom
 */

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor } from '../sanity'
import Image from 'next/image'
import Animation3 from "../components/Animation3"
import Circle from "../components/Circle"
import Quickcontainer1 from "../components/Quickcontainer1"
import Quickticker2 from '../components/Quickticker2'
import Quicklogo2 from '../components/Quicklogo2'
import Static from 'next/image'
import Head from 'next/head'
import Clock from 'react-live-clock';
import Footer from "../components/Footer"




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
}


const room1 = ({ properties }) => {
  return (
    <div className="wrapper fullhog fullhogv2 Room1detail">
      <Head>
        <title>Room One | Gabriel Orozco: Spacetime</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Gabriel Orozco: Spacetime" />
        <meta property="og:url" content="https://go-spacetime.com/" />
        <meta property="og:description"
          content="Go-Spacetime is the online extension of Mexican artist, Gabriel Orozco’s (b. 1962), Spacetime exhibition, which opened at 24 West 57th Street, Room 305, New York, NY in June 2021. An open-archive project, the exhibition consists of a selection of over 500 works in a wide variety of media, including sculpture, drawing, photography and painting.  " />

      </Head>
      {properties.map(post => (
        <div className="flex" key={post._id}>
          <div className="flexgrow">
            <Quicklogo2 />
            <Quickticker2 />
            <Quickcontainer1 />





            <div id="selectedworks" className="rowof4">
              {post.rowof4 && post.rowof4.map(({ _id, slug = '', thumbImage = '', mainImage = '' }) => (
                <div key={_id}>
                  <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="zoom-in held">
                      {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="700px" height="200px" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} alt="Lo-res image of Gabriel Orozco's works" />}
                    </div>
                  </Link>
                </div>

              ))
              }
            </div>



          </div>

          <Footer />




        </div>

      ))}

    </div>
  )

}

export const getServerSideProps = async () => {
  const query = `*[_type == "room1" ]{rowof4[]->, rowof8[]->} `
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

export default room1;