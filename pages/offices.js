/**
 * @jest-environment jsdom
 */

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor } from '../sanity'
import Image from 'next/image'
import Quickcontaineroffice from "../components/Quickcontaineroffice"
import Room1Label from "../components/Room1Label"
import Quickticker from '../components/Quickticker'
import Quicklogo2 from '../components/Quicklogo2'
import Head from 'next/head'
import Footer from "../components/Footer"
import Customhead from "../components/Customhead"





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


const Office = ({ properties }) => {
  return (
    <html lang="en" className="notranslate" translate="no">
    <div className="wrapper fullhog fullhogv2 Room1detail">
      <Customhead />
      <Head>
        <title>Offices | Gabriel Orozco: Spacetime</title>
        <meta property="og:title" content="Offices | Gabriel Orozco: Spacetime" key="title" />
      </Head>
      {properties.map(post => (
        <div className="flex" key={post._id}>
          <div className="flexgrow">
            <Quicklogo2 />
            <Quickticker />

            <Quickcontaineroffice />



            <div className="rowof4" id="selectedworks">
              {post.rowof4 && post.rowof4.map(({ _id, slug = '', thumbImage = '', mainImage = '' }) => (
                <div key={_id}>
                  <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="zoom-in held">
                      {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="200px" height="200px" layout="responsive" fit="max" placeholder="blur"
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
    </html>
  )

}

export const getServerSideProps = async () => {
  const query = `*[_type == "offices" ]{rowof4[]->} `
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

export default Office;