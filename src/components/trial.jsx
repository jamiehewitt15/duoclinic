import React from "react"
import "./componentStyles.css"
import "./styles/header.css"
import Background from "./images/Background-3.jpg"

export default function Trial() {
      return (      
        <section id="trial" className="hero mini trial" style={{ backgroundImage: `url(${Background})` }}>
        
            <div className="middle">
              <div className="white center">
              <h2 class="freeTrial">30-day Trial</h2>
              <p>Test drive our gym, meet the team and experience our inclusive culture. We’ll help you<br />
                  rediscover your fitness mojo and get the results that you want.</p>
              <a href="/" className="button white"><span>Get Started</span></a>
              </div>
          </div>
         
        </section>
      );
    }



