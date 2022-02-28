import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import ReactDelayRender from 'react-delay-render';


const Linkwrapper = () => (
    <div className="linkWrapper">
    <div className="link1"><Link href="/room1">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
     <div className="link2"><Link href="/room2">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
     <div className="link3"><Link href="/room3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
      <div className="link4"><Link href="/room4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
  </div>     


);
 
export default ReactDelayRender({ delay: 15000 })(Linkwrapper);

