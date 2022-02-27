/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import OrozcoCircle1 from "../components/orozcoCircle1"
 import Animation from "../components/Animation"
 import Animation2 from "../components/Animation2"
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Container1 from "../components/Container1"
 import Container2 from "../components/Container2"
 import Container3 from "../components/Container3"
 import Container4 from "../components/Container4"
 import Inventory from "../components/Inventory"
 import Ticker from "../components/Ticker"
 import Battery from "../components/Battery"
 import MobileSignal from "../components/MobileSignal"
 import Wifi from "../components/Wifi"
 import Showfooter from "../components/Showfooter"
 import Logo from "../components/Logo"
 import Logotransparent from "../components/Logotransparent"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Labelnew from '../components/Labelnew'
 import Static from 'next/image'
 import Head from 'next/head'
 import More from '../components/More'
 import More2 from '../components/More2'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';
 import TypeAnimation from 'react-type-animation';
 
 
 const query = `*[_type == "room1" ]{rowof4[]->, rowof8[]->} `
 
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
      <div className="wrapper fullhog fullhogv2">
        <Head>
          <title>Spacetime Library</title>
          <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Script src="/public/hello.js"></Script>
        {properties.map(post => (
          <div key={post._id}>
            {/* <Animation3 />   */}
            <Logotransparent />
            <Ticker />
            <Inventory />
            <div className= "Typing1" >
            <TypeAnimation
         cursor={true}
         sequence={[
           'Cam 1',
           2000,
           'Room 1',
           2000,
           'Spacetime.',
         ]}
         wrapper="a"
         repeat={2}
        />
       
           </div>
            
            <div className=" ">
            {/* <div className="container pointer v1">
           <iframe title="vimeo-player" className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675558830?h=8d3e149033&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           </div> */}
 
           <div className="iframe-container">
           <iframe className="" src="https://player.vimeo.com/video/675558830?h=8d3e149033&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           </div>
 
           </div> 
           <div className="rowof4">
             {post.rowof4.map((image) => 
             (
                     <div key={image._id}>
                          {/* <Link href={`work/${image.slug.current}`}> */}
                         <img src={urlFor(image.mainImage).url()} />
                         {/* </Link> */}
                     </div>
                 
             ))
             }
             </div>
             <div className="rowof8">
 
 {post.rowof8.map((image) => 
             (
                     <div key={image._id}>
                          {/* <a href={`/${image.slug}`}> 
                         <img src={urlFor(image).url()} />
                         </a>  */}
                         <div>{image.caption}</div>
 
                     </div>
                 
             ))
             }
                             </div>
 
 
          </div>
          
        ))}
        
      </div>
    )
  
  }
 
 export const getServerSideProps = async () => {
   const query = `*[_type == "room1" ]{rowof4[]->, rowof8[]->} `
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