//Roomsdropdown.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState }  from "react";
 import Link from 'next/link'
 import Image from 'next/image'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Caret from "./Caret"
 import Room1thumbnail from "../public/room1.png"
 import Room2thumbnail from "../public/room2.png"
 import Room3thumbnail from "../public/room3.png"
 import Room4thumbnail from "../public/room4.png"
 import Officesthumbnail from "../public/offices.png"



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
             <li><Link passHref href="https://go-spacetime.com/room-one">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room1thumbnail} alt="Room One" /> </div>Room One </span></div></Link>
              </li>
              <li><Link passHref href="https://go-spacetime.com/room-two">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room2thumbnail} alt="Room Two" /> </div>Room Two </span></div></Link>
              </li>
              <li><Link passHref href="https://go-spacetime.com/room-three">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room3thumbnail}  alt="Room Three" /> </div>Room Three </span></div></Link>
              </li>
              <li><Link passHref href="https://go-spacetime.com/spaceship-room">
                 <div className="roomrow pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Room4thumbnail}  alt="Spaceship Room" /> </div>Spaceship Room</span></div></Link>
              </li>
              <li><Link passHref href="https://go-spacetime.com/offices">
                 <div className="roomrowlast pointer">
                 <span className="roomflex"><div className="roomthumb"><Image src={Officesthumbnail}   alt="Offices" /> </div>Offices </span></div></Link>
              </li>
              
             </div>
         </ul>
     </div>
     </div>
  )}


  export default DropdownLabel

