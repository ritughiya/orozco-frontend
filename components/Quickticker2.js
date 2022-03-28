//quickTicker.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from "next/link"
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 
 
 export default function Quickticker() {
   return (
 <div className="tickerquick2">
     <>
     <Link href="https://go-spacetime.netlify.app/">
     SPACETIME
     </Link>
&ensp;
     <Circle /> &nbsp;
     <Clock
           format={'HH:mm:ss'}
           ticking={true} />
     </>
     </div>
 
 
   );
 }
 