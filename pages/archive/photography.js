/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import {urlFor, sanityClient} from "../../sanity"
 import Image from "../../components/Image"
 import Circle from "../../components/Circle"
 import Label from "../../components/Label"
 import Static from 'next/image'
 import Clock from 'react-live-clock';
 import Quicklogo from '../../components/Quicklogo'
 import Quicklabel from '../../components/Quicklabel.js'
 import Quickticker2 from '../../components/Quickticker2'
 import Footer from "../../components/Footer"
 import Customhead from "../../components/Customhead"

 import { If, Elif, Else } from 'rc-if-else';
 import Filtersdropdown from '../../components/Filtersdropdown'
 import Reset from '../../components/Reset'


 
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


 
 
 const serializers = {
     types: {
       code: (props) => (
         <pre data-language={props.node.language}>
           <code>{props.node.code}</code>
         </pre>
       ),
     },
   }
 

 const photography = ({ properties }) => {
   return (
     <div className="Archive wrapper fullhog fullhogv2">
      <Customhead />
       <Quicklogo />
            <Quickticker2 />
            <Filtersdropdown />
            <Reset />

            <div className="archiveContainer">

            
       {properties.map(post => (
               <div className="rowof8" key={post._id}>

{post.photography && post.photography.map(({_id, slug = '', thumbImage = '', mainImage = '', filter = ''}) => (
  <div key={_id}>
  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
    <div className="zoom-in">
    <img src={urlFor(mainImage).url()} placeholder="blur" blurDataURL={rgbDataURL(192, 192, 192)} width="100%" height="100%" layout="responsive" />
 
  </div>
</Link>
</div>
                     
             ))
             }

         </div>       

         
       ))}           
       
        </div>

                           <Footer />

       
     </div>
   )
 
 }
 
 export const getServerSideProps = async () => {
  const query = `*[_type == "archive" ]{photography[]->} `
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
 
 export default photography;