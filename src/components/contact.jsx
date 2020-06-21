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
                <p>202-208 Kensal Road<br />
                London<br />
                W10 5BN<br />
                –<br />
                020 3489 5428<br />
                <a href="mailto:info@w10performance.com">info@w10performance.com</a><br />
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
                    <input type="hidden" name="daddr" defaultValue="202-208 Kensal Road, W10 5BN, London, United Kingdom" />
                    <input type="submit" defaultValue="Get directions" />
                </form>
                </div>
            </li>
            </ul>
        </div>
        </section>

      );
    }