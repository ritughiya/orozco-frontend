/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import Animation3 from "../components/Animation3"
 import Container1 from "../components/Container1"
 import Container2 from "../components/Container2"
 import Container3 from "../components/Container3"
 import Container4 from "../components/Container4"
 import Linkwrapper from "../components/Linkwrapper"
 import Inventory from "../components/Inventory"
 import Ticker from "../components/Ticker"
 import Logo from "../components/Logo"
 import Logotransparent from "../components/Logotransparent"
 import Label2 from "../components/Label2"
 import Static from 'next/image'
 import Head from 'next/head'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';


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
  return (
    <div className=" Home wrapper fullhog fullhogv2">
      <Head>
        <title>Spacetime Library</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script src="/public/hello.js"></Script>
      {properties.map(post => (
        <div key={post._id}>
         
{/* <div class="fade"></div>

<section class="star-wars">
  <div class="crawl">
    <div class="title">
      <p>
      <span>S</span>
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>E</span>
            <span>T</span>
            <span>I</span>
            <span>M</span>
            <span>E</span>
       </p>
    </div>
  </div>
</section> */}
<div className="vimeo-wrapper pointer">
              <iframe src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
          </div>

          <Animation3 /> 
          <Logotransparent />
           <Ticker />
           {/* <Inventory /> */}
           <Label2 />
           <Linkwrapper />   

          <div className="mainContainer">
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
           </div> 

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

export default IndexPage