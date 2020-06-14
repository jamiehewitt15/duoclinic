import React from "react"
import "./componentStyles.css"
import "./styles/numbers.css"
import image1 from "./images/method-draw-image-1.svg"
import image2 from "./images/method-draw-image-2.svg"

export default function Numbers() {
      return (      
        <section className="numbers light">
        <div className="holder">
          <div className="heading b64">
            <h2>What makes personal training<br /> at Duo Clinic so different?</h2>
            <p className="center">At Duo Clinic, we focus on what’s important: you and your goals. Nothing else matters.<br />  Join us, and you’ll feel the difference, in every sense.</p>
          </div>
        </div>
        <div className="numberblock light">
          <dl>
            <dt>
              <img src={image1} alt="gym icon" className="desktop tablet" />
              <img src="https://w10.fit/wp-content/themes/fury-w10/svg/imgHomeSGPTMob.svg"  alt="gym icon"  className="mobile" />
            </dt>
            <dd>
              <div className="middle">
                <div className="gap">
                  <div className="no desktop tablet title">01. Community</div>
                  <h4><div className="mobile no">01. Community </div>Feel the friendly vibes</h4>
                  <p>Our community culture makes fitness inclusive and fun. Our Small-group PT sessions give you focused support plus a motivating group dynamic.</p>
                </div>
              </div>
            </dd>
          </dl>
          <dl className="right">
            <dt>
              <img src={image2} className="desktop tablet"  alt="gym icon" />
              <img src="https://w10.fit/wp-content/themes/fury-w10/svg/imgHomeResultsMob.svg" className="mobile"  alt="gym icon" />
            </dt>
            <dd>
              <div className="middle">
                <div className="gap">
                  <div className="no desktop tablet title">02. Coaching</div>
                  <h4><div className="mobile no">02. Coaching </div>Expert guidance gets results</h4>
                  <p>Through small-group personal training sessions, our permanent team of world-class coaches will guide, monitor and support you every step of the way. They’re a great bunch of people to boot.</p>
                </div>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="https://w10.fit/wp-content/themes/fury-w10/svg/imgHomeTraining.svg" className="desktop tablet"  alt="gym icon" />
              <img src="https://w10.fit/wp-content/themes/fury-w10/svg/imgHomeTrainingMob.svg" className="mobile"  alt="gym icon" />
            </dt>
            <dd>
              <div className="middle">
                <div className="gap">
                  <div className="no desktop tablet title">03. Customer service</div>
                  <h4><div className="mobile no">03. Customer service </div>It’s all about you</h4>
                  <p>At W10, everything we do is driven by your personal needs and goals. That’s why we’ve developed a professional, customer-focused service ethos built on industry-defining systems and standards.</p>
                </div>
              </div>
            </dd>
          </dl>
          <dl className="right">
            <dt>
              <img src="https://w10.fit/wp-content/themes/fury-w10/svg/imgHomeCoaching.svg" className="desktop tablet" alt="gym icon"  />
              <img src="https://w10.fit/wp-content/themes/fury-w10/svg/imgHomeCoachingMob.svg" className="mobile"  alt="gym icon" />
            </dt>
            <dd>
              <div className="middle">
                <div className="gap">
                  <div className="no desktop tablet title">04. Care</div>
                  <h4><div className="mobile no">04. Care </div>Your wellbeing comes first</h4>
                  <p>Improving your physical strength is the foundation of our 360° plan for your complete wellbeing, which includes nutrition support, building mental robustness, and maintaining a safe, healthy gym environment.</p>
                </div>
              </div>
            </dd></dl>
        </div>
      </section>
      );
    }

