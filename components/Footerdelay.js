//Footerdelay.js
import React from "react";
import ReactDelayRender from 'react-delay-render';
import ReactDOM from 'react-dom'
import Link from 'next/link'



const Footerdelay = () => (
  <div className="mainFooter">
  <div className="footerDetails">
    <div className="column1">
    Gabriel Orozco, Spacetime<br></br>
    Summer 2021 – Summer 2022<br></br>
    24 West 57th, Room 305, New York NY 10019<br></br>
    Hours: Monday – Friday, 10AM – 6PM
    </div>
  </div>
  <div className="footerNav">
    Call <span className="contact">212 977 7160</span><br></br>
    Or email <span className="contact">alena@go-spacetime.com</span>
  </div>
</div>


);
 
export default ReactDelayRender({ delay: 4000 })(Footerdelay);




