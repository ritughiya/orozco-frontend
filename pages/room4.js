/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from 'next/image'
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Quickcontainer4 from "../components/Quickcontainer4"
 import Room4Label from "../components/Room4Label"
 import Roomsdropdown from "../components/Roomsdropdown"
 import Quicklabel from '../components/Quicklabel.js'
 import Quickticker from '../components/Quickticker'
 import Quicklogo from '../components/Quicklogo'
 import Head from 'next/head'
 import Clock from 'react-live-clock';
 import Footer from "../components/Footer"
 import Customhead from "../components/Customhead"




 
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
        <Customhead />
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
                     <div key={_id}>
                     <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                       <div className="zoom-in">
                       <img draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" />
                     </div>
                 </Link>
                </div>
                 
             ))
             }
             </div>


             <div className="rowof8">
             {post.rowof8 && post.rowof8.map(({_id, slug = '',  thumbImage = '', mainImage = ''}) => (
                     <div key={_id}>
                     <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                       <div className="zoom-in">
                       <img draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" />
                     </div>
                 </Link>
                </div>
                 
             ))
             }
             </div>


             
 
             <Footer />
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