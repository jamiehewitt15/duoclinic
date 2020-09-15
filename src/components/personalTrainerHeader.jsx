import React from "react"
import {  Link } from "react-router-dom";
import "./componentStyles.css";
// import "./styles/fontsFP.css";

export default function PersonalTrainer() {
      return (
        <section id="trial" className="hero mini trial" >
          <div className="table">
            <div className="tr">
              
              <div className="td trialSection PT">
              <div className="middle">
                <div className="white center">
                     
                    <h2 class="PT">FINDING IT HARD TO GET FIT ON YOUR OWN?</h2>
                    <p class="PT">Our world class PTs are ready to help you get fitter, leaner and stronger.</p>
                    <a href="./tryus" className="button white whiteBtn"><span>Get your FREE PT SESSION →</span></a>
                 
                    </div>
                </div>  
              </div>
              <div className="td ptImage">
              </div>
            </div>
          </div>
            
            
         
        </section>

      );
    }
