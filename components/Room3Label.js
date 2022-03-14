//Room3Label.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 import Caret from "../components/Caret"

 
 
 export default function Room3Label() {
   return (
    <div className="RoomLabel">
        Works in Room Three Below <Caret/>
    </div>
 
   );
 }
 