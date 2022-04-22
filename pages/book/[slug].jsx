import { urlFor, sanityClient } from "../../sanity"
import PortableText from '@sanity/block-content-to-react'

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
  `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
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



const Book = ({
  thumbImage,
  mainImage,
  aboutbook,
  aboutbook2,
  aboutbook3,
  aboutbook4,
  slug,
  previouswork,
  nextwork,
  relatedworks,
  worksreferenced,
  excerptlink,
  worksreferenced2,
  excerptlink2
}) => {


  const slideshowAmount = (() => {
    if (relatedworks)
      return relatedworks.length;
    else
      return 1;
  })();


  const [thumbsSwiper, setThumbsSwiper] = useState(null);




  return (

    <div className="itemContainer Bookpage">
      <Customhead />
      {/* <Head> <meta http-equiv="refresh" content="5" /></Head> */}
      <Quicklogo />
      <Quickticker2 />
      <div className="backcontainer">
        <Link href="/bookshelf">Back to Bookshelf </Link>
        {/* {thumbImage && <div className="backimage" style={{height: '190px', position: 'relative'}}>
      <br></br>
      <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(thumbImage).url()} layout=
      "fill"
    objectFit="cover" placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)}/> 
      
      </div> } */}
        <div className="arrows desktop">
          <div>&nbsp;
            {previouswork && previouswork.map(({ _id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
              <div key={_id}>
                <Link href="/book/[slug]" as={`/book/${slug.current}`}> &#60; </Link>
              </div>))}
          </div>
          <div>
            {nextwork && nextwork.map(({ _id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
              <div key={_id}>
                <Link href="/book/[slug]" as={`/book/${slug.current}`}> &#62; </Link>
              </div>))}
          </div>
        </div>
      </div>
      <div className="fullitem">
        <>

          <div className="singlecontainer desktop">
            {(() => {
              if (slideshowAmount > 1) {
                return (
                  <>
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      slidesPerView='auto'
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
                      {relatedworks && relatedworks.map(({ _id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                        <SwiperSlide key={_id}>
                          <div className="workcontainer">
                          <div style={{ position: 'relative', width: '80vh', height: '100%' }}>

                              {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} layout=
                                "fill"
                                objectFit="contain" placeholder="blur"
                                blurDataURL={rgbDataURL(73, 71, 63)} />}

                            </div>

                          </div>
                        </SwiperSlide>))}
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
                      slidesPerView='auto'
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
                      {relatedworks && relatedworks.map(({ _id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                        <SwiperSlide key={_id}>
                          <div className="workcontainer">
                            <div className="workcontainersub">
                            <div style={{ position: 'relative', width: '80vh', height: '100%' }}>

                                {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="100%" height="100%" layout="responsive" objectFit="contain" placeholder="blur"
                                  blurDataURL={rgbDataURL(73, 71, 63)} />}
                              </div>
                            </div>

                          </div>
                        </SwiperSlide>))}
                    </Swiper>



                    <div className="thumbs none">


                      <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView='auto'
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                        height={120}
                        spaceBetween={5}

                      >
                        {relatedworks && relatedworks.map(({ _id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                          <SwiperSlide key={_id}>
                            {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="100%" height="120px" layout="fill" placeholder="blur"
                              blurDataURL={rgbDataURL(73, 71, 63)} />}

                          </SwiperSlide>))}
                      </Swiper>
                    </div>





                  </>





                )
              }
            })()}


            <div className="info">
              <div className="title">
                {aboutbook && <PortableText
                  blocks={aboutbook}
                />}</div>
                <div className="publishing">
            {aboutbook3 && <PortableText
              blocks={aboutbook3}
            />}</div>
              <div className="desc">
                {aboutbook2 && <PortableText
                  blocks={aboutbook2}
                />}
                <div className="links">
                  {aboutbook4 && <PortableText
                    blocks={aboutbook4}
                  />}</div>

              </div>

            </div>

          </div>

        </>
        <>


          <div className="arrows mobile">
            <div>&#8203;
              {previouswork && previouswork.map(({ _id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#60; </Link>
                </div>))}
            </div>
            <div>
              {nextwork && nextwork.map(({ _id, slug = '', mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}> &#62; </Link>
                </div>))}
            </div>
            {/* <Link href="#"> &#62; </Link> */}
          </div>

          {(() => {
            if (slideshowAmount > 1) {
              return (
                <>
                  <div className="singlecontainer mobile">


                    <div className="workcontainer">
                      {relatedworks && relatedworks.map(({ _id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                        <div key={_id}> <div className="workposition" style={{ position: 'relative', width: '86vw', height: '60vh' }}>

                          {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="100%" height="100%" layout="fill" objectFit="contain" placeholder="blur"
                            blurDataURL={rgbDataURL(73, 71, 63)} />}
                        </div>

                        </div>

                      ))}

                    </div>

                    <div className="info">
                      <div className="title">
                        {aboutbook && <PortableText
                          blocks={aboutbook}
                        />}</div>
                        <div className="publishing">
            {aboutbook3 && <PortableText
              blocks={aboutbook3}
            />}</div>
                      <div className="desc">
                        {aboutbook2 && <PortableText
                          blocks={aboutbook2}
                        />}
                        <div className="links">
                          {aboutbook4 && <PortableText
                            blocks={aboutbook4}
                          />}</div>
                      </div>

                    </div>

                  </div>


                </>


              )

            } else {
              return (
                <>


                  <div className="singlecontainer2 mobile">



                    <div className="workcontainer">
                      {relatedworks && relatedworks.map(({ _id, mainImage = '', caption = '', year = '', medium = '', dimensions = '', editionDetails = '' }) => (
                        <div key={_id}> <div className="workposition" style={{ position: 'relative', width: '86vw', height: '28rem' }}>

                          {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="100%" height="100%" layout="fill" objectFit="contain" placeholder="blur"
                            blurDataURL={rgbDataURL(73, 71, 63)} />}

                        </div>

                        </div>

                      ))}

                    </div>

                    <div className="info">
                      <div className="title">
                        {aboutbook && <PortableText
                          blocks={aboutbook}
                        />}</div>
                         <div className="publishing">
            {aboutbook3 && <PortableText
              blocks={aboutbook3}
            />}</div>
                      <div className="desc">
                        {aboutbook2 && <PortableText
                          blocks={aboutbook2}
                        />}
                        <div className="links">
                          {aboutbook4 && <PortableText
                            blocks={aboutbook4}
                          />}</div>
                      </div>

                    </div>

                  </div>



                </>





              )
            }
          })()}




        </>

        <div className="bookcontainer desktop">
          <div className="bookdetail">
            {worksreferenced && <div className="bookinfo">Selection of works referenced: </div>}
            <div className="worksreferencedcontainer">
            <div className="worksreferenced">

              {worksreferenced && worksreferenced.map(({ _id, slug = '', mainImage = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                
                  
                    <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="100%" height="100%" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover" />}
                        
                    </div>



                  </Link>
                </div>))}
                {excerptlink &&  <div className="excerptlink">
                <Link href={`${excerptlink}`} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Excerpt
                  </a>
                </Link>
              </div>  }
            </div>
            <div className="worksreferenced">

              {worksreferenced2 && worksreferenced2.map(({ _id, slug = '', mainImage = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover" />}
                        
                    </div>



                  </Link>
                </div>))}
                {excerptlink2 && <div className="excerptlink">
                <Link href={`${excerptlink2}`} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Excerpt
                  </a>
                </Link>
              </div> }
            </div>
            </div>
            
          </div>


        </div>



        <div className="bookcontainer mobile">
          <div className="bookdetail">
            {worksreferenced && <div className="bookinfo">Selection of works referenced: </div>}

            <div className="worksreferenced">
              {worksreferenced && worksreferenced.map(({ _id, slug = '', mainImage = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover" />}
                        
                    </div>
                  </Link>
                </div>))}
                {excerptlink &&  <div className="excerptlink">
                <Link href={`${excerptlink}`} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    Excerpt
                  </a>
                </Link>
              </div>  }
            </div>
          </div>


        </div>

        

      </div>


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
      aboutbook2,
      aboutbook3,
      aboutbook4,
      previouswork[]->,
      nextwork[]->,
      relatedworks[]->,
      worksreferenced[]->,
      excerptlink,
      worksreferenced2[]->,
      excerptlink2
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
        aboutbook2: book.aboutbook2,
        aboutbook3: book.aboutbook3,
        aboutbook4: book.aboutbook4,
        previouswork: book.previouswork,
        nextwork: book.nextwork,
        relatedworks: book.relatedworks,
        worksreferenced: book.worksreferenced,
        excerptlink: book.excerptlink,
        worksreferenced2: book.worksreferenced2,
        excerptlink2: book.excerptlink2
      },
    }
  }

}



export default Book


