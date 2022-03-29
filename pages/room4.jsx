import { useState, useEffect } from 'react';
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from 'next/image'
 import Animation3 from "../components/Animation3"
 import Circle from "../components/Circle"
 import Quickcontainer4 from "../components/Quickcontainer4"
 import RoomLabel from "../components/RoomLabel"
 import Roomsdropdown2 from "../components/Roomsdropdown2"
 import Quicklabel from '../components/Quicklabel.js'
 import Quickticker2 from '../components/Quickticker2'
 import Quicklogo from '../components/Quicklogo'
 import Clock from 'react-live-clock';
 import Footer from "../components/Footer"
 import Customhead from "../components/Customhead"
 import { EffectFade, FreeMode, Navigation, Thumbs, EffectCube, Pagination } from 'swiper';
 import { Swiper, SwiperSlide } from "swiper/react";

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
   }
 
 
   const Room4 = ({ properties }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
      <div className="wrapper fullhog fullhogv2 Room4detail">
        <Customhead />
        {properties.map(post => (
          <div className="flex" key={post._id}>
             <div className="flexgrow">
            <Quicklogo />
            <Quickticker2 />
            <div className="room4container">
            <RoomLabel />
            <Roomsdropdown2 />
            <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "10px",
        }}
      spaceBetween={0}
        speed={1000}
        watchOverflow={true}
        centeredSlides={true}
        height={300}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
      modules={[EffectFade, FreeMode, Navigation, Thumbs]}
      className="mySwiper3"
      effect="fade"
      // Disable preloading of all images
  preloadImages="false"
  // Enable lazy loading
  lazy={true}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      fadeEffect={{
        crossFade: true // enables slides to cross fade
      }}
    >
      <SwiperSlide id="wall1">
      <div className="embed-container swiper-lazy">
      <iframe loading="lazy" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
     </div>
      </SwiperSlide>
      <SwiperSlide id="wall2">
      <div className="embed-container swiper-lazy">
      <iframe loading="lazy" src="https://player.vimeo.com/video/688958162?h=2f2aadf50d&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="embed-container swiper-lazy">
      <iframe loading="lazy" src="https://player.vimeo.com/video/688958293?h=7aeff40d6d&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="embed-container swiper-lazy">
      <iframe loading="lazy" src="https://player.vimeo.com/video/688958259?h=c1b5770c19&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
    
    <Swiper
        onSwiper={setThumbsSwiper}
        // slidesPerView={1}
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[EffectFade, FreeMode, Navigation, Thumbs]}
        className="mySwiper4"
        autoHeight="true"
        // effect="fade"
      loop={true}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      // fadeEffect={{
      //   crossFade: false // enables slides to cross fade
      // }}
      >
        <SwiperSlide>
        <div className="rowof4">
              {post.wall1 && post.wall1.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                      <div key={_id}>
                      <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                        <div className="zoom-in held">
                        {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/>  }                    </div>
                  </Link>
                 </div>
              ))
              }
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="rowof4">
              {post.wall2 && post.wall2.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                      <div key={_id}>
                      <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                        <div className="zoom-in held">
                        {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" fit="max" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/>  }                    </div>
                  </Link>
                 </div>
              ))
              }
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="rowof4">
              {post.wall3 && post.wall3.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                      <div key={_id}>
                      <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                        <div className="zoom-in held">
                        {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" objectFit="cover" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/>  }                      </div>
                  </Link>
                 </div>
              ))
              }
              </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="rowof4">
              {post.wall4 && post.wall4.map(({_id, slug = '', thumbImage = '', mainImage = ''}) =>  (
                      <div key={_id}>
                      <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                        <div className="zoom-in held">
                        {thumbImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} width="400px" height="100%" layout="responsive" objectFit="cover" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/>  }                       </div>
                  </Link>
                 </div>
              ))
              }
              </div>
        </SwiperSlide>
      </Swiper>
      </div>
             <Footer />
          </div>
          
        ))}
        
      </div>
    )
  
  }
 
 export const getServerSideProps = async () => {
   const query = `*[_type == "spaceshiproom" ]{wall1[]->, wall2[]->, wall3[]->, wall4[]->} `
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
 
 export default Room4