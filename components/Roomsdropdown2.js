//Roomsdropdown2.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"

 const Roomsdropdown2 = () => {
  <div className="linkWrapper">
  <div className="link1"><Link href="/room1">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
   <div className="link2"><Link href="/room2">&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
   <div className="link3"><Link href="/room3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
    <div className="link4"><Link href="/room4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
</div>   
  };
  
  export default Roomsdropdown2;
   
  