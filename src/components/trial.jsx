import React from "react"
import "./componentStyles.css"
import "./styles/header.css"
import trialVideo from "./videos/Video1-full.mp4"

export default function Trial() {
      return (      
        <section id="trial" className="hero mini trial" >
          <div className="table">
            <div className="tr">
              <div className="td">
                <video className="trialVideo" muted autoPlay loop controls>
                  <source src={trialVideo} type="video/mp4" />
                </video>
              </div>
              <div className="td trialSection">
                
              <div className="middle">
                <div className="white center">
                     
                    <h2 class="freeTrial">7 Day Trial</h2>
                    <p> 3 Personal Trainer Sessions for £99.<br />
                    In-Body Analysis | Goal Assessment | Nutritional Layout | Diet Plans | Plus More<br />
                    </p>
                    <a href="https://startyourfitness.co/dc-application-form" target="blank" className="button white"><span>Get Started</span></a>
                 
                    </div>
                </div>  
              </div>
            </div>
          </div>
            
            
         
        </section>
      );
    }



