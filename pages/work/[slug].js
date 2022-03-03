import { sanityClient} from "../../sanity"
import { useState, useEffect } from 'react';
// import Image from "../../components/Image"
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import imageUrlFor from "../../utils/imageUrlFor";
import Link from "next/link"
import Quickticker from '../../components/Quickticker'
import Quicklogo from '../../components/Quicklogo'
import Quickinventory from '../../components/Quickinventory.js'
import Quicklabel2 from '../../components/Quicklabel2.js'

function urlFor (source) {
  return imageUrlBuilder(sanityClient).image(source)
}

const Work = ({
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
      <Quicklogo />
       {/* <Quickinventory /> */}
       <Quickticker />
       {/* <Quicklabel2 /> */}
       <div className="imageContainer">
                         <img src={urlFor(mainImage).url()} />
       </div>
       <div className="textContainer">
        <div>{caption}, {year}</div>
        <div>{medium}</div>
        <div>{dimensions}</div>
        <div>{editionDetails}</div>
      </div>
      <div className="relatedWorkscontainer">
      {relatedworks && relatedworks.map((asset) => 
             (

                     <div key={asset._id}>

                        {/* <img
                      src={urlFor(asset.mainImage).url()}
                     
                    /> */}
                            {/* <img src={asset.imageUrl} /> */}
                         {/* <Image src={urlFor(asset.mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/> */}
                        

<Image src={urlFor(asset.mainImage).url()} alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/>

                          {/* <Link href={`work/${image.slug.current}`}> */}
                         {/* <img src={urlFor(image.mainImage).url()} /> */}
                         {/* </Link> */}
                     </div>
                 
             ))
             }
                                  </div>

    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
  
    const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
      mainImage,
      caption,
      year,
      medium,
      dimensions,
      editionDetails,
      alt,
      relatedworks[]->
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