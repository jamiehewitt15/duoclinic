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
                <div className="chloe">
              <img className="headshot"  src={image1} alt="Duo Clinic gym trainer headshot" />
                </div>
                  <h4><div className="mobile no">Chloe Gibson</div></h4>
            </div>
            
            </div>
          </div>
          <div className="aboutSignUp">
          <div className="middle">
                <div className="white center">
                     
                    <h2 class="PT team">GET YOUR 7 DAY TRIAL</h2>
                    <p class="PT about">Test drive the Duo Clinic experience, meet the team and enjoy our inclusive culture. We’ll help you rediscover your fitness mojo and get the results that you want.</p>
                    <a href="/tryus"  className="button white whiteBtn"><span className="tryUswhiteBtn">Try Us →</span></a>
                 
                </div>  
              </div>
              </div>
        </section>
      );
    }


