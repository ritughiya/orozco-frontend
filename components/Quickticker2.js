//quickTicker.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from "next/link"
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 import Menu from "../components/Menu"

 
 
 export default function Quickticker() {
   return (
 <div className="tickerquick2">
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
       <Menu />
     </div>
     </div>
 
 
   );
 }
 