import React from "react"
import {  Link } from "react-router-dom";
import "./componentStyles.css";
import "./styles/fitnessPlayground.css";
// import "./styles/fontsFP.css";

export default function PersonalTrainer() {
      return (
        <div>
  <div className="first-section clearfix">
    <a href="tel:1800496348" className="phone"><strong>1800 496 348</strong></a>
    <div className="half yellow">
      <div className="h-inner">
        <div className="header clearfix">
          {/* <a href="/" className="logo"><img src="images/logo.png" /></a><a href="tel:1800496348" className="phone mob"><strong>1800 496 348</strong></a> */}
        </div>
        <h1>FINDING IT HARD TO GET FIT ON YOUR OWN?</h1>
        <h5>Our world class PTs are ready to help you get fitter, leaner and stronger.</h5>
        <div className="cta ba">
          <a href="#form" className="scroll">GET YOUR FREE PT session</a>
        </div>
      </div>
    </div>
    <div className="half white">
      {/* <img src="images/banner-image.jpg" className="banner-img" /> */}
    </div>
  </div>
  <div className="second-section clearfix">
    <div className="half grey">
      <div className="h-inner">
        <p>Personal Training at Fitness Playground is more than just a training session. We’re about helping you achieve your goals.</p>
        <p>Whether you're a beginner in need of a lifestyle change or a well-seasoned fitness competitor, our personal trainers are committed to giving you the best tools, guidance and ongoing support to ensure you achieve your health &amp; fitness goals.</p>
      </div>
    </div>
  </div>
  <div className="third-section2 clearfix">
    <div className="half offer">
      <h4><span>What you get!</span></h4>
      <h2><span>Customised Personal Training</span> that gets results</h2>
      <p>At Fitness Playground, we understand the challenges for getting fit. That’s why we’ve designed our Personal Training programs to deliver a complete fitness transformation, which is all about you – and ensures you get <br />RESULTS!</p>
    </div>
    <div className="half offering">
      {/* <img src="images/corner.jpg" className="corner" /> */}
      <div className="h-inner">
        <div className="offer-item">
          {/* <img src="images/item1.png" /> */}
          <h4>A 360° fitness assessment</h4>
          <p>Every body is different - what works for some, won’t work for others. That’s why before we do anything, we need to have a thorough understanding of what makes you, you! We'll assess your fitness level, body type, eating habits, injuries, goals and many other elements, to ensure you get results.</p>
        </div>
        <div className="offer-item">
          {/* <img src="images/item2.png" /> */}
          <h4>Complimentary nutritional plans</h4>
          <p>Including weekly meal planners, healthy eating tips, as well as pre and post-workout nutrition advice.</p>
        </div>
        <div className="offer-item">
          {/* <img src="images/item3.png" /> */}
          <h4>A program that’s personalised to you</h4>
          <p>There is no such thing as one size fits all when it comes to fitness. That’s why we’ll create a personalised plan based on your body type, fitness level and goals in mind – whether that’s losing weight, toning up, or lifting more!</p>
        </div>
        <div className="offer-item">
          {/* <img src="images/item4.png" /> */}
          <h4>Ongoing progress tracking</h4>
          <p>It’s important to know how you are tracking with your fitness, so we’ll constantly monitor your progress and make sure we take note of those all important numbers and personal bests. </p>
        </div>
      </div>
    </div>
  </div>
  <div className="clear" />
  <div className="cta yell cut">
    <a className="scroll" href="#form">GET YOUR FREE PT session</a>
  </div>
</div>

      );
    }
