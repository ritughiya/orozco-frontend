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

  



const Work = ({
  thumbImage,
    mainImage,
  caption,
  room,
  year,
  pagenumber1,
  relatedbook1,
  pagenumber2,
  relatedbook2,
  medium,
  dimensions,
  editionDetails,
  alt,
  slug,
  relatedworks,
  previouswork,
  nextwork
}) => {

  const slideshowAmount = (() => {
    if (relatedworks)
    return relatedworks.length;
   else 
    return 1;
  })();

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
      <If condition={room === "room1"}>
      <div className="backcontainer">
      <Link href="/room1">Back to Room </Link>
      <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} layout=
      "fill"
    objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
       <div className="arrows">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
        {/* <Link href="#"> &#62; </Link> */}
      </div>
      </div>
      </If>
      <If condition={room === "room2"}>
      <div className="backcontainer">
      <Link href="/room2">Back to Room </Link><br></br>
      <div className="backimage" style={{height: '190px', position: 'relative'}}>
        
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} layout=
      "fill"
    objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
       <div className="arrows">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
        {/* <Link href="#"> &#62; </Link> */}
      </div>
      </div>
      </If>
      <If condition={room === "room3"}>
      <div className="backcontainer">
      <Link href="/room3">Back to Room </Link><br></br>
      <div className="backimage" style={{height: '190px', position: 'relative'}}>
        
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} layout=
      "fill"
    objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
       <div className="arrows">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
        {/* <Link href="#"> &#62; </Link> */}
      </div>
      </div>
      </If>
      <If condition={room === "room4"}>
      <div className="backcontainer">
      <Link href="/spaceshiproom">Back to Room </Link><br></br>
      <div className="backimage" style={{height: '180px', position: 'relative'}}>
        
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} layout=
      "fill"
    objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
      <div className="arrows">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
        {/* <Link href="#"> &#62; </Link> */}
      </div>
      </div>
      </If>
      <div className="fullitem">
       <>
      <div className="singlecontainer desktop">
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
        initialSlide="1"
      pagination={{ clickable: true, dynamicBullets: true }}
      fadeEffect={{
        crossFade: true // enables slides to cross fade
      }}
      >
        {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
              <SwiperSlide key={_id}>
                <div className="workcontainer">
                  <div className="workcontainersub">
                <div style={{ position: 'relative', width: '80vh', height: '100%' }}>
                  
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

      <div className="thumbs">
        
        
      <Swiper
        onSwiper={setThumbsSwiper}  
        slidesPerView="auto"
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
                <div style={{ position: 'relative', width: '80vh', height: '100%' }}>
                  
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


      
      
      </div>
    </>
    <>
      
      {(() => {
        if (slideshowAmount > 1 ) {
          return (
            <>
<div className="singlecontainer mobile">

<div className="workcontainer">
{relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
         <div key={_id}> <div className="workposition" style={{ position: 'relative',  width: '88vw', height: '60vh' }}>
            
          <Image className="placeholder" draggable="false" onDragStart="return false;" src={urlFor(mainImage).url()} width="100%" height="100%" layout="fill" objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
                    <div className="info">
                {caption}, {year}<br></br>
                {medium}<br></br>
                {dimensions}<br></br>
                {editionDetails}
              </div>
              </div>

        ))}              
         </div>
        </div>
      
            
      </>


          )
        
        } else {
          return (
            <>
            <div className="singlecontainer2 mobile">

<div className="workcontainer">
            {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
         <div key={_id}> <div className="workposition" style={{ position: 'relative',  width: '88vw', height: '60vh' }}>
            
          <Image className="placeholder" draggable="false" onDragStart="return false;" src={urlFor(mainImage).url()} width="100%" height="100%" layout="fill" objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/></div>
                    <div className="info">
                {caption}, {year}<br></br>
                {medium}<br></br>
                {dimensions}<br></br>
                {editionDetails}
              </div>
              </div>
                           
        ))}
            </div>
                            </div>
                  
      
                  
            </>
      
      
            
            

          )
        }
      })()}
      



    </>

    <div className="bookcontainer desktop">
    <div className="bookdetail">
    {pagenumber1 &&     <div className="bookinfo">Referenced on page {pagenumber1} : </div>  }  


    {relatedbook1 && relatedbook1.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '160px', width: '120px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"/></div>
           </Link>
          </div> ) )}
          </div> 

          <div className="bookdetail">
    {pagenumber2 &&     <div className="bookinfo">Referenced on page {pagenumber2} : </div>  }  


    {relatedbook2 && relatedbook2.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '160px', width: '120px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"/></div>
           </Link>
          </div> ) )}
          </div> 

          {pagenumber2 &&     <div className="bookdetail">Referenced on page {pagenumber2}</div>    }  
          </div>
    
    <div className="bookcontainer mobile">
    <div className="bookdetail">
    {pagenumber1 &&     <div className="bookinfo">Referenced on page {pagenumber1} </div>  }  


    {relatedbook1 && relatedbook1.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '240px', width: '100%', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"/></div>
           </Link>
          </div> ) )}
          </div> 

          <div className="bookdetail">
    {pagenumber2 &&     <div className="bookinfo">Referenced on page {pagenumber2} </div>  }  


    {relatedbook2 && relatedbook2.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '240px', width: '190px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"/></div>
           </Link>
          </div> ) )}
          </div> 

          {pagenumber2 &&     <div className="bookdetail">Referenced on page {pagenumber2}</div>    }  
          </div>

          </div>


    <Footer />

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
      pagenumber1,
      pagenumber2,
      room,
      medium,
      dimensions,
      editionDetails,
      alt,
      relatedworks[]->,
      previouswork[]->,
      nextwork[]->,
      relatedbook1[]->,
      relatedbook2[]->
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
          pagenumber1: work.pagenumber1,
          relatedbook1: work.relatedbook1,
          pagenumber2: work.pagenumber2,
          relatedbook2: work.relatedbook2,
          medium: work.medium,
          dimensions: work.dimensions,
          editionDetails: work.editionDetails,
          alt: work.alt,
          relatedworks: work.relatedworks,
          previouswork: work.previouswork,  
          nextwork: work.nextwork   },
      }
    }

  }

  

export default Work


