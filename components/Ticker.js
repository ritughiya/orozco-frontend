//Ticker.js

/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import Circle from "../components/Circle"
 import Clock from 'react-live-clock';
 import ReactDelayRender from 'react-delay-render';


const Ticker = () => (
<div className="ticker">
    <>
    <Circle />
    <Clock
          format={'HH:mm:ss'}
          ticking={true} />
    </>
    </div>



);
 
export default ReactDelayRender({ delay: 500 })(Ticker);

