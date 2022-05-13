import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
import PortableText from '@sanity/block-content-to-react'
import ReactDelayRender from 'react-delay-render';


const Linkwrapper = () => (

  <>


    <div className="linkWrapper">
    <div className="link1"><Link href="/room-one">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
     <div className="link2"><Link href="/room-two">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
     <div className="link3 "><Link href="/room-three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
      <div className="link4"><Link href="/spaceship-room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
  </div>     
  </>

);
 
export default ReactDelayRender({ delay: 9000 })(Linkwrapper);

