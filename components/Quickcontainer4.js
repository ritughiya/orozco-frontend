//Quickcontainer4.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Room4Label from "../components/Room4Label"
 import Roomsdropdown2 from "../components/Roomsdropdown2"
 
 
 export default function Quickcontainer2() {
   return (

<div className=" pointer v1">
                  
<div className="embed-container">
<Room4Label />
<Roomsdropdown2 />

<iframe  title="Video of Spaceship Room" className=" responsive-iframe" src="https://player.vimeo.com/video/691987668?h=e329ddcfd5&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   

</div>

</div> 

    
 
 
   );
 }
 
