//Quickcontainer1.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Room1Label from "../components/Room1Label"
 import Roomsdropdown from "../components/Roomsdropdown"
 import Roomsdropdown2 from "../components/Roomsdropdown2"

 
 export default function Quickcontainer1() {
   return (
    <div className=" pointer v1">
                  
      
     <div className="embed-container">
     <Room1Label />
    <Roomsdropdown2 />
    <iframe loading="lazy" className="" src="https://player.vimeo.com/video/699605384?h=edc6d07951&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
    
     </div>

     </div> 
    
 
 
   );
 }
 