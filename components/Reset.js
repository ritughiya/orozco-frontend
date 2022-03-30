//Reset.js

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

const Reset = () => {

   return (
     
     <ul className="dropdowncontainer Resetbutton">
     <li>
         <a href="/archive">Reset X </a>
         
     </li>
 </ul>
   )
}

export default Reset