import React from 'react'
import Link from 'next/link'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import Battery from "../components/Battery"
import MobileSignal from "../components/MobileSignal"
import Wifi from "../components/Wifi"
import Static from 'next/image'
import Head from 'next/head'

const query = `*[_type == "landingpage"] {
  _id,
  emailText,
  images[]{
    asset->{
        url
    },
  title,
  emails
}
`



const IndexPage = ({ properties }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Spacetime Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {properties.map(post => (
        <div key={post._id}>
          <div className="email1">
          <PortableText 
            blocks = {post.email1}
          />
          </div>
          <div className="email2">
          <div className="innerWrapper">
         <PortableText 
            blocks = {post.email2}
          />
          </div>
          <div className="Imagewrapper">
          {post.images.map(({_key,asset}, image) => 
            < Image identifier='image' image={asset}/> )}
         
          </div>
          <div className="Imagecaption">
          Live videos of the show . mp4
          </div>
          </div>

          <div className="statusHeader">
            <strong>CCTV Loading . . . </strong>
            <div className="ascii">
            +----------+<br></br>
            |*=.     . |<br></br>
            |oEo.   . .|<br></br>
            +----------+<br></br>
            </div>
          </div>
          <div className="statusFooter">
            <div className="icons">
          <MobileSignal />
          <Wifi />
          <Battery />
          </div>
          <div className="logo floating">
          <Static src="/Chess.png" alt="me" width="100" height="100" />
          <span><strong>CosmOS</strong></span>
          </div>

          </div>
        </div>
        
      ))}
      
    </div>
  )

}

export const getServerSideProps = async () => {
  const query = '*[ _type == "landingpage"]'
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

export default IndexPage