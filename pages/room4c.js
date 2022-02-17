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
 
 
 
 const query = `*[_type == "room4"] {
        rowof4[]{
            asset->{
                url,
                caption,
                year,
                medium,
                dimensions,
                editionDetails,
                alt,
                slug,
            },
     },
     rowof8[]{
        asset->{
            url,
            caption,
            year,
            medium,
            dimensions,
            editionDetails,
            alt,
        },
 }
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
 
 
 const room4c = ({ properties }) => {
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
           <Labelnew />
           
          
        
          <div className="Room4c">
            <div className="rowof8">
            {post.rowof8.map((image) => 
            (
              <div key={post._id}>
                <img src={urlFor(image).url()} />
                </div>
                
            ))
            }
            </div>
            </div>






         </div>
         
       ))}
       
     </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = '*[ _type == "room4"]'
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
 
 export default room4c;