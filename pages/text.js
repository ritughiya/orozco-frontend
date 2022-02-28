/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import Link from 'next/link'
 import Script from 'next/script'
 import { sanityClient, urlFor} from '../sanity'
 import Image from "../components/Image"
 import OrozcoCircle1 from "../components/orozcoCircle1"
 import Animation from "../components/Animation"
 import Animation2 from "../components/Animation2"
 import Animation3 from "../components/Animation3"
 import Msg from "../components/Msg"
 import Circle from "../components/Circle"
 import Container1 from "../components/Container1"
 import Container2 from "../components/Container2"
 import Container3 from "../components/Container3"
 import Container4 from "../components/Container4"
 import Inventory from "../components/Inventory"
 import Ticker from "../components/Ticker"
 import Battery from "../components/Battery"
 import MobileSignal from "../components/MobileSignal"
 import Wifi from "../components/Wifi"
 import Showfooter from "../components/Showfooter"
 import Logo from "../components/Logo"
 import Logotransparent from "../components/Logotransparent"
 import Label from "../components/Label"
 import Label2 from "../components/Label2"
 import Labelnew from '../components/Labelnew'
 import Static from 'next/image'
 import Head from 'next/head'
 import More from '../components/More'
 import More2 from '../components/More2'
 import BlockContent from '@sanity/block-content-to-react'
 import Clock from 'react-live-clock';
 import TypeAnimation from 'react-type-animation';
 import Quicklogo from '../components/Quicklogo'
 import Quickinventory from '../components/Quickinventory.js'
 import Archivelabel from '../components/Archivelabel.js'

 
 
 
 const query = `*[_type == "work" ]`
 
 const serializers = {
     types: {
       code: (props) => (
         <pre data-language={props.node.language}>
           <code>{props.node.code}</code>
         </pre>
       ),
     },
   }
 

 const text = ({ properties }) => {
   return (
    <div className="Sophie wrapper fullhogv2">
    <Head>
      <title>Spacetime Library</title>
      <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Msg />
    <Quicklogo />
     <div className="fade"></div>
<section className="star-wars">
  <div className="crawl">
    <div className="title">
        <h1>GABRIEL OROZCO</h1>
        <h1>SPACETIME</h1><br></br></div>
      <p>
      Third floor of the Gallery Building, 57th Street, between 5th and 6th Avenue, in a sinuous corridor, a discreet sign on one of the doors: SPACETIME. An array of artworks is on view: floating sculptures, abstract paintings, a black suitcase facing a plasticine ball, a tree adorned with paper disks, large prints, small models including detergent caps and yogurt lids, a shoebox on a shelf, flying boomerangs, and a Japanese scroll greet the viewer in the first two rooms. The show encapsulates 30 years of work masterfully staged in these tight quarters.
<br></br><br></br>
The extensive variety of media and techniques used, as well as the different times and places the pieces were produced, enrich the understanding of the artist’s dense conceptual approach to art. SPACETIME is an artwork of a new type, which cannot be defined, but rather expressed through the list of its components, carefully selected by the artist from the Gallery’s storage and his own personal collection. The conscious or unconscious interrelation across time between such works has become the subtext of the exhibition. Gabriel Orozco’s seemingly effortless stance is not without reminding that of the “Inframince”, a concept coined by Marcel Duchamp, and which refers to ephemeral phenomena – such as ‘the warmth that remains on a chair after a person gets up’, or as in his early photographs, the breath on the surface of a piano, or the bicycle streaks in a puddle.
<br></br><br></br>
As a counterpoint to the oversized white cube spaces which have become a staple to view art, Spacetime resembles a “Cabinet de Curiosités” with its labyrinthine architecture.  With 600 individual pieces brought together in this temporary 1,200 square foot time-capsule devoid of windows, Spacetime will remain on view through June 2022, further defying the ever-rapid turnover pace of gallery shows. The project, kept thus far in a state of secrecy, is a place one finds oneself wanting to come back to, to dig deeper into the meanings of its impermanence, and to further take in its all-encompassing beauty.
<br></br><br></br>
–S. Kitching

       </p>
  </div>
</section> 
</div>

   )
 
 }
 
 export const getServerSideProps = async () => {
   const query = `*[_type == "work" ] | order(caption asc)`
   const properties = await sanityClient.fetch(query)
 
   if (!properties.length) {
     return {
       props: {
         properties: [],
       },
     }
   } else {
     return {
       props: {
         properties,
       },
     }
   }
 }
 
 export default text;




