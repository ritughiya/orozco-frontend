import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'


export default function Labelnew2() {
    return (
        <Link href="/about">
        <div className="showLabel4 pointer">
         
           <span className="spacetime">Spacetime</span> 
           
        </div> 
        </Link>
    );
  }

