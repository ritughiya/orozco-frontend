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
          Summer 2021 – Summer 2022<br></br>
          24 West 57th, Room 305, New York NY 10019
          </div>
          <div className="column2">
          Hours: Monday – Friday, 10AM – 6PM<br></br>
          Call <span className="contact">212 977 7160</span><br></br>
          Or email <span className="contact">alena@go-spacetime.com</span>
          </div>
        </div>
        <div className="footerNav">
          <Link href="/press">
          <span className="contact">
            Press Release
            </span></Link>
        </div>
    </div>
  
    );
  }
  
 

