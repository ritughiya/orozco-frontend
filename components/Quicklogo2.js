//Quicklogo2.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'
import Script from 'next/script'
import { sanityClient, urlFor} from '../sanity'
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 import ReactHoverObserver from 'react-hover-observer';


 // import default style

 const Quicklogo = () => {

  return (
    
<div className="Logo-knight Logo-knightquick pointer">
           <div className="logocontainer">   
      
    <ReactHoverObserver
      className="example"
      hoverDelayInMs={300}
      hoverOffDelayInMs={1500}
    >

    
<svg alt="" className="Animationleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 998 1003.38">
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
        {/* <Link passHref href="/library"> */}
        <Link passHref href="/archive">
            <path className="cls-1" d="M499,242.5V499H242.5C242.5,357.34,357.34,242.5,499,242.5Z" />
            </Link>
            {/* <Link passHref href="/library"> */}
            <Link passHref href="/archive">
            <path className="cls-2" d="M499,499V755.5c-141.66,0-256.5-114.84-256.5-256.5Z" />
            </Link>
            <Link passHref href="/archive">
                
            <path className="cls-3" d="M755.5,499H499V242.5C640.66,242.5,755.5,357.34,755.5,499Z" />
            </Link>
            <Link passHref href="/archive">
            <path className="cls-2" d="M998,499H755.5A121.25,121.25,0,0,1,998,499Z" />
            </Link>
            <Link passHref href="/archive">
            <path className="cls-2" d="M499,242.5V0a121.25,121.25,0,0,1,0,242.5Z" />
            </Link>
            <Link passHref href="/about">
            <path className="cls-1" d="M755.5,499H998a121.25,121.25,0,0,1-242.5,0Z" />
            </Link>
            <Link passHref href="/about">
            <path className="cls-3" d="M499,760.88v242.5a121.25,121.25,0,0,1,0-242.5Z" />
            </Link>
            <Link passHref href="/about">
            <path className="cls-1" d="M499,1003.38V760.88a121.25,121.25,0,1,1,0,242.5Z" />
            </Link>
            {/* <Link passHref href="/library"> */}
            <Link passHref href="/archive">
            <path className="cls-3" d="M0,499H242.5A121.25,121.25,0,0,1,0,499Z" />
            </Link>
            <line className="cls-4" x1="148.5" y1="500.5" x2="106" y2="500.5" />
        </g>
    </g>
</svg>

<Logolabels />


    </ReactHoverObserver>
    </div>  
</div>
);
}

const Logolabels   = ({ isHovering = false }) => {

return (
<div className={isHovering ? "reveal" : ""}>
  
{/* <div className="logo-label1">
<Link passHref href="/library">
    Library
</Link>
</div> */}
<div className="logo-label2">
<Link passHref href="/archive">
    Index
</Link>
</div>
<div className="logo-label3">
<Link passHref href="/about">
    About
</Link>
</div>
<div className="logo-label4">
<Link passHref href="https://go-spacetime.com">
    Rooms
</Link>
</div>
  
   </div>
)}


export default Quicklogo


 
