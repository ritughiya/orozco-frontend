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

export default function Ticker() {
  return (
    <div className="ticker">
    <>
    <Circle />
    <Clock
          format={'HH:mm:ss'}
          ticking={true} />
    </>
    </div>

  );
}


