//Container3.js
import React from "react";
import ReactDelayRender from 'react-delay-render';


const Container3 = () => (
  <div className="container pointer v3">
<div className="camBottomleft secondaryCamtitle">Cam6</div>
           <iframe className="secondaryView responsive-iframe" src="https://player.vimeo.com/video/683943757?h=25d3234b7d&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           <div className="camBottomleft primaryCamtitle">Cam3</div>
           <iframe className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675558970?h=32f28b079d&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
</div>

);
 
export default ReactDelayRender({ delay: 7000 })(Container3);
