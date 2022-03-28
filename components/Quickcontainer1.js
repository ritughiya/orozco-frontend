//Quickcontainer1.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import RoomLabel from "../components/RoomLabel"
 import Roomsdropdown from "../components/Roomsdropdown"
 import Roomsdropdown2 from "../components/Roomsdropdown2"

 
 export default function Quickcontainer1() {
   return (
    <div className=" pointer v1">
                  
      {/* <div className="embed-container">
      <iframe loading="lazy" className="secondaryView" src="https://player.vimeo.com/video/680920205?h=32ecfe3749&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>  
     </div> */}
     <div className="embed-container">
     <RoomLabel />
    <Roomsdropdown2 />
     <iframe loading="lazy" className="" src="https://player.vimeo.com/video/683943385?h=eba24aae76&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
     </div>
    {/* <div className="camTopleft secondaryCamtitle">Cam7</div> */}
      {/* <div className="camTopleft primaryCamtitle">Cam1</div> */}
     </div> 
    
 
 
   );
 }
 
