//Homecontainer4.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'

 
 export default function Homecontainer4mobile() {
   return (


<div className="embed-container mobile pointer v4">

<div>

<div className="camBottomright ">Cam4</div>
<a href="/room4" className="linkwrap">
<div className="blocker"></div>
<iframe className=" responsive-iframe" src="https://player.vimeo.com/video/691987668?h=e329ddcfd5&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
</a>

</div>

</div> 


 
   );
 }
 
