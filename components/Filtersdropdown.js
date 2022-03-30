//Filtersdropdown.js

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


import ReactDOM from 'react-dom';

// import default style

const Filtersdropdown = () => {

   return (
     
     <ul className="dropdowncontainer Filtersdrop">
     <li>
         <a href="#">Filters <Caret/> </a>
         <ul className="dropdown">
             <div className="dropspace"> 
             <li>
                 <div className="roomrowfirst ">
                 <span className="roomflex">Filter by:</span>
                 </div>
              </li>
             <li><Link href="/archive/paintings">
                 <div className="roomrow pointer">
                 <span className="roomflex">Paintings</span></div></Link>
              </li>
              <li><Link href="/archive/photography">
                 <div className="roomrow pointer">
                 <span className="roomflex">Photography</span></div></Link>
              </li>
              <li><Link href="/archive/sculptures">
                 <div className="roomrow pointer">
                 <span className="roomflex">Sculpture</span></div></Link>
              </li>
              <li>
                 <div className="roomrowfirst secondary">
                 <span className="roomflex">Sort:</span>
                 </div>
              </li>
             <li><Link href="/paintings">
                 <div className="roomrowlast pointer">
                 <span className="roomflex">Chronologically</span></div></Link>
              </li>
              
             </div>
         </ul>
     </li>
 </ul>
   )
}

export default Filtersdropdown