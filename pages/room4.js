/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from 'next/image'
 import imageUrlBuilder from '@sanity/image-url'
 import OrozcoCircle1 from "../components/orozcoCircle1"
 import Animation from "../components/Animation"
 import Animation2 from "../components/Animation2"
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Quickcontainer4 from "../components/Quickcontainer4"
 import Inventory from "../components/Inventory"
 import Ticker from "../components/Ticker"
 import Showfooter from "../components/Showfooter"
 import Logo from "../components/Logo"
 import Logotransparent from "../components/Logotransparent"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Labelnew from '../components/Labelnew'
 import Room4Label from "../components/Room4Label"
 import Roomsdropdown from "../components/Roomsdropdown"
 import Quicklabel from '../components/Quicklabel.js'
 import Quickticker from '../components/Quickticker'
 import Quicklogo from '../components/Quicklogo'
 import Quickinventory from '../components/Quickinventory.js'
 import Static from 'next/image'
 import Head from 'next/head'
 import More from '../components/More'
 import More2 from '../components/More2'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';
 import TypeAnimation from 'react-type-animation';

 const imageBuilder = imageUrlBuilder(sanityClient);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

 
 const query = `*[_type == "room4" ]{rowof4[]->, rowof8[]->} `
 
 const serializers = {
     types: {
       code: (props) => (
         <pre data-language={props.node.language}>
           <code>{props.node.code}</code>
         </pre>
       ),
     },
   }
 
 
   const room4 = ({ properties }) => {
    return (
      <div className="wrapper fullhog fullhogv2 Room4detail">
        <Head>
          <title>Spacetime Library</title>
          <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
          <link rel="icon" href="/favicon.png" />
        </Head>
        {properties.map(post => (
          <div key={post._id}>
            <Quicklogo />
            <Quickticker />
            <Quicklabel />
            <Room4Label />
            <Roomsdropdown />

            
            <Quickcontainer4 />
           

           <div className="rowof4">
             {post.rowof4 && post.rowof4.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                     <div className="zoom-in" key={_id}>
                          <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <img src={imageUrlFor(thumbImage).url()} />
                      </Link>
                     </div>
                 
             ))
             }
             </div>


             <div className="rowof8">
             {post.rowof8 && post.rowof8.map(({_id, slug = '',  thumbImage = '', mainImage = ''}) => (
                     <div className="zoom-in"  key={_id}>
                          <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <img src={imageUrlFor(thumbImage).url()} />
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
   const query = `*[_type == "room4" ]{rowof4[]->, rowof8[]->} `
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
 
 export default room4;