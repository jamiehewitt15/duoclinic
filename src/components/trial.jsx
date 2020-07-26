import React from "react"
import "./componentStyles.css"
import "./styles/header.css"
import trialVideo from "./videos/Video1.mp4"

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
                    <p>Test drive our gym, meet the team and experience our inclusive culture. We’ll help you rediscover your fitness mojo and get the results that you want.</p>
                    <a href="https://startyourfitness.co/dc-application-form" target="blank" className="button white"><span>Get Started</span></a>
                 
                    </div>
                </div>  
              </div>
            </div>
          </div>
            
            
         
        </section>
      );
    }



