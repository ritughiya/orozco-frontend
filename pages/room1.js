/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
//  import imageUrlBuilder from '@sanity/image-url'
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Quickcontainer1 from "../components/Quickcontainer1"
 import Inventory from "../components/Inventory"
 import Ticker from "../components/Ticker"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Labelnew from '../components/Labelnew'
 import Room1Label from "../components/Room1Label"
 import Roomsdropdown from "../components/Roomsdropdown"
 import Quicklabel from '../components/Quicklabel.js'
 import Quickticker from '../components/Quickticker'
 import Quicklogo from '../components/Quicklogo'
 import Static from 'next/image'
 import Head from 'next/head'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';
 import TypeAnimation from 'react-type-animation';

//  const imageBuilder = imageUrlBuilder(sanityClient);

// function imageUrlFor(source) {
//   return imageBuilder.image(source);
// }

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
      <div className="wrapper fullhog fullhogv2 Room1detail">
        <Head>
          <title>Spacetime Library</title>
          <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
          <link rel="icon" href="/favicon.png" />
        </Head>
        {properties.map(post => (
          <div key={post._id}>
            {/* <Animation3 />   */}
            <Quicklogo />
            <Quickticker />
            <Quicklabel />
            <Room1Label />
            <Roomsdropdown />
            <Quickcontainer1 />
            
           

           <div className="rowof4">
             {post.rowof4 && post.rowof4.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                     <div className="zoom-in" key={_id}>
                          <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <img src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" />
                      </Link>
                     </div>
                 
             ))
             }
             </div>


             <div className="rowof8">
             {post.rowof8 && post.rowof8.map(({_id, slug = '', thumbImage = '', mainImage = ''}) => (
                     <div className="zoom-in"  key={_id}>
                          <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <img src={urlFor(thumbImage).url()} placeholder="blur" blurDataURL={rgbDataURL(192, 192, 192)} width="100%" height="100%" layout="responsive" />
                      </Link>
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