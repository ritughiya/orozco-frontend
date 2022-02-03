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



const About = ({ properties }) => {
  return (
    <div className="Aboutwrapper Aboutwrapper2">
      <Head>
        <title>Spacetime Library</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
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
              24 West 57th, Room 305, New York, NY 10019              </div>
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
            <div className="emailPadding"> 
            From: Sophie K. <span className="emailBody"> sophie @ go-spacetime.com </span><br></br>
            Re: Show<br></br><br></br>
            <div className="sophieIntro">
            Bonne Année 2022 !<br></br><br></br>
I wanted to share with you the article I wrote on Spacetime which can be used for the website too. I sent it to Gabriel last night and also wanted to share it with you to see if you have any comments, thoughts, edits: </div>
            <div className="sophieEmail">
                <PortableText 
            blocks = {post.email1}
          />
          </div>
          <div className="gabrielNote">
          <span className="date">08/06/94</span><br></br>
Everything is ready. <br></br>
Everything is made.<br></br>
Everything has happened. <br></br>
I just want to continue it, for a moment.<br></br>
Whatever happens to me, in a world where everything has already happened, is extraordinary. <br></br>
It’s extraordinary that what has happened already keeps on happening. <br></br>
It’s extraordinary to forget it, in order to discover that we can remember. <br></br>
Invent something that we remember having seen. <br></br>
Extend the reflections. <br></br>
Open the closet to bring out the darkness.<br></br><br></br>

<div className="cite">
Gabriel Orozco, <i>Written Matter, Work Notebooks 1992–2012</i>, Koenig Books, 2020, Notebook 6, p.152-153
</div>

          </div><br></br>
          <div className="sophieEmail2">
          –Sophie Kitching
          </div>
                      </div>
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

export default About