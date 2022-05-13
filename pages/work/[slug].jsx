import {urlFor, sanityClient} from "../../sanity"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link"
import Quickticker from '../../components/Quickticker'
import Quicklogo2 from '../../components/Quicklogo2'
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer"
import Customhead from "../../components/Customhead"
import Head from 'next/head'
import PortableText from '@sanity/block-content-to-react'



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

  
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
    marks: {
      
      link: ({mark, children}) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = mark
        return blank ?
          <a href={href} target="_blank" rel="noreferrer">{children}</a>
          : <a href={href}>{children}</a>
      }
    }
  }


const Work = ({
  thumbImage,
    mainImage,
  caption2,
  room,
  year2,
  pagenumber1,
  relatedbook1,
  pagenumber2,
  relatedbook2,
  pagenumber3,
  relatedbook3,
  pagenumber4,
  relatedbook4,
  medium2,
  dimensions2,
  editionDetails2,
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


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    

  return (
    <html lang="en" className="notranslate" translate="no">
    <div className="itemContainer Workpage">
      <Customhead />
      <Quicklogo2 />
       <Quickticker />      
      <If condition={room === "room1"}>
      <div className="backcontainer">
      <Link passHref href="/room-one">Back to Room </Link>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt="" /></div> }
       <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room2"}>
      <div className="backcontainer">
      <Link passHref href="/room-two">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt=""  /></div> }
       <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room3"}>
      <div className="backcontainer">
      <Link passHref href="/room-three">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt=""  /></div> }
       <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room4"}>
      <div className="backcontainer">
      <Link passHref href="/spaceship-room">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt=""  /></div> }
      <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room4wall1"}>
      <div className="backcontainer">
      <Link passHref href="/spaceship-room#wall1">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt=""  /></div> }
      <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room4wall2"}>
      <div className="backcontainer">
      <Link passHref href="/spaceship-room#wall2">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt="" /></div> }
      <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room4wall3"}>
      <div className="backcontainer">
      <Link passHref href="/spaceship-room#wall3">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)} alt=""  /></div> }
      <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "room4wall4"}>
      <div className="backcontainer">
      <Link passHref href="/spaceship-room#wall4">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt=""  /></div> }
      <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      </div>
      </If>
      <If condition={room === "offices"}>
      <div className="backcontainer">
      <Link passHref href="/offices">Back to Room </Link><br></br>
      {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} 
    objectFit="contain" placeholder="blur" height="170px" width="130px"
      blurDataURL={rgbDataURL(73, 71, 63)}  alt=""  /></div> }
      <div className="arrows desktop">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
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
        
        slidesPerView= 'auto'
        speed={500}
                height={300}
        loop={false}
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
        {relatedworks && relatedworks.map(({_id, mainImage = '', caption2 = '', year2 = '', medium2 = '', dimensions2 = '', editionDetails2 ='', alt=''}) => (
              <SwiperSlide key={_id}>
                <div className="workcontainer">
                  <div>
                  <div className="workcontainersub">
                <div className="workposition" style={{ position: 'relative', width: '42vw', height: '80vh' }}>
                  
                {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} alt={alt}  layout="fill" objectFit="contain" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} /> } </div>
            </div>
            
            {caption2 && <div className="info">
            <div className="infocopy">

                     <PortableText
                  blocks={caption2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />,&#8200;
                <PortableText
                  blocks={year2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={medium2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={dimensions2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                <br></br>
                <PortableText
                  blocks={editionDetails2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                      
                      </div> 
     
              </div>  }
                    </div>
                    </div>
              </SwiperSlide> ))}
      </Swiper>

      <div className="thumbs">
        
        
      <Swiper
        onSwiper={setThumbsSwiper}  
        slidesPerView="3"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        height={60}
        spaceBetween={2}

      >
        {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <SwiperSlide key={_id}>
          {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="120px" height="120px"  placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)} alt="Click for more photos" /> }
              
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
              slidesPerView= 'auto'
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
              {relatedworks && relatedworks.map(({_id, mainImage = '', caption2 = '', year2 = '', medium2 = '', dimensions2 = '', editionDetails2 =''}) => (
              <SwiperSlide key={_id}>
                <div className="workcontainer">
                  <div className="workcontainersub">
                <div className="workposition" style={{ position: 'relative', width: '42vw', height: '80vh' }}>
                  
                {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()}  layout="fill" objectFit="contain" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} alt={alt}/> }
            </div>
            </div>
            {caption2 && <div className="info">
            <div className="infocopy">

                     <PortableText
                  blocks={caption2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />,&#8200;
                <PortableText
                  blocks={year2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={medium2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={dimensions2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                <br></br>
                <PortableText
                  blocks={editionDetails2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                      
                      </div> 
     
              </div>  }
                    
                    </div>
              </SwiperSlide> ))}
            </Swiper>

           
      
            <div className="thumbs none">
              
              
            <Swiper
              onSwiper={setThumbsSwiper}  
                      slidesPerView= 'auto'

              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              height={120}
              spaceBetween={5}
      
            >
              {relatedworks && relatedworks.map(({_id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
              <SwiperSlide key={_id}>
                {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="120px" height="120px"  placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)} alt=""/> }
                    
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


<div className="arrows mobile">
        <div>&#8203;
      {previouswork && previouswork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
          </div> ) )}
          </div>
          <div>
          {nextwork && nextwork.map(({_id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails =''}) => (
        <div key={_id}>
          <Link passHref href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
          </div> ) )}
          </div>
      </div>
      
      {(() => {
        if (slideshowAmount > 1 ) {
          return (
            <>
<div className="singlecontainer mobile">


<div className="workcontainer">
{relatedworks && relatedworks.map(({_id, mainImage = '', caption2 = '', year2 = '', medium2 = '', dimensions2 = '', editionDetails2 =''}) => (
         <div key={_id}> <div className="workposition" style={{ position: 'relative',  width: '86vw', height: '28rem' }}>
            
            {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)} alt={alt}/> }
      </div>
                  
                  {caption2 && <div className="info">
            <div className="infocopy">

                     <PortableText
                  blocks={caption2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />,&#8200;
                <PortableText
                  blocks={year2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={medium2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={dimensions2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                <br></br>
                <PortableText
                  blocks={editionDetails2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                      
                      </div> 
     
              </div>  }
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
            {relatedworks && relatedworks.map(({_id, mainImage = '', caption2 = '', year2 = '', medium2 = '', dimensions2 = '', editionDetails2 =''}) => (
         <div key={_id}> <div className="workposition" style={{ position: 'relative',  width: '86vw', height: '28rem' }}>
            
            {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" objectFit="contain" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)} alt={alt}/> }
      </div>

{caption2 && <div className="info">
            <div className="infocopy">

                     <PortableText
                  blocks={caption2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />,&#8200;
                <PortableText
                  blocks={year2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={medium2}
                  onMissingComponent={false}
                  serializers={serializers} 
                /><br></br>
                <PortableText
                  blocks={dimensions2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                <br></br>
                <PortableText
                  blocks={editionDetails2}
                  onMissingComponent={false}
                  serializers={serializers} 
                />
                      
                      </div> 
     
              </div>  }
                    
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
    {pagenumber1 &&     <div className="bookinfo">Referenced on page {pagenumber1}: </div>  }  

    {relatedbook1 && relatedbook1.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 

          
          <div className="bookimage pointer" style={{height: '160px', width: '120px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain" alt="Click to see book" /> 
            </div></Link>
          </div> ) )}
          </div> 

          <div className="bookdetail">
    {pagenumber2 &&     <div className="bookinfo">Referenced on page {pagenumber2}: </div>  }  


    {relatedbook2 && relatedbook2.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '160px', width: '120px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/>
            </div>
           </Link>
          </div> ) )}
          </div> 

          <div className="bookdetail">
    {pagenumber3 &&     <div className="bookinfo">Referenced on page {pagenumber3}: </div>  }  


    {relatedbook3 && relatedbook3.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '160px', width: '120px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/></div>
           </Link>
          </div> ) )}
          </div> 

          <div className="bookdetail">
    {pagenumber4 &&     <div className="bookinfo">Referenced on page {pagenumber4}: </div>  }  


    {relatedbook4 && relatedbook4.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '160px', width: '120px', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/></div>
           </Link>
          </div> ) )}
          </div> 

          </div>
    
    <div className="bookcontainer mobile">
    <div className="bookdetail">
    {pagenumber1 &&     <div className="bookinfo">Referenced on page {pagenumber1}: </div>  }  


    {relatedbook1 && relatedbook1.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '240px', width: '100%', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/></div>
           </Link>
          </div> ) )}
          </div> 


          <div className="bookdetail">
    {pagenumber2 &&     <div className="bookinfo">Referenced on page {pagenumber2}: </div>  }  


    {relatedbook2 && relatedbook2.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '240px', width: '100%', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()} layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/></div>
           </Link>
          </div> ) )}
          </div> 
          <div className="bookdetail">
    {pagenumber3 &&     <div className="bookinfo">Referenced on page {pagenumber3}: </div>  }  


    {relatedbook3 && relatedbook3.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '240px', width: '100%', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/></div>
           </Link>
          </div> ) )}
          </div> 
          <div className="bookdetail">
    {pagenumber4 &&     <div className="bookinfo">Referenced on page {pagenumber4}: </div>  }  


    {relatedbook4 && relatedbook4.map(({_id, slug = '', mainImage = ''}) => (
        <div key={_id}>
          <Link passHref href="/book/[slug]" as={`/book/${slug.current}`}> 
          
            <div className="bookimage pointer" style={{height: '240px', width: '100%', position: 'relative'}}>
      <br></br>
      <Image className="bookimg placeholder" draggable="false" onDragStart="return false;"  onContextMenu={(e)=> e.preventDefault()} src={urlFor(mainImage).url()}  layout="fill" placeholder="blur"
            blurDataURL={rgbDataURL(73, 71, 63)} objectFit="contain"  alt="Click to see book"/></div>
           </Link>
          </div> ) )}
          </div> 

          </div>

          </div>


    <Footer />

    </div>
    </html>

  )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
  
    const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
     thumbImage,
      mainImage,
      caption2,
      year2,
      pagenumber1,
      pagenumber2,
      pagenumber3,
      pagenumber4,
      room,
      medium2,
      dimensions2,
      editionDetails2,
      alt,
      relatedworks[]->,
      previouswork[]->,
      nextwork[]->,
      relatedbook1[]->,
      relatedbook2[]->,
      relatedbook3[]->,
      relatedbook4[]->
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
          caption2: work.caption2,
          room: work.room,
          year2: work.year2,
          pagenumber1: work.pagenumber1,
          relatedbook1: work.relatedbook1,
          pagenumber2: work.pagenumber2,
          relatedbook2: work.relatedbook2,
          pagenumber3: work.pagenumber3,
          relatedbook3: work.relatedbook3,
          pagenumber4: work.pagenumber4,
          relatedbook4: work.relatedbook4,
          medium2: work.medium2,
          dimensions2: work.dimensions2,
          editionDetails2: work.editionDetails2,
          alt: work.alt,
          relatedworks: work.relatedworks,
          previouswork: work.previouswork,  
          nextwork: work.nextwork   },
      }
    }

  }

  

export default Work

