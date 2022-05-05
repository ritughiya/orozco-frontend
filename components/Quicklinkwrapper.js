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
      <div className="link1"><Link href="/room-one">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
       <div className="link2"><Link href="/room-two">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
       <div className="link3 "><Link href="/room-three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
        <div className="link4"><Link href="/spaceship-room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
    </div>     
    </>
 
   );
 }
 
