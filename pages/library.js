/**
 * @jest-environment jsdom
 */

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor } from '../sanity'
import Image from 'next/image'
import Quickcontainerbook from "../components/Quickcontainerbook"
import Quickticker from '../components/Quickticker'
import Quicklogo2 from '../components/Quicklogo2'
import Static from 'next/image'
import Footer from "../components/Footer"
import Head from 'next/head'
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


const room1 = ({ properties }) => {
  return (
    <html lang="en" className="notranslate" translate="no">
    <div className="wrapper fullhog fullhogv2 Room1detail Bookshelfdetail">
      <Customhead />
      <Head>
        <title>Library | Gabriel Orozco: Spacetime</title>
      </Head>
      {properties.map(post => (
        <div className="flex" key={post._id}>
          <div className="flexgrow">
            <Quicklogo2 />
            <Quickticker />

            <Quickcontainerbook />

            <div id="selectedworks" className="rowof4">
              {post.selectedworks && post.selectedworks.map(({ _id, slug = '', thumbImage = '', mainImage = '' }) => (
                <div key={_id}>
                  <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}>
                    <div className="zoom-in held">
                      {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" objectFit="contain" placeholder="blur"
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
  const query = `*[_type == "bookshelf" ]{selectedworks[]->} `
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