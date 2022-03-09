//Quicklabel.js

/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import PortableText from '@sanity/block-content-to-react'
 import ReactDelayRender from 'react-delay-render';
 
 
 export default function Quicklabel() {
   return (
    <div className="showLabel pointer">
    <div className="showTitle">
    Spacetime
    </div>
  </div> 
 
   );
 }
 


