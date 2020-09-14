import React from "react"
import "./componentStyles.css"
import Osteopathy from "./images/FulhamBoxing.jpg"
import SPORTSMASSAGE from "./images/FulhamBoxing.jpg"
import DRYNEEDLING from "./images/DRYNEEDLING.jpg"
import PILATES from "./images/F45FulhamWeights.jpg"

export default function aboutUsContent() {
      return (      
        <div>
  <section className id="why">
    <div className="holder">
      <div className="heading inner">
        <h2 className="specialHeading blue">Personal Training at Duo Clinic</h2>
        <p >Personal Training at Duo Clinic is more than just a training session. We’re about helping you achieve your goals. 
              <br /><br />Whether you're a beginner in need of a lifestyle change or a well-seasoned fitness competitor, our personal trainers are committed to giving you the best tools, guidance and ongoing support to ensure you achieve your health and fitness goals.</p>
              
      </div>
    </div>
  </section>
  <section className="bb96">
    <div className="holder">
      <dl className="dual">
        <dt>
          <p><img alt="Fulham duo clinic drink" src={PILATES} className="aligncenter size-full " /></p>
        </dt>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">COACHING</h3>
            We don’t use the term world-class lightly, but when describing our expert and experienced trainers, it’s justified. Not only are they up-to-speed with the latest science, but they’re passionate about building our fun and unintimidating culture. And because we don’t use freelancers, and our permanent personal trainers stay for the long-term, you get the consistent care and support you need.
            
            <p />
          </div>
        </dd>
      </dl>
    </div>
  
    <div className="holder">
      <dl className="dual right second">
        <div className="tablet mobile">
          <dt>
            <p><img alt="F45 Fulham Weights" src={Osteopathy} className="aligncenter size-full " /></p>
          </dt>
        </div>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">Personal Space</h3>
            Your general health and wellbeing are as important to us as your physical fitness. And giving you ample space in which to train is part of our commitment to maintaining safe gym environments. In every one of your personal training sessions, you’ll have a minimum of 150 sq ft to yourself. Think of it as your gym within a gym.
            <p />
          </div>
        </dd>
        <div className="desktop">
          <dt>
            <p><img alt="F45 Fulham Weights" src={Osteopathy} className="aligncenter size-full" /></p>
          </dt>
        </div>
      </dl>
    </div>
  </section>
</div>
      );
    }

