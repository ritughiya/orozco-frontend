//Footer.js

/**
 * @jest-environment jsdom
 */

 import Link from 'next/link'


 export default function Footerhome() {
    return (
        <div className="homeFooter">
        <div className="footerDetails">
        <div className="column1">
          Gabriel Orozco, Spacetime<br></br>
          {/* Summer 2021 – Summer 2023 */}
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
  
 

