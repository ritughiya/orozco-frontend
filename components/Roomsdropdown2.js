//Roomsdropdown2.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState }  from "react";
 import Link from 'next/link'
 import Image from 'next/image'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Clock from 'react-live-clock';
 import Caret from "../components/Caret"
 import Room1thumbnail from "../public/room1.png"
 import Room2thumbnail from "../public/room2.png"
 import Room3thumbnail from "../public/room3.png"
 import Room4thumbnail from "../public/room4.png"


 import ReactHoverObserver from 'react-hover-observer';
// 
import ReactDOM from 'react-dom';

// import default style

    const DropdownLabel = () => {
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
    // <div className="dropdowncontainer">
      <ReactHoverObserver
        className="desktop"
        hoverDelayInMs={300}
        hoverOffDelayInMs={1500}
      >

          <div className={`dropdowncontainer pointer roomslist ${show}`}>Rooms <Caret/></div>
        <DropdownContainer />
      </ReactHoverObserver>
    // </div>
  );
  }

  const DropdownContainer = ({ isHovering = false }) => {


     
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
        <div className={`${show}`}>
    <div className={isHovering ? "reveal" : ""}>
      <ul className="dropdown">
             <div className="dropspace"> 
             <li><Link href="/room1">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room1thumbnail} /> </div>Room One </span></div></Link>
              </li>
              <li><Link href="/room2">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room2thumbnail} /> </div>Room Two </span></div></Link>
              </li>
              <li><Link href="/room3">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room3thumbnail} /> </div>Room Three </span></div></Link>
              </li>
              <li><Link href="/spaceshiproom">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room4thumbnail} /> </div>Spaceship Room</span></div></Link>
              </li>
              <li><Link href="/offices">
                 <div className="roomrowlast pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room3thumbnail} /> </div>Offices </span></div></Link>
              </li>
              {/* <li><Link href="/bookshelf">
                 <div className="roomrowlast pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room4thumbnail} /> </div>Bookshelf</span></div></Link>
              </li> */}
             </div>
         </ul>
     </div>
     </div>
  )}


  export default DropdownLabel

