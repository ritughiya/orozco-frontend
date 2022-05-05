import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import Image from "../components/Image"
import PortableText from '@sanity/block-content-to-react'
import ReactDelayRender from 'react-delay-render';


const Linkwrapper2 = () => (

  <>

  <div className="linkWrapper2">
  <div className="link1"><Link href="/room-one">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
   <div className="link2"><Link href="/room-two">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
   <div className="link3 "><Link href="/offices">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
    <div className="link4"><Link href="/spaceship-room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
</div> 

      
  </>

);
 
export default ReactDelayRender({ delay: 40000 })(Linkwrapper2);

