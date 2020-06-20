import React from "react"
import "./componentStyles.css"
import Background from "./images/duoclinicoutside2.png"

export default function Findus() {
    return (
    <section className="hero mini findus" style={{ backgroundImage: `url(${Background})` }}>
        <video id="videoBG"  autoPlay muted loop>
        <source src="./videos/Video1.mp4" type="video/mp4" />
        </video>
    <div className="middle" >
        <div className="holder">
        <div className="white center">
            <div className="inner white">
            <h2>Where to find us</h2>
            <div className="sub">
                <p>2 - 8 Dawes Road<br /> FULHAM <br />LONDON W6 7EN</p>
            </div>
            <p>We are proud to provide West London with quality fitness training.</p>
            {/* <a href="/getstarted/" className="button white"><span>View Full Details</span></a> */}
            </div>
        </div>
        </div>
    </div>
    </section>
      );
    }
