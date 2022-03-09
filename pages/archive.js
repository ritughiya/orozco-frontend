/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient} from '../sanity'
 import Image from "../components/Image"
 import imageUrlBuilder from '@sanity/image-url'
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Container1 from "../components/Container1"
 import Container2 from "../components/Container2"
 import Container3 from "../components/Container3"
 import Container4 from "../components/Container4"
 import Logotransparent from "../components/Logotransparent"
 import Msg from "../components/Msg"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Static from 'next/image'
 import Head from 'next/head'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';
 import Quicklogo from '../components/Quicklogo'
 import Quickinventory from '../components/Quickinventory.js'
 import Archivelabel from '../components/Archivelabel.js'

 
 const imageBuilder = imageUrlBuilder(sanityClient);

 function imageUrlFor(source) {
   return imageBuilder.image(source);
 }
 
 
 const query = `*[_type == "work" ]`
 
 const serializers = {
     types: {
       code: (props) => (
         <pre data-language={props.node.language}>
           <code>{props.node.code}</code>
         </pre>
       ),
     },
   }
 

 const archive = ({ properties }) => {
   return (
     <div className="Archive wrapper fullhog fullhogv2">
       <Head>
         <title>Spacetime Library</title>
         <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
         <link rel="icon" href="/favicon.png" />
       </Head>
       <Script src="/public/hello.js"></Script>
       <Msg />
       <Archivelabel />
       <Quicklogo />
       <Quickinventory />
       <div className="rowof8">
       {properties.map(post => (
         <div key={post._id}>
           
           <img src={imageUrlFor(post.mainImage).url()} />
         </div>
         
       ))}
        </div>

       
     </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = `*[_type == "work" ] | order(caption asc)`
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
 
 export default archive;