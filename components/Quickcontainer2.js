//Quickcontainer2.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Room2Label from "../components/Room2Label"
 import Roomsdropdown from "../components/Roomsdropdown"
 
 
 export default function Quickcontainer2() {
   return (

<div className=" pointer v1">
                  

<div className="embed-container">
<Room2Label />
<Roomsdropdown />
<iframe loading="lazy"  title="Video of Room Two"  src="https://player.vimeo.com/video/699610145?h=cf8c139cdd&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="100%" height="100vh" frameBorder="0" allowFullScreen></iframe>   
</div>

</div> 

    
 
 
   );
 }
 
