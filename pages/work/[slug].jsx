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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const imageBuilder = imageUrlBuilder(sanityClient);

import { FreeMode, Navigation, Thumbs } from "swiper";

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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    
    <div className="itemContainer">
      <Head>
          <title>Spacetime Library</title>
          <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
          <link rel="icon" href="/favicon.png" />
        </Head>
      <Quicklogo />
       <Quickticker2 />

       <Itemnav />

       <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        height={300}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
       {relatedworks && relatedworks.map(({_id, mainImage = ''}) => (
        <SwiperSlide>
              <img src={imageUrlFor(mainImage).url()} />
        </SwiperSlide> ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        grid={ {rows: 2,}}
        loop={true}
        spaceBetween={10}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {relatedworks && relatedworks.map(({_id, mainImage = ''}) => (
        <SwiperSlide>
              <img src={imageUrlFor(mainImage).url()} />
        </SwiperSlide> ))}
      </Swiper>
    </>

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