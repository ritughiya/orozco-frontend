import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import OrozcoCircle1 from "../components/orozcoCircle1"
import Animation from "../components/Animation"
import Animation2 from "../components/Animation2"
import Animation3 from "../components/Animation3"
import Animation4 from "../components/Animation4"
import Battery from "../components/Battery"
import MobileSignal from "../components/MobileSignal"
import Wifi from "../components/Wifi"
import Showfooter from "../components/Showfooter"
import Logo from "../components/Logo"
import Static from 'next/image'
import Head from 'next/head'
import More from '../components/More'
import More2 from '../components/More2'


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



const v2 = ({ properties }) => {
  return (
    <div className="wrapper fullhog fullhogv2">
      <Head>
        <title>Spacetime Library</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script src="/public/hello.js"></Script>
      {properties.map(post => (
        <div key={post._id}>
          <More />
          <More2 />
          
          <Animation4 /> 
          {/* <Link href="/about">
           <video className="pointer" loop autoPlay muted id="timelapse" >         
             <source src="/Timelapse.mp4" type="video/mp4"/>       
          </video>
          </Link> */}
                    <Link href="/about">
                    <div className="vimeo-wrapper pointer">
              <iframe src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
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

export default v2