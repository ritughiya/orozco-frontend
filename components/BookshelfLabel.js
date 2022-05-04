//Bookshelflabel.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState } from 'react'
//  import Link from 'next/link'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Caret from "../components/Caret"


const RoomLabel = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 60) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <div>
        <Link className="desktop pointer"
        to="selectedworks"
        spy={true}
        smooth="easeInQuad"
        hashSpy={true}
        offset={50}
        delay={50}
        duration={1000}
        isDynamic={true}
        ignoreCancelEvents={false}
  >
      <div className={`RoomLabel ${show && 'nav__blue'}`}>
      Selected Books <Caret/>
  </div>
  </Link>

<div className={`RoomLabel mobile ${show && 'nav__blue'}`}>
Selected Books <Caret/>
</div>
</div>
    )
}

export default RoomLabel