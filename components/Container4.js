//Container4.js
import React from "react";
import ReactDelayRender from 'react-delay-render';

const Container4 = () => (
  <div className="container pointer v4">
    <div className="camBottomright secondaryCamtitle">Cam8</div>
           <iframe className="secondaryView responsive-iframe" src="https://player.vimeo.com/video/683943686?h=175deddb98&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
 
<div className="camBottomright primaryCamtitle">Cam4</div>
           <iframe className="primaryView responsive-iframe" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
           </div>

);
 
export default ReactDelayRender({ delay: 9000 })(Container4);