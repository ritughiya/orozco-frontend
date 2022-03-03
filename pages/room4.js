 /**
 * @jest-environment jsdom
 */

  import React from 'react'
  import Link from 'next/link'
  import Script from 'next/script'
  import { sanityClient, urlFor} from '../sanity'
  import Image from 'next/image'
 //  import Image from "../components/Image"
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
             <Quicklogo />
             <Quickticker />
             {/* <Quickinventory /> */}
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
             
             <div className="videoContainer">
            
  
            <div className="iframe-container">
            <iframe className="" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
            </div>
  
            </div> 
            
 
            <div className="rowof4">
              {post.rowof4 && post.rowof4.map(({_id, slug = '', mainImage = ''}) =>  (
                      <div className="zoom-in" key={_id}>
                           <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <Image src={urlFor(mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/>
                       </Link>
                      </div>
                  
              ))
              }
              </div>
 
 
              <div className="rowof8">
              {post.rowof8 && post.rowof8.map(({_id, slug = '', mainImage = ''}) => (
                      <div className="zoom-in"  key={_id}>
                           <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                          <Image src={urlFor(mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/>
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
 
 














