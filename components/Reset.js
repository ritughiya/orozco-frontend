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
 import Exit from "../components/Exit"


import ReactDOM from 'react-dom';

// import default style

const Reset = () => {

   return (
     
     <ul className="dropdowncontainer Resetbutton">
     <li>
         <Link href="/archive"><span className="resetspan">Reset <Exit /> </span></Link>
         
     </li>
 </ul>
   )
}

export default Reset