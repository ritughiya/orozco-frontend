import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import ReactDelayRender from 'react-delay-render';


const Quicklinkwrapper2 = () => (

  <>

  <div className="linkWrapper2">
  <div className="link1"><Link href="/room1">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
   <div className="link2"><Link href="/room2">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
   <div className="link3 "><Link href="/offices">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
    <div className="link4"><Link href="/spaceshiproom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
</div> 

      
  </>

);
 
export default ReactDelayRender({ delay: 36000 })(Quicklinkwrapper2);

