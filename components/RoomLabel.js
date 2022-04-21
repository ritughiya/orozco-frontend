//RoomLabel.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState } from 'react'
 import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
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
      <div className={`RoomLabel ${show && 'nav__blue'}`}>
      Selected Works
  </div>
    )
}

export default RoomLabel