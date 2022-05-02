//Quickcontainerbook.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Image from 'next/image'
 import BookshelfLabel from "../components/BookshelfLabel"
 import Roomsdropdown from "../components/Roomsdropdown"
 import Roomsdropdown2 from "../components/Roomsdropdown2"
 import Bookshelf  from "../public/bookshelf.png"

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

  

 
 
 export default function Quickcontainerbook() {
   return (

    

    <div className="Bookshelfpage pointer v1">
                  
      
     <div className="embed-container">
     <BookshelfLabel />
    <Roomsdropdown2 />
    <iframe loading="lazy" className="" src="https://player.vimeo.com/video/699605384?h=edc6d07951&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
    
     </div>

     </div> 
    
 
   );
 }
 
