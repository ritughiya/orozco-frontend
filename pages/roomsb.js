/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { Link } from "react-router-dom";
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import OrozcoCircle1 from "../components/orozcoCircle1"
 import Animation from "../components/Animation"
 import Animation2 from "../components/Animation2"
 import Animation3 from "../components/Animation3"
 import Battery from "../components/Battery"
 import MobileSignal from "../components/MobileSignal"
 import Wifi from "../components/Wifi"
 import Showfooter from "../components/Showfooter"
 import Logo from "../components/Logo"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Labelnew from '../components/Labelnew'
 import Static from 'next/image'
 import Head from 'next/head'
 import More from '../components/More'
 import More2 from '../components/More2'
 import BlockContent from '@sanity/block-content-to-react'
 
 
 
 const query = `*[_type == "rooms"] {
     view1,
     view1a,
     view1b,
     view1c,
     view2,
     view2a,
     view3,
     view3a,
     view4,
     view4a,
     title
 }
 `
 
 const serializers = {
     types: {
       code: (props) => (
         <pre data-language={props.node.language}>
           <code>{props.node.code}</code>
         </pre>
       ),
     },
   }
 
 
 const roomsb = ({ properties }) => {
   return (
     <div className="wrapper fullhog fullhogv2">
       <Head>
         <title>Spacetime Library</title>
         <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
         <link rel="icon" href="/favicon.png" />
       </Head>
       <Script src="/public/hello.js"></Script>
       {properties.map(post => (
         <div key={post._id}>
           <Labelnew />
           {/* <Animation3 />   */}
            <div className="linkWrapper">
                <div className="link1"><a href="/room1a">&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
                 <div className="link2"><a href="/room2">&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
                 <div className="link3"><a href="/room3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
                  <div className="link4"><a href="/room4a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
              </div>
            <div className="mainContainer">
            {/* <Link to="/room1"> */}
            <div className="container pointer v1">
           <iframe title="vimeo-player" className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675558830?h=8d3e149033&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           </div>
           {/* </Link> */}
 
           <div className="container pointer v2">
           <iframe title="vimeo-player" className="secondaryView responsive-iframe" src="https://player.vimeo.com/video/675558994?h=6cc7fdcf01&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           <iframe title="vimeo-player" className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675558810?h=2f656dbd0f&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="100%" height="100vh" frameBorder="0" allowFullScreen></iframe>   
           </div>
           <div className="container pointer v3">
           <iframe title="vimeo-player" className="secondaryView responsive-iframe" src="https://player.vimeo.com/video/675559010?h=ff54e881e5&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           <iframe title="vimeo-player" className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675558970?h=32f28b079d&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           </div>
           <div className="container pointer v4">
           <iframe title="vimeo-player" className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           </div>
 
           </div> 
 
         </div>
         
       ))}
       
     </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = '*[ _type == "rooms"]'
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
 
 export default roomsb;