 /**
 * @jest-environment jsdom
 */

  import React from 'react'
  import Link from 'next/link'
  import Script from 'next/script'
  import { sanityClient, urlFor} from '../sanity'
  import Image from 'next/image'
  import imageUrlBuilder from '@sanity/image-url'
  import Animation3 from "../components/Animation3"
  import Circle from "../components/Circle"
  import Container1 from "../components/Container1"
  import Container2 from "../components/Container2"
  import Container3 from "../components/Container3"
  import Container4 from "../components/Container4"
  import Logo from "../components/Logo"
  import Logotransparent from "../components/Logotransparent"
  import Label from "../components/Label"
  import Label2 from "../components/Label2"
  import Labelnew from '../components/Labelnew'
  import Room2Label from "../components/Room2Label"
  import Roomsdropdown from "../components/Roomsdropdown"
  import Quicklabel from '../components/Quicklabel.js'
  import Quickticker from '../components/Quickticker'
  import Quicklogo from '../components/Quicklogo'
  import Quickinventory from '../components/Quickinventory.js'
  import Static from 'next/image'
  import Head from 'next/head'
  import BlockContent from '@sanity/block-content-to-react'
  import Clock from 'react-live-clock';
  import TypeAnimation from 'react-type-animation';
 
  const imageBuilder = imageUrlBuilder(sanityClient);
 
 function imageUrlFor(source) {
   return imageBuilder.image(source);
 }
 
  
  const query = `*[_type == "room2" ]{rowof4[]->, rowof8[]->} `
  
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
       <div className="wrapper fullhog fullhogv2">
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
             <Room2Label />
             <Roomsdropdown />
             
             <div className="videoContainer">
            
  
            <div className="iframe-container">
            <iframe src="https://player.vimeo.com/video/675558810?h=2f656dbd0f&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="100%" height="100vh" frameBorder="0" allowFullScreen></iframe>   
            </div>
  
            </div> 
            
 
            <div className="rowof4">
              {post.rowof4 && post.rowof4.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                      <div className="zoom-in" key={_id}>
                           <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                           <img src={imageUrlFor(thumbImage).url()} />
                          {/* <Image src={imageUrlFor(thumbImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/> */}
                       </Link>
                      </div>
                  
              ))
              }
              </div>
 
 
              <div className="rowof8">
              {post.rowof8 && post.rowof8.map(({_id, slug = '', mainImage = ''}) => (
                      <div className="zoom-in"  key={_id}>
                           <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <Image src={imageUrlFor(mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/>
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