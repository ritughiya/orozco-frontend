import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import ReactDelayRender from 'react-delay-render';

const Label = () => (
  <Link href="https://go-spacetime.netlify.app/">
  <div className="labelAnimation showLabel pointer">
   <div className="showTitle">
   Spacetime
   </div>
 </div> 
 </Link>


);
 
export default ReactDelayRender({ delay: 3000 })(Label);
