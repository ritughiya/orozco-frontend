//Container2.js
import React from "react";
import ReactDelayRender from 'react-delay-render';


const Container2 = () => (
  <div className="container pointer v2">
  <div className="camTopright secondaryCamtitle">Cam5</div>
  <iframe className="secondaryView responsive-iframe" src="https://player.vimeo.com/video/675559010?h=ff54e881e5&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
  <div className="camTopright primaryCamtitle">Cam2</div>

  <iframe className="primaryView responsive-iframe" src="https://player.vimeo.com/video/680923049?h=bcf644a816&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="100%" height="100vh" frameBorder="0" allowFullScreen></iframe>   
</div>


);
 
export default ReactDelayRender({ delay: 8000 })(Container2);

