import React from "react"
import "./componentStyles.css"

export default function Contact() {
      return (
        <section className="dark findus">
        <div className="three">
            <ul className="finding">
            <li>
                <h5>Find us</h5>
                <div className="line">&nbsp;</div>
                <p>2 - 8 DAWES ROAD<br />
                FULHAM<br />
                London, 
                SW6 7EW<br />
                –<br />
                020 3489 5428<br />
                <a href="mailto:info@duoclinic.co">info@duoclinic.co</a><br />
                </p></li>
            <li>
                <h5>Opening hours</h5>
                <div className="line">&nbsp;</div>
                <p>Mon - Fri: 6am - 9pm<br />
                Sat: 7am - 3pm<br />
                Sun: Closed</p>
            </li>
            <li>
                <h5>Get directions</h5>
                <div className="line">&nbsp;</div>
                <p>Enter your postcode below</p>
                <div className="postcodeform">
                <form action="http://maps.google.com/maps" method="get" target="_blank">
                    <input type="text" name="saddr" />
                    <input type="hidden" name="daddr" defaultValue="F45 Fulham DAWES ROAD, FULHAM, LONDON, SW6 7EW, United Kingdom" />
                    <input type="submit" className="submitTriangle" defaultValue="Get directions" />
                </form>
                </div>
            </li>
            </ul>
        </div>
        </section>

      );
    }