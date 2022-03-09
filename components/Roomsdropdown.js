//Roomsdropdown.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
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

const Roomsdropdown = () => {
  return (

    <ul className="dropdowncontainer">
    <li>
        <a href="#">Rooms <Caret/> </a>
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
             <li><Link href="/room4">
                <div className="roomrowlast pointer">
                <span className="roomflex"><div className="roomthumb"><Image src={Room4thumbnail} /> </div>Spaceship Room</span></div></Link>
             </li>
            </div>
        </ul>
    </li>
</ul>
    
  );
};

export default Roomsdropdown;
 

