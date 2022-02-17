import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor } from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import OrozcoCircle1 from "../components/orozcoCircle1"
import Animation from "../components/Animation"
import Battery from "../components/Battery"
import MobileSignal from "../components/MobileSignal"
import Wifi from "../components/Wifi"
import Showfooter from "../components/Showfooter"
import Static from 'next/image'
import Head from 'next/head'
import Logo from "../components/Logo"
import Logoupdated from "../components/Logoupdated"
import Logotransparent from "../components/Logotransparent"
import More from "../components/More"
import More2 from "../components/More2"



const query = `*[_type == "landingpage"] {
  _id,
  emailText,
  images[]{
    asset->{
        url
    },
  title,
  emails
}
`



const logoindex = ({ properties }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Spacetime Library</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script src="/public/hello.js"></Script>
      {properties.map(post => (
        <div key={post._id}>
          <Link href="/about">
            <div className="showLabel pointer">
              <div className="showTitle">
                Spacetime
              </div>
            </div>
          </Link>
          {/* <More2 /> */}

          <Link href="/about">
            <div className="Logo-knight2 pointer">
              <Logotransparent />
            </div>
          </Link>

          <Link href="/about">
            <div className="showLabel2 pointer">
              <div className="showInfo">
                <div className="showInfoMain">
                  Gabriel Orozco<br></br>
                  Spacetime<br></br>
                  24 West 57th, Room 305, New York, NY 10019<br></br>
                </div>
                <div className="showInfoSub">
                  <div className="showInfoSub1">
                    <div className="showInfoHours">
                      HOURS
                    </div>
                    <div className="showInfoHours2">
                      Monday–Friday<br></br>
                      10–6PM
                    </div>
                  </div>
                  <div className="showInfoSub2">
                    <span className="Phone">212-977-7160</span><br></br>
                    <span className="emailSub">Email</span><span className="Email">alena@go-spacetime.com</span>
                  </div>
                </div>
                {/* <div className="showInfocoming">Full Site Coming Soon . . .</div> */}

              </div>
            </div>
          </Link>
          <Link href="/about">
          <div className="vimeo-wrapper">
            <iframe src="https://player.vimeo.com/video/672934323?background=1&autoplay=1&loop=1&byline=0&title=0"
              frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
          </div>
          </Link>
        </div>

      ))}

    </div>
  )

}

export const getServerSideProps = async () => {
  const query = '*[ _type == "landingpage"]'
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

export default logoindex