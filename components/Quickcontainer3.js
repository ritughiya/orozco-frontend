 //Quickcontainer3.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Room3Label from "../components/Room3Label"
 import Roomsdropdown2 from "../components/Roomsdropdown2"
 
 
 export default function Quickcontainer2() {
   return (

<div className=" pointer v1">
                  
{/* <div className="embed-container">
<iframe loading="lazy" className="secondaryView" src="https://player.vimeo.com/video/680920205?h=32ecfe3749&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>  
</div> */}
<div className="embed-container">
<Room3Label />
<Roomsdropdown2 />
<iframe loading="lazy"  src="https://player.vimeo.com/video/701352364?h=20db88d6fa&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
</div>
{/* <div className="camTopleft secondaryCamtitle">Cam7</div> */}
{/* <div className="camTopleft primaryCamtitle">Cam1</div> */}
</div> 

    
 
 
   );
 }
 
