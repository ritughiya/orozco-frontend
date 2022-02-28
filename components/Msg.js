//Msg.js
import React from "react";
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import ReactDelayRender from 'react-delay-render';


export default function Msg() {
  return (
<div id="Msganimation">
<Link href="/text">
<svg xmlns="http://www.w3.org/2000/svg" class="pointer" viewBox="0 0 224.26 135.15">

    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1" d="M223.76,61a60.5,60.5,0,0,1-60.5,60.5h-80A60.19,60.19,0,0,1,52,112.8a18.75,18.75,0,1,1-23.92-27A60.52,60.52,0,0,1,83.26.5h80A60.5,60.5,0,0,1,223.76,61Z" />
            <circle className="cls-2" cx="9.37" cy="125.77" r="9.38" />
            <circle className="cls-3" cx="79.47" cy="61" r="14.06" />
            <circle className="cls-3" cx="123.26" cy="61" r="14.06" />
            <circle className="cls-3" cx="167.05" cy="61" r="14.06" />
        </g>
    </g>
</svg>
</Link>

</div>


  );
}

