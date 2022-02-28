//Quickinventory.js

/**
 * @jest-environment jsdom
 */


import React from "react";
import Link from 'next/link'


export default function Animation3() {
  return (
    <div className="Inventorycontainer pointer">
          <Link href="/index">
    <iframe title="vimeo-player" className="primaryView" src="https://player.vimeo.com/video/675559033?h=8b71bc1ada&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autopause=false?background=1&amp;muted=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>   
   
    </Link>
 </div>

  );
}



