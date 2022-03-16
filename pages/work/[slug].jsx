import {urlFor, sanityClient} from "../../sanity"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link"
import Room1Materials from '../../components/Room1Materials'
import Room2Materials from '../../components/Room2Materials'
import Room3Materials from '../../components/Room3Materials'
import Room4Materials from '../../components/Room4Materials'
import Quickticker2 from '../../components/Quickticker2'
import Quicklogo from '../../components/Quicklogo'
import Quicklabel from '../../components/Quicklabel.js'
import Quicklabel2 from '../../components/Quicklabel2.js'
import Itemnav from "../../components/Itemnav.js"
import { Swiper, SwiperSlide } from "swiper/react";

import { If, Elif, Else } from 'rc-if-else';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";


const imageBuilder = imageUrlBuilder(sanityClient);

import { EffectFade, FreeMode, Navigation, Thumbs } from "swiper";

function imageUrlFor(source) {
  return imageBuilder.image(source).auto('format').fit('clip');
}



const Work = ({
  thumbImage,
    mainImage,
  caption,
  room,
  year,
  medium,
  dimensions,
  editionDetails,
  alt,
  slug,
  relatedworks
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
      
      <If condition={room === "room1"}>
      <div className="backcontainer">
      <Link href="/room1">Back to Room </Link>
      <img src={imageUrlFor(thumbImage).url()} />
      <div className="arrows">
        <Link href="#"> &#60; </Link>
        <Link href="#"> &#62; </Link>
      </div>
      </div>
      </If>
      <If condition={room === "room2"}>
        <Room2Materials />
      </If>
      <If condition={room === "room3"}>
        <Room3Materials />
      </If>
      <If condition={room === "room4"}>
        <Room4Materials />
      </If>
       <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        speed={500}
        
        centeredSlides={true}
        height={300}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <SwiperSlide key={_id}>
          <div className="workcontainer">
              <img src={imageUrlFor(mainImage).url()} />
              <div className="info">
                {caption}, {year}<br></br>
                {medium}<br></br>
                {dimensions}<br></br>
                {editionDetails}
              </div>
              </div>
        </SwiperSlide> ))}
      </Swiper>

      <div className="thumbs">
        <div className="thumbhead">Reference Images:</div>
        
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <SwiperSlide key={_id}>
              <img src={imageUrlFor(mainImage).url()} />
              
        </SwiperSlide> ))}
      </Swiper>
      </div>
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
      room,
      medium,
      dimensions,
      editionDetails,
      alt,
      relatedworks[]->,
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
          room: work.room,
          year: work.year,
          medium: work.medium,
          dimensions: work.dimensions,
          editionDetails: work.editionDetails,
          alt: work.alt,
          relatedworks: work.relatedworks        },
      }
    }

  }

  

export default Work


