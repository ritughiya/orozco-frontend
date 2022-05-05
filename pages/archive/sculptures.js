/**
 * @jest-environment jsdom
 */

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { urlFor, sanityClient } from "../../sanity"
import Image from 'next/image'
import Circle from "../../components/Circle"
import Static from 'next/image'
import Clock from 'react-live-clock';
import Quicklogo2 from '../../components/Quicklogo2'
import Quicklabel from '../../components/Quicklabel.js'
import Quickticker2 from '../../components/Quickticker2'
import Footer from "../../components/Footer"
import Customhead from "../../components/Customhead"
import Head from 'next/head'

import { If, Elif, Else } from 'rc-if-else';
import Filtersdropdown from '../../components/Filtersdropdown'
import Mobilefilters from '../../components/Mobilefilters'




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


const sculptures = ({ properties }) => {
  return (
    <div className="Archive wrapper fullhog fullhogv2">
      <Head>
        <title>Index | Gabriel Orozco: Spacetime</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Spacetime Library" />
        <meta property="og:url" content="https://go-spacetime.com/" />
        <meta property="og:description"
          content="Go-Spacetime is the online extension of Mexican artist, Gabriel Orozco’s (b. 1962), Spacetime exhibition, which opened at 24 West 57th Street, Room 305, New York, NY in June 2021. An open-archive project, the exhibition consists of a selection of over 500 works in a wide variety of media, including sculpture, drawing, photography and painting.  " />

      </Head>
      <Quicklogo2 />
      <Quickticker2 />
      <div className="desktop"><Filtersdropdown /></div>
      <div className="mobile"><Mobilefilters /></div>

      <div className="archiveContainer">


        {properties.map(post => (
          <div className="rowof8" key={post._id}>

            {post.sculpture && post.sculpture.map(({ _id, slug = '', thumbImage = '', mainImage = '', filter = '', caption = '' }) => (
              <div key={_id}>
                <Link href="/work/[slug]" as={`/work/${slug.current}`} passHref>
                  <div className="zoom-in">
                    {mainImage && <Image src={urlFor(mainImage).url()} placeholder="blur" blurDataURL={rgbDataURL(192, 192, 192)} width="100%" height="100%" layout="responsive" alt={caption} />}

                  </div>
                </Link>
              </div>

            ))
            }

          </div>


        ))}
      </div>

      <Footer />


    </div>
  )

}

export const getServerSideProps = async () => {
  const query = `*[_type == "archive" ]{sculpture[]->} `
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

export default sculptures;