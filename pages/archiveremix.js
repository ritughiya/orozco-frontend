/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import {urlFor, sanityClient} from '../sanity'
 import Image from "../components/Image"
 import imageUrlBuilder from '@sanity/image-url'
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Logotransparent from "../components/Logotransparent"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Static from 'next/image'
 import Head from 'next/head'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';
 import Quicklogo from '../components/Quicklogo'
 import Quicklabel from '../components/Quicklabel.js'
 import Quickticker from '../components/Quickticker'
 import Archivelabel from '../components/Archivelabel.js'
 import Footer from "../components/Footer"


  // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
keyStr.charAt(e1 >> 2) +
keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
`data:image/gif;base64,R0lGODlhAQABAPAA${
  triplet(0, r, g) + triplet(b, 255, 255)
}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

 
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
 

 const archiveremix = ({ properties }) => {
   return (
     <div className="Archive wrapper fullhog fullhogv2">
       <Head>
         <title>Spacetime Library</title>
         <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
         <link rel="icon" href="/favicon.png" />
       </Head>
       <Script src="/public/hello.js"></Script>
       <Quicklogo />
            <Quickticker />
            <Quicklabel />
       {properties.map(post => (
               <div className="rowof8" key={post._id}>

{post.archivegallery && post.archivegallery.map(({_id, slug = '', thumbImage = '', mainImage = ''}) => (
                     <div className="zoom-in"  key={_id}>
                          <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <img src={urlFor(mainImage).url()} placeholder="blur" blurDataURL={rgbDataURL(192, 192, 192)} width="100%" height="100%" layout="responsive" />
                      </Link>
                     </div>
                 
             ))
             }
           
         </div>       

         
       ))}
                                  <Footer />


       
     </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
  const query = `*[_type == "archiveremix" ]{archivegallery[]->} `
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
 
 export default archiveremix;