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
 import Ticker from "../components/Ticker"
 import Logotransparent from "../components/Logotransparent"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Head from 'next/head'
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
      {properties.map(post => (
        <div key={post._id}>
         

<div className="vimeo-wrapper pointer">
              <iframe loading="lazy" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
          </div>

          <Animation3 /> 
          <Logotransparent />
           <Ticker />
           <Label />
           <Linkwrapper />   

          <div className="mainContainer">
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
           </div> 
           <div className="mainFooter">
              <div className="footerDetails">
                <div className="column1">
                Gabriel Orozco, Spacetime<br></br>
                Summer 2021 – Summer 2022<br></br>
                24 West 57th, Room 305, New York NY 10019
                </div>
                <div className="column2">
                Hours: Monday – Friday, 10AM – 6PM<br></br>
                Call <span className="contact">212 977 7160</span><br></br>
                Or email <span className="contact">alena@go-spacetime.com</span>
                </div>
              </div>
              <div className="footerNav">
                <Link href="/press">
                <span className="contact">
                  Press Release
                  </span></Link>
              </div>
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