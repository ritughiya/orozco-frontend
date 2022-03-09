//Container1.js
import React from "react";
import ReactDelayRender from 'react-delay-render';
import ReactDOM from 'react-dom'


const Container1 = () => (
  <div className="container pointer v1">
<div className="camTopleft secondaryCamtitle">Cam7</div>
  <iframe loading="lazy" className="secondaryView responsive-iframe" src="https://player.vimeo.com/video/680920205?h=32ecfe3749&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>  
  <div className="camTopleft primaryCamtitle">Cam1</div>
  <iframe loading="lazy" className="primaryView responsive-iframe" src="https://player.vimeo.com/video/683943385?h=eba24aae76&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
 </div> 


);
 
export default ReactDelayRender({ delay: 7000 })(Container1);





