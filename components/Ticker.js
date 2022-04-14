//Ticker.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState }  from "react";
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import Circle from "../components/Circle"
 import Clock from 'react-live-clock';
 import ReactDelayRender from 'react-delay-render';
 import Menu from "../components/Menu"
 //  import HamburgerDrawer from 'react-hamburger-drawer'
 
 // import component 👇
 import Drawer from 'react-modern-drawer'
 
 //import styles 👇
 import 'react-modern-drawer/dist/index.css'

 
 const Ticker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setActive(!isActive);
    } 
    const showRooms = () => {
      setShow(!show);
  } 
  return (
 <div className={`tickerquick2 ${isActive ? 'black': null}`}>
<div className="h1">
  <>
  <Link href="https://go-spacetime.netlify.app/">
  SPACETIME
  </Link>

  <Circle /> 
  <Clock
        format={'HH:mm:ss'}
        ticking={true} />
  </>
  </div>
  <div className="h2">
    <button className={` ${isActive ? 'open': null}`} onClick={toggleDrawer}>
    <div className="bar-one" />
              {/* <div className="bar-two" /> */}
              <div className="bar-three" />
    </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                className='bla bla bla'
                overlayOpacity='0'
            >
                <div>
                  <ul>
                    <li className="pointer" onClick={showRooms}>Rooms <span className={` ${show ? 'sayless': 'expand'}`}></span></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/room1">Room One</Link></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/room2">Room Two</Link></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/room3">Room Three</Link></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/spaceshiproom">Spaceship Room</Link></li>
                    <li className={`submenu submenulast ${show ? 'revealdisplay': null}`}><Link href="/offices">Offices</Link></li>
                    <div className={`menuborder ${show ? 'revealdisplay': null}`}>&nbsp;&nbsp;</div>
                    <li className={`${show ? 'revealtop': null}`}><Link href="/bookshelf">Bookshelf</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li className="menulast"><Link href="/archive">Index</Link></li>
                    <div className="menuborderlast">&nbsp;&nbsp;</div>

                  </ul>
                  
                </div>
            </Drawer>
    
  </div>
</div> 

);
}
 
export default ReactDelayRender({ delay: 500 })(Ticker);

