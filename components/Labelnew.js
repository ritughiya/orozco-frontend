import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'


export default function Labelnew() {
    return (
        <Link href="/about">
        <div className="showLabel3 pointer">
         
           <span className="spacetime">Spacetime</span> 24 West 57th Room 305, NY NY 10019, Monday–Friday 10–6PM
           
        </div> 
        </Link>
    );
  }

