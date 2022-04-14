import {urlFor, sanityClient} from "../../sanity"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link"
import Quickticker2 from '../../components/Quickticker2'
import Quicklogo from '../../components/Quicklogo'
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer"
import Customhead from "../../components/Customhead"
import Head from 'next/head'


import { If, Elif, Else } from 'rc-if-else';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

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

  



const Book = ({
  thumbImage,
    mainImage,
  aboutbook,
  slug,
  previouswork,
  nextwork
}) => {

  

  // const slideshowAmount = relatedworks.length;


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //   const autoRefresh() {
  //     window.location = window.location.href;
  // }
  // setInterval('autoRefresh()', 2000);

  return (
    
    <div className="itemContainer">
      <Customhead />
      {/* <Head> <meta http-equiv="refresh" content="5" /></Head> */}
      <Quicklogo />
       <Quickticker2 />   
       <div className="backcontainer">
      <Link href="/bookshelf">Back to Bookshelf </Link>
      <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} layout=
      "fill"
    objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/> }
      
      </div>
       <div className="arrows">
        <div>&nbsp; 
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/book/[slug]" as={`/book/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/book/[slug]" as={`/book/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
        {/* <Link href="#"> &#62; </Link> */}
      </div>
      </div>   

      {/* <div className="singlecontainer desktop">
      {(() => {
        if (slideshowAmount > 1 ) {
          return (
            <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={500}
        watchOverflow={true}
        centeredSlides={true}
        height={300}
        loop={true}
        navigation={true}
        modules={[EffectFade, FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
        effect="fade"
      pagination={{ clickable: true, dynamicBullets: true }}
      fadeEffect={{
        crossFade: true // enables slides to cross fade
      }}
      >
        {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <SwiperSlide key={_id}>
          <div className="workcontainer">
          <div style={{ position: 'relative', width: '30rem', height: '31.5rem' }}>
            
          <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} layout=
      "fill"
    objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
                    <div className="info">
                {caption}, {year}<br></br>
                {medium}<br></br>
                {dimensions}<br></br>
                {editionDetails}
              </div>
              </div>
        </SwiperSlide> ))}
      </Swiper>

      
            

            
      </>


          )
        
        } else {
          return (
            <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              // slidesPerView={1}
              speed={500}
              watchOverflow={true}
              centeredSlides={true}
              height={300}
              navigation={true}
              modules={[EffectFade, FreeMode, Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
              effect="fade"
            pagination={{ clickable: true, dynamicBullets: true }}
            fadeEffect={{
              crossFade: true // enables slides to cross fade
            }}
            >
              {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
              <SwiperSlide key={_id}>
                <div className="workcontainer">
                  <div className="workcontainersub">
                <div style={{ position: 'relative', width: '30rem', height: '100%' }}>
                  
                <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="100%" height="100%" layout="responsive" objectFit="contain" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)}/></div>
            </div>
                          <div className="info">
                      {caption}, {year}<br></br>
                      {medium}<br></br>
                      {dimensions}<br></br>
                      {editionDetails}
                    </div>
                    
                    </div>
              </SwiperSlide> ))}
            </Swiper>

           
      
            <div className="thumbs none">
              
              
            <Swiper
              onSwiper={setThumbsSwiper}  
              slidesPerView={2}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              height={120}
              spaceBetween={5}
      
            >
              {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
              <SwiperSlide key={_id}>
                <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="100%" height="120px" layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)}/>
                    
              </SwiperSlide> ))}
            </Swiper>
            </div>

           
                  
      
                  
            </>
      
      
            
            

          )
        }
      })()}


      
      
      </div> */}
     

    <Footer />

    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
  
    const query = `*[ _type == "book" && slug.current == $pageSlug][0]{
     thumbImage,
      mainImage,
      aboutbook,
      previouswork[]->,
      nextwork[]->
    }`

  
    const book = await sanityClient.fetch(query, { pageSlug })
  
    if (!book) {
      return {
        props: null,
        notFound: true,
      }
    } else {
      return {
        props: {
          thumbImage: book.thumbImage,
          mainImage: book.mainImage,
          aboutbook: book.aboutbook,
          previouswork: book.previouswork,  
          nextwork: book.nextwork },
      }
    }

  }

  

export default Book


