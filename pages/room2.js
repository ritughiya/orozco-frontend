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
  import Quickcontainer2 from "../components/Quickcontainer2"
  import Logotransparent from "../components/Logotransparent"
  import Labelnew from '../components/Labelnew'
  import Room2Label from "../components/Room2Label"
  import Roomsdropdown from "../components/Roomsdropdown"
  import Quicklabel from '../components/Quicklabel.js'
  import Quickticker2 from '../components/Quickticker2'
  import Quicklogo from '../components/Quicklogo'
  import Static from 'next/image'
  import Clock from 'react-live-clock';
  import Footer from "../components/Footer"
  import Customhead from "../components/Customhead"

 

 
  const query = `*[_type == "room2" ]{rowof4[]->, rowof8[]->} `
  
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





  const serializers = {
      types: {
        code: (props) => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
    }
  
  
    const room2 = ({ properties }) => {
     return (
       <div className="wrapper fullhog fullhogv2 Room2detail">
         <Customhead />
         {properties.map(post => (
                    <div className="flex" key={post._id}>
                    <div className="flexgrow">
             <Quicklogo />
             <Quickticker2 />
             <Quickcontainer2 />

             
      
            
 
             <div className="rowof4">
             {post.rowof4 && post.rowof4.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                     <div key={_id}>
                          <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                            <div className="zoom-in held">
                            {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/>  }  
                          </div>
                      </Link>
                     </div>
                 
             ))
             }
             </div>


             <div className="rowof8">
             {post.rowof8 && post.rowof8.map(({_id, slug = '', thumbImage = '', mainImage = ''}) => (
                     <div key={_id}>
                     <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                       <div className="zoom-in">
                       {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/>  }                   </div>
                 </Link>
                </div>
                 
             ))
             }
             </div>
             
             </div>
 
              <Footer />

              
  
  
           </div>
           
         ))}
         
       </div>
     )
   
   }
  
  export const getServerSideProps = async () => {
    const query = `*[_type == "room2" ]{rowof4[]->, rowof8[]->} `
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
  
  export default room2;