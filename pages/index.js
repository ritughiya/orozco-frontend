/**
 * @jest-environment jsdom
 */

import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor } from '../sanity'
import Image from 'next/image'
import Animation from "../components/Animation"
import Linkwrapper from "../components/Linkwrapper"
import Linkwrapper2 from "../components/Linkwrapper2"
import Ticker from "../components/Ticker"
import Quickticker from "../components/Quickticker"
import Logotransparent from "../components/Logotransparent"
import Footerhome from "../components/Footerhome"
import Footerdelay from "../components/Footerdelay"
import Footerdelaymobile from "../components/Footerdelaymobile"
import { If, Elif, Else } from 'rc-if-else';
import Quicklogo from '../components/Quicklogo'
import Homecontainer1 from "../components/Homecontainer1";
import Homecontainer2 from "../components/Homecontainer2";

import Homecontainer3 from "../components/Homecontainer3";
import Homecontainer4 from "../components/Homecontainer4";

import Quicklinkwrapper from "../components/Quicklinkwrapper"
import Quicklinkwrapper2 from "../components/Quicklinkwrapper2"
import Overlay from "../components/Overlay"

import Spaceshipoverlay from "../public/spaceship-overlay.png"
import Head from 'next/head'
import Customhead from "../components/Customhead"



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

const IndexPage = ({ properties }) => {
  // React State
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Access count value from session storage
    var pageView = sessionStorage.getItem("pageView");
    if (pageView == null) {
      // Initialize page views count
      pageView = 1;
    } else {
      // Increment count
      pageView = Number(pageView) + 1;
    }
    // Update session storage
    sessionStorage.setItem("pageView", pageView);
    setCount(pageView);
  }, []); //No dependency to trigger in each page load

  return (
    <html lang="en" className="notranslate" translate="no">
    <div className=" Home wrapper fullhog fullhogv2">
      <Customhead />

      {(() => {
        if (count > 1) {
          return (
            <><Quicklogo /><Quickticker /><Quicklinkwrapper2 /><Quicklinkwrapper />

            </>




          )

        } else {
          return (
            <><div className="vimeo-wrapper pointer ">

              <iframe loading="lazy" title="Gabriel Orozco's Spaceship Room" className="" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            </div>

              <Animation />

              <Logotransparent /><Ticker /><Linkwrapper2 /><Linkwrapper />
              <Overlay />
            </>
          )
        }
      })()}
      <div className="mainContainer">

        <Homecontainer1 />
        <Homecontainer2 />
        <Homecontainer3 />
        <Homecontainer4 />
      </div>



      {(() => {
        if (count > 1) {
          return (
            <>

              <Footerhome /></>




          )

        } else {
          return (
            <>
              <div className="desktop"><Footerdelay /></div>
              <div className="mobile"><Footerdelaymobile /></div>

            </>
          )
        }
      })()}

    </div>
    </html>
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

export default IndexPage