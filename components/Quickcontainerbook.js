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

    
     <div>

<div style={{ position: 'relative', width: '80vh', height: '100%' }}>
    <Image className="placeholder" draggable="false" onDragStart="return false;" onContextMenu={(e)=> e.preventDefault()} src="/public/bookshelf.png" width="100%" height="100%" layout="fill" placeholder="blur"
    blurDataURL={rgbDataURL(73, 71, 63)}/>
    </div>
    
    <div className="  v1">
                  
     
     <div className="embed-container ">
     <BookshelfLabel />
    <Roomsdropdown2 />
   
            
     </div>
    
     </div> 
    
     </div>
 
   );
 }
 
