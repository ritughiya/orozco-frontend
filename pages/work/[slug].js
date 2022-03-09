import {urlFor, sanityClient} from "../../sanity"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link"
import Quickticker2 from '../../components/Quickticker2'
import Quicklogo from '../../components/Quicklogo'
import Quickinventory from '../../components/Quickinventory.js'
import Quicklabel from '../../components/Quicklabel.js'
import Quicklabel2 from '../../components/Quicklabel2.js'
import Itemnav from "../../components/Itemnav.js"

const imageBuilder = imageUrlBuilder(sanityClient);

function imageUrlFor(source) {
  return imageBuilder.image(source).auto('format').fit('clip');
}



const Work = ({
  thumbImage,
    mainImage,
  caption,
  year,
  medium,
  dimensions,
  editionDetails,
  alt,
  slug,
  relatedworks,
}) => {

  return (
    
    <div className="container WorkContainer">
      <Head>
          <title>Spacetime Library</title>
          <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
          <link rel="icon" href="/favicon.png" />
        </Head>
      <Quicklogo />
       <Quickticker2 />

       <Itemnav />
       <div className="imageContainer2">
       <img src={imageUrlFor(mainImage).url()} />
       </div>
       <div className="textContainer2">
        <div>{caption}, {year}</div>
        <div>{medium}</div>
        <div>{dimensions}</div>
        <div>{editionDetails}</div>
      </div>
      {/* <div className="imageContainer2b">
        <div className="backContainer">
      <div className="backto">
      <img src={imageUrlFor(thumbImage).url()} />
      </div></div>
      <div className="relatedWorkscontainer2">

      {relatedworks && relatedworks.map(({_id, mainImage = ''}) => 
             (

                     <div key={_id}>

                        {/* <img
                      src={urlFor(asset.mainImage).url()}
                     
                    /> */}
                            {/* <img src={asset.imageUrl} /> */}
                         {/* <Image src={urlFor(asset.mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/> */}
                        {/* {mainImage && (
                         <img src={imageUrlFor(mainImage).url()} />)} */}

{/* <Image src={urlFor(asset.mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/> */}

                          {/* <Link href={`work/${image.slug.current}`}> */}
                         {/* <img src={urlFor(image.mainImage).url()} /> */}
                         {/* </Link> */}
                     </div>
                 
             ))
             }
                                     </div>
 </div> */}

    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
  
    const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
     thumbImage,
      mainImage,
      caption,
      year,
      medium,
      dimensions,
      editionDetails,
      alt,
      relatedworks[]->{
        ...
      }
    }`
  
    const work = await sanityClient.fetch(query, { pageSlug })
  
    if (!work) {
      return {
        props: null,
        notFound: true,
      }
    } else {
      return {
        props: {
          thumbImage: work.thumbImage,
          mainImage: work.mainImage,
          caption: work.caption,
          year: work.year,
          medium: work.medium,
          dimensions: work.dimensions,
          editionDetails: work.editionDetails,
          alt: work.alt,
          relatedworks: work.relatedworks,
        },
      }
    }

  }

export default Work