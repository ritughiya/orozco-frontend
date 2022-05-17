//quickTicker.js

/**
 * @jest-environment jsdom
 */

 import React, { useEffect, useState }  from "react";
 import Link from "next/link"
 import Circle from "./Circle"
 import Menu from "./Menu"
//  import HamburgerDrawer from 'react-hamburger-drawer'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

class Time extends React.Component {
  

  
  constructor(props){
    super(props);
      this.timer = 0;
    this.state = {
        time: new Date()      };
  }
  componentDidMount(){
    this.timer = setTimeout(() => {
          this.setState({
            time: new Date()
          });
          this.componentDidMount();
      }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());

  }
  componentWillUnmount(){
    clearTimeout(this.timer);
  }


  
  
  render() {
    var options = { hour12: false };
      return this.state.time.toLocaleTimeString('en-GB', options);
  }
}
 
 
 
 const Quickticker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
        setActive(!isActive);
    } 
    const showRooms = () => {
      setShow(!show);
  } 
  
  let s= new Date().toLocaleString();

  return (
 <div className="tickerquick">
<div className="h1">
  <>
  <Link href="https://go-spacetime.com">
  SPACETIME
  </Link>

  <Circle /> 
  <Time />
  </>
  </div>
  <div className="h2">
    <button className={` ${isActive ? 'open': null}`} onClick={toggleDrawer}>
    <div className="bar-one" />
              {/* <div className="bar-two" /> */}
              <div className="bar-three" />
    </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                className='topnav'
                overlayOpacity='0'
            >
                <div>
                  <ul>
                    <li className="pointer" onClick={showRooms}>Rooms <span className={` ${show ? 'sayless': 'expand'}`}></span></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/room-one">Room One</Link></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/room-two">Room Two</Link></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/room-three">Room Three</Link></li>
                    <li className={`submenu ${show ? 'revealdisplay': null}`}><Link href="/spaceship-room">Spaceship Room</Link></li>
                    <li className={`submenu submenulast ${show ? 'revealdisplay': null}`}><Link href="/offices">Offices</Link></li>
                    <div className={`menuborder ${show ? 'revealdisplay': null}`}>&nbsp;&nbsp;</div>
                    <li className={`${show ? 'revealtop': null}`}><Link href="/library">Library</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li className="menulast"><Link href="/archive">Index</Link></li>
                    <div className="menuborderlast">&nbsp;&nbsp;</div>

                  </ul>
                  
                </div>
            </Drawer>
    
  </div>
</div> 

);
}

export default Quickticker

