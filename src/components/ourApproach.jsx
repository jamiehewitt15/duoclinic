import React from "react"
import "./componentStyles.css"
import Icon1 from "./images/icon1.png"
import Icon2 from "./images/icon2.png"
import Icon3 from "./images/icon3.png"
import Icon4 from "./images/icon4.png"


export default function ourApproach() {
      return (      
        <section className="light ourstory">
          <div className="holder">
            <div className="heading">
              <div className="inner">
                <h2 className="specialHeading blue">Our Approach</h2>
                <p>Our independence is our strength. It means we will always stay true to our original vision to create a customer-first, results-driven gym.</p>
                <p className="second">At the heart of this vision are four core principles:</p>
              </div>  
            </div>
            <div className="number">

            <div className="table">
            <div className="tr">
              <div className="td about">
              <dl>
                <dt>
                  <img src={Icon2}  alt="Our Approach Icon"/>
                </dt>
                <dd>
                  <h4>DEDICATED TRAINERS</h4>
                  <p>Trainers are always there to guide, motivate, and push you to get the most from every workout.</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={Icon3}  alt="Our Approach Icon"/>
                </dt>
                <dd>
                  <h4>SHOW UP ON YOUR TIME</h4>
                  <p>Show up and train on your time. A Trainer that books you in on a day and time that suits you. Time wasted: ZERO!</p>
                </dd>
              </dl>  
              </div>
              <div className="td about">
              <dl>
                <dt>
                  <img src={Icon4}  alt="Our Approach Icon"/>
                </dt>
                <dd>
                  <h4>NEW BESPOKE WORKOUTS EVERY DAY</h4>
                  <p>Duo PT workouts change everyday, so your body is always challenged and you’ll never get bored.</p>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src={Icon1} alt="Our Approach Icon"/>
                </dt>
                <dd>
                  <h4>3 SESSIONS FOR £99</h4>
                  <p>Are you ready for the ultimate version of you? We offer a range of Holistic Health services, including osteopathy, dry needling, massage, pilates and more!</p>
                </dd>
              </dl>
            
              </div>
            </div>
          </div>
            </div>
          </div>
        </section>
      );
    }