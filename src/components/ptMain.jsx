import React from "react"
import {  Link } from "react-router-dom";
import "./componentStyles.css";
import Arrowform from "./images/arrow-form.png"
// import "./styles/fontsFP.css";

export default function PTMain() {
      return (
        <section id="trial" className="hero mini trial" >
          <div className="table">
            <div className="tr">
              
              <div className="td tryUsBackground ptMain">
              <div className="middle">
                <div className="white center">
                <h3 class="PT signUp">  CUSTOMISED<br />PERSONAL<br />TRAINING<br /></h3>
                    
                    <h2 class="PT signUp"> THAT<br />
                                    GETS<br />
                                    RESULTS<br />
                                  </h2>
                                  
                    </div>
                </div>  
              </div>
              <div className="td trialSection PT ptMain">
              <h2 class="PT signUp f40">A 360° FITNESS ASSESSMENT<br /></h2>
                <p class="PT tryUs ">Every body is different - what works for some, won’t work for others. That’s why before we do anything, we need to have a thorough understanding of what makes you, you! We'll assess your fitness level, body type, eating habits, injuries, goals and many other elements, to ensure you get results.</p>
              
              <h2 class="PT signUp f40">COMPLIMENTARY NUTRITIONAL PLANS<br /></h2>
                <p class="PT tryUs ">Including weekly meal planners, healthy eating tips, as well as pre and post-workout nutrition advice.</p>
              
              <h2 class="PT signUp f40">A PROGRAM THAT’S PERSONALISED TO YOU<br /></h2>
                <p class="PT tryUs ">There is no such thing as one size fits all when it comes to fitness. That’s why we’ll create a personalised plan based on your body type, fitness level and goals in mind – whether that’s losing weight, toning up, or lifting more!</p>
              
              <h2 class="PT signUp f40">ONGOING PROGRESS TRACKING<br /></h2>
                <p class="PT tryUs ">It’s important to know how you are tracking with your fitness, so we’ll constantly monitor your progress and make sure we take note of those all important numbers and personal bests.</p>
              
              <img src={Arrowform} alt="Arrow icon" className="desktop tablet" />             
              </div>
            </div>
          </div>
        </section>

      );
    }
