//Footer.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'


 export default function Footer() {
    return (
        <div className="mainFooter">
        <div className="footerDetails">
          <div className="column1">
          Gabriel Orozco, Spacetime<br></br>
          </div>
          <div className="column2">
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
  }
  
 

