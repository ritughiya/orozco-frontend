import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import OrozcoCircle1 from "../components/orozcoCircle1"
import Animation from "../components/Animation"
import Battery from "../components/Battery"
import MobileSignal from "../components/MobileSignal"
import Wifi from "../components/Wifi"
import Static from 'next/image'
import Head from 'next/head'
import Sticky from 'react-sticky-el'
import Logo from "../components/Logo"



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



const About2 = ({ properties }) => {
  return (
    <div className="Aboutwrapper Aboutwrapper2">
      <Head>
        <title>Spacetime Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/public/hello.js"></Script>
      
      {properties.map(post => (
        <div key={post._id}>
           <div className="showLabel">
            <Link href="/">
            <div className="pointer showTitle">
            Spacetime
            </div>
            </Link>
          </div> 


          <div className="showSpace"></div>
<Sticky>
<div className="showSpace2"></div>
          <div className="showLetter" id="letter">
            <div className="showFlex">
            <div className="showInfo">
              <div className="showInfoMain">
              Gabriel Orozco<br></br>
              Spacetime<br></br>
              24 West 57th, Room 305, New York, NY 10019<br></br>
              June 2021 - June 2022
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
            </div>
            <div className="showLetter-logo">
            <Static src="/notebookSketch.png" alt="me" width="150" height="150" />
            </div>
            </div>

            <div className="showBody">
            From: Sophie K. <span className="emailBody"> sophie @ go-spacetime.com </span><br></br>
            Re: Show<br></br><br></br>
                <PortableText 
            blocks = {post.email1}
          />
            </div>
            </div>

            </Sticky>

  
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

export default About2