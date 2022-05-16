//Customhead.js

/**
 * @jest-environment jsdom
 */

 import React from "react";
 import Link from 'next/link'
 import Head from 'next/head'

 
 
 export default function Customhead() {

  // const ReactComment = ({ text }) => {
  //   return <span dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}/>
  // }

  
   return (

<Head>

        <title>Gabriel Orozco: Spacetime</title>
        <meta property="og:title" content="Gabriel Orozco: Spacetime" />

        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Spacetime Library" />
<meta property="og:url" content="https://go-spacetime.com/" />
<meta property="og:image" content="https://go-spacetime.com/spacetime.png" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:description" 
  content="GO-Spacetime is the online extension of Mexican artist, Gabriel Orozco’s (b. 1962), Spacetime exhibition, which opened at 24 West 57th Street, Room 305, New York, NY in June 2021. An open-archive project, the exhibition consists of a selection of over 500 works in a wide variety of media, including sculpture, drawing, photography and painting.  " />
  <meta name="google" content="notranslate" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@MarianGoodman" />
  <meta name="twitter:title" content="Gabriel Orozco: Spacetime" />
<meta name="twitter:description" content="GO-Spacetime is the online extension of Mexican artist, Gabriel Orozco’s (b. 1962), Spacetime exhibition, which opened at 24 West 57th Street, Room 305, New York, NY in June 2021. An open-archive project, the exhibition consists of a selection of over 500 works in a wide variety of media, including sculpture, drawing, photography and painting." />
<meta name="twitter:image" content="https://go-spacetime.com/spacetime.png" />



      </Head>
      
   );
 }
 


