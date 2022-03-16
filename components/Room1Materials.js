//Room1Materials.js

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



 const Room1Materials = () => {
  return (
    <div className="material">
    {properties2.map(post => (
      <div key={post._id}></div>

        ))}
        </div>
  );
};
export default Room1Materials;