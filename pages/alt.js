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
import Battery from "../components/Battery"
import MobileSignal from "../components/MobileSignal"
import Wifi from "../components/Wifi"
import Showfooter from "../components/Showfooter"
import Logo from "../components/Logo"
import Static from 'next/image'
import Head from 'next/head'

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



const Alt1 = ({ properties }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Spacetime Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/public/hello.js"></Script>
      {properties.map(post => (
        <div key={post._id}>
           <div className="showLabel">
            <div className="showTitle">
            Spacetime
            </div>
          </div> 
          <Showfooter /> 
           <div className="showLabel2">
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
          </div> 
          <Animation /> 
          <Animation2 /> 
          <Animation3 /> 
           <video loop autoPlay muted id="timelapse" >         
             <source src="/Timelapse.mp4" type="video/mp4"/>       
          </video>
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

export default Alt1