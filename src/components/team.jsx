import React from "react"
import "./componentStyles.css"
import image1 from "./images/headshots/1.png"
import image2 from "./images/headshots/2.png"
import image3 from "./images/headshots/3.png"
import image4 from "./images/headshots/4.png"

export default function Team() {
    return (
        <section className="teamSection">
          <h2 className="specialHeading blue">Our Team</h2>
          <div className="table team">
            <div className="tr">
            <div className="td">
                  <div className="no desktop tablet title">Neville Kenwright</div>
                  <img className="headshot" src={image4} alt="Duo Clinic gym trainer headshot" />
                  <h4><div className="mobile no">Neville Kenwright</div></h4>
            </div>
            <div className="td">
                  <div className="no desktop tablet title">Jodie Doyle</div>
              <img className="headshot" src={image3} alt="Duo Clinic gym trainer headshot" />
                  <h4><div className="mobile no">Jodie Doyle</div></h4>
            </div>
            <div className="td">
              <div className="no desktop tablet title">Rob Blackwell</div>
                <img className="headshot" src={image2} alt="Duo Clinic gym trainer headshot" />
                    <h4><div className="mobile no">Rob Blackwell</div></h4>
              </div>
            <div className="td">
                <div className="no desktop tablet title">Chloe Gibson</div>
              <img className="headshot"  src={image1} alt="Duo Clinic gym trainer headshot" />
                  <h4><div className="mobile no">Chloe Gibson</div></h4>
            </div>
            
            </div>
          </div>
        </section>
      );
    }


