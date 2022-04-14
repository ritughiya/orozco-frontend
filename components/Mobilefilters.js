//Mobilefilters.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState }  from "react";
 import Link from "next/link"
 import Clock from 'react-live-clock';
 import Circle from "../components/Circle"
 import Mobilefiltersbutton from "../components/Mobilefiltersbutton"
 import Menu from "../components/Menu"
//  import HamburgerDrawer from 'react-hamburger-drawer'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
 
 
 
 const Mobilefilters = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const toggleFilters = () => {
        setIsOpen((prevState) => !prevState)
        setActive(!isActive);
    } 
    
  return (
 <div className="">
  <div className="filtersmenu">
    <button className={`mobilefiltersbutton pointer ${isActive ? 'open': null}`} onClick={toggleFilters}>
    <Mobilefiltersbutton />
    </button>
            <Drawer
                open={isOpen}
                onClose={toggleFilters}
                direction='bottom'
                className='bottomnav'
                overlayOpacity='0'
            >
                <div>
                  <ul>
                  <div className="menubordertop">&nbsp;&nbsp;</div>
                    <li className="pointer">Browse By: </li>
                    <li  className="submenu" ><Link href="/archive/">All</Link></li>
                    <li  className="submenu" ><Link href="/archive/paintings">Paintings</Link></li>
                    <li className="submenu"><Link href="/archive/photography">Photography</Link></li>
                    <li className="submenu"><Link href="/archive/sculptures">Sculpture</Link></li>
                    <li className="submenu"><Link href="/archive/worksonpaper">Works on Paper</Link></li>
                  </ul>
                  
                </div>
            </Drawer>
    
  </div>
</div> 

);
}

export default Mobilefilters

