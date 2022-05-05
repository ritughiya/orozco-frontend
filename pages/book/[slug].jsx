import { urlFor, sanityClient } from "../../sanity"
import PortableText from '@sanity/block-content-to-react'

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link"
import Quickticker2 from '../../components/Quickticker2'
import Quicklogo2 from '../../components/Quicklogo2'
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
  excerptlink2,
  worksreferenced2,
  excerptlinktext,
  excerptlink3,
  worksreferenced3,
  excerptlink4,
  worksreferenced4,
  excerptlink5,
  worksreferenced5,
  excerptlink6,
  worksreferenced6,
  excerptlink7,
  worksreferenced7,
  excerptlink8,
  worksreferenced8,
  excerptlink9,
  worksreferenced9,
  excerptlink10,
  worksreferenced10,
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
      <Quicklogo2 />
      <Quickticker2 />
      <div className="backcontainer">
        <Link href="/library">Back to Library </Link>
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
                                blurDataURL={rgbDataURL(73, 71, 63)}  alt={caption} />}

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
                                  blurDataURL={rgbDataURL(73, 71, 63)}  alt={caption} />}
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
                            {mainImage && <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu="return false;" src={urlFor(mainImage).url()} width="120px" height="120px"  placeholder="blur"
      blurDataURL={rgbDataURL(73, 71, 63)} alt={caption} /> }

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
                  serializers={serializers} 
                />}</div>
                <div className="publishing">
            {aboutbook3 && <PortableText
              blocks={aboutbook3}
              serializers={serializers} 
            />}</div>
              <div className="desc">
                {aboutbook2 && <PortableText
                  blocks={aboutbook2}
                  serializers={serializers} 
                />}
                <div className="links">
                  {aboutbook4 && <PortableText
                    blocks={aboutbook4}
                    serializers={serializers} 
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
                            blurDataURL={rgbDataURL(73, 71, 63)}  alt={caption} />}
                        </div>

                        </div>

                      ))}

                    </div>

                    <div className="info">
                      <div className="title">
                        {aboutbook && <PortableText
                          blocks={aboutbook}
                          serializers={serializers} 
                        />}</div>
                        <div className="publishing">
            {aboutbook3 && <PortableText
              blocks={aboutbook3}
              serializers={serializers} 
            />}</div>
                      <div className="desc">
                        {aboutbook2 && <PortableText
                          blocks={aboutbook2}
                          serializers={serializers} 
                        />}
                        <div className="links">
                          {aboutbook4 && <PortableText
                            blocks={aboutbook4}
                            serializers={serializers} 
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
                            blurDataURL={rgbDataURL(73, 71, 63)}  alt={caption} />}

                        </div>

                        </div>

                      ))}

                    </div>

                    <div className="info">
                      <div className="title">
                        {aboutbook && <PortableText
                          blocks={aboutbook}
                          serializers={serializers} 

                        />}</div>
                         <div className="publishing">
            {aboutbook3 && <PortableText
              blocks={aboutbook3}
              serializers={serializers} 
            />}</div>
                      <div className="desc">
                        {aboutbook2 && <PortableText
                          blocks={aboutbook2}
                          serializers={serializers} 
                        />}
                        <div className="links">
                          {aboutbook4 && <PortableText
                            blocks={aboutbook4}
                            serializers={serializers} 
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
              <div className="img">
              {worksreferenced && worksreferenced.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                
                  
                    <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="100%" height="100%" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>

                
                {excerptlinktext &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlinktext}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

              {worksreferenced2 && worksreferenced2.map(({ _id, slug = '', mainImage = '' , caption = ''}) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption}  />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink2 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink2}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

              {worksreferenced3 && worksreferenced3.map(({ _id, slug = '', mainImage = '' , caption = ''}) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink3 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink3}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

              {worksreferenced4 && worksreferenced4.map(({ _id, slug = '', mainImage = '' , caption = ''}) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption}  />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink4 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink4}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

              {worksreferenced5 && worksreferenced5.map(({ _id, slug = '', mainImage = '' , caption = ''}) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption}  />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink5 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink5}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

              {worksreferenced6 && worksreferenced6.map(({ _id, slug = '', mainImage = '' , caption = ''}) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink6 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink6}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced7 && worksreferenced7.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink7 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink7}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

              {worksreferenced8 && worksreferenced8.map(({ _id, slug = '', mainImage = '', caption='' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>

                  <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>



                  </Link>
                </div>))}
                </div>
                {excerptlink8 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink8}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">

{worksreferenced9 && worksreferenced9.map(({ _id, slug = '', mainImage = '', caption=''}) => (
  <div key={_id}>
    <Link href="/work/[slug]" as={`/work/${slug.current}`}>

    <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
        <br></br>
        {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
          blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
          
      </div>



    </Link>
  </div>))}
  </div>
  {excerptlink9 &&  <div className="excerptlink">
  <PortableText
      blocks={excerptlink9}
      serializers={serializers} 

    />
</div>  }
</div>
<div className="worksreferenced">
<div className="img">

{worksreferenced10 && worksreferenced10.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
  <div key={_id}>
    <Link href="/work/[slug]" as={`/work/${slug.current}`}>

    <div className="bookimage pointer" style={{ height: '7.5rem', width: '5.5rem', position: 'relative' }}>
        <br></br>
        {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
          blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover" alt={caption}  />}
          
      </div>



    </Link>
  </div>))}
  </div>
  {excerptlink10 &&  <div className="excerptlink">
  <PortableText
      blocks={excerptlink10}
      serializers={serializers} 

    />
</div>  }
</div>
            
            </div>
            
          </div>


        </div>





        <div className="bookcontainer mobile">
          <div className="bookdetail">
            {worksreferenced && <div className="bookinfo">Selection of works referenced: </div>}
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced && worksreferenced.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption}  />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlinktext &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlinktext}
                    serializers={serializers} 

                  />
              </div>  }
            </div>

            <div className="worksreferenced">
            <div className="img">
              {worksreferenced2 && worksreferenced2.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink2 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink2}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced3 && worksreferenced3.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink3 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink3}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced4 && worksreferenced4.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink4 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink4}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced5 && worksreferenced5.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink5 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink5}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced6 && worksreferenced6.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption}  />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink6 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink6}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced7 && worksreferenced7.map(({ _id, slug = '', mainImage = '', caption = '' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption}  />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink7 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink7}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced8 && worksreferenced8.map(({ _id, slug = '', mainImage = '', caption='' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover" alt={caption}  />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {excerptlink8 &&  <div className="excerptlink">
                <PortableText
                    blocks={excerptlink8}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced9 && worksreferenced9.map(({ _id, slug = '', mainImage = '', caption='' }) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {worksreferenced9 &&  <div className="excerptlink">
                <PortableText
                    blocks={worksreferenced9}
                    serializers={serializers} 

                  />
              </div>  }
            </div>
            <div className="worksreferenced">
            <div className="img">
              {worksreferenced10 && worksreferenced10.map(({ _id, slug = '', mainImage = '', caption = ''}) => (
                <div key={_id}>
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <div className="bookimage pointer" style={{ height: '120px', width: '120px', position: 'relative' }}>
                      <br></br>
                      {mainImage && <Image className="bookimg placeholder" id="img" draggable="false" onDragStart="return false;" onContextMenu={(e) => e.preventDefault()} src={urlFor(mainImage).url()} width="120px" height="160px" layout="fill" placeholder="blur"
                        blurDataURL={rgbDataURL(73, 71, 63)} objectFit="cover"  alt={caption} />}
                        
                    </div>
                  </Link>
                </div>))}
                </div>
                {worksreferenced10 &&  <div className="excerptlink">
                <PortableText
                    blocks={worksreferenced10}
                    serializers={serializers} 

                  />
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
      excerptlinktext,
      worksreferenced2[]->,
      excerptlink2,
      worksreferenced3[]->,
      excerptlink3,
      worksreferenced4[]->,
      excerptlink4,
      worksreferenced5[]->,
      excerptlink5,
      worksreferenced6[]->,
      excerptlink6,
      worksreferenced7[]->,
      excerptlink7,
      worksreferenced8[]->,
      excerptlink8,
      worksreferenced9[]->,
      excerptlink9,
      worksreferenced10[]->,
      excerptlink10
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
        excerptlinktext: book.excerptlinktext,
        worksreferenced2: book.worksreferenced2,
        excerptlink2: book.excerptlink2,
        worksreferenced3: book.worksreferenced3,
        excerptlink3: book.excerptlink3,
        worksreferenced4: book.worksreferenced4,
        excerptlink4: book.excerptlink4,
        worksreferenced5: book.worksreferenced5,
        excerptlink5: book.excerptlink5,
        worksreferenced6: book.worksreferenced6,
        excerptlink6: book.excerptlink6,
        worksreferenced7: book.worksreferenced7,
        excerptlink7: book.excerptlink7,
        worksreferenced8: book.worksreferenced8,
        excerptlink8: book.excerptlink8,
        worksreferenced9: book.worksreferenced9,
        excerptlink9: book.excerptlink9,
        worksreferenced10: book.worksreferenced10,
        excerptlink10: book.excerptlink10
      },
    }
  }

}



export default Book


