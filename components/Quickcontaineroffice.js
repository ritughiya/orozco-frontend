//Quickcontainerbook.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import RoomofficeLabel from "../components/RoomofficeLabel"
 import Roomsdropdown2 from "../components/Roomsdropdown2"

 
 export default function Quickcontainerbook() {
   return (
     <div>
    <div className="  v1">
                  

     <div className="embed-container ">
     <RoomofficeLabel />
    <Roomsdropdown2 />
    <iframe title="Video of Offices"  loading="lazy" src="https://player.vimeo.com/video/699589433?h=90964c6ad1&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
     </div>

     </div> 
    
     </div>
 
   );
 }
 
