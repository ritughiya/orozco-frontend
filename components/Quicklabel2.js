//Quicklabel2.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 
 
 export default function Quicklogo() {
   return (
    <div className="showLabel2 pointer">
    <div className="showInfo">
      <div className="showInfoMain">
      Gabriel Orozco<br></br>
      Spacetime<br></br>
      24 West 57th, Room 305, New York, NY 10019
      </div>
      <div className="showInfoSub">
        <div className="showInfoSub1">
        <div className="showInfoHours">
        HOURS
        </div>
        <div className="showInfoHours2">
        Monday–Friday<br></br>
        10–6PM
        </div>
        </div>
        <div className="showInfoSub2">
        <span className="Phone">212-977-7160</span><br></br>
        <span className="emailSub">Email</span><span className="Email">alena@go-spacetime.com</span>
        </div>
      </div>
    </div>
   </div> 
 
   );
 }
 
