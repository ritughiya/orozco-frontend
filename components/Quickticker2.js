//quickTicker.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 
 
 export default function Quickticker() {
   return (
 <div className="tickerquick2">
     <>
     SPACETIME &nbsp;
     <Circle /> &nbsp;
     <Clock
           format={'HH:mm:ss'}
           ticking={true} />
     </>
     </div>
 
 
   );
 }
 