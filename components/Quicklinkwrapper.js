//Quicklinkwrapper.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'

 
 export default function Quicklinkwrapper() {
   return (
    <>

    
  
      <div className="linkWrapper">
      <div className="link1"><Link href="/room1">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
       <div className="link2"><Link href="/room2">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
       <div className="link3 "><Link href="/room3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
        <div className="link4"><Link href="/spaceshiproom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
    </div>     
    </>
 
   );
 }
 
