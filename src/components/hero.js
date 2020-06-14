import React from "react"
import "./componentStyles.css"
import "./styles/header.css"
import "./styles/plugin.css"
import Background from "./images/Background.jpg"

export default function Hero() {
      return (      
        <section className="hero home" style={{ backgroundImage: `url(${Background})` }}>
        <div className="middle">
          <div className="desktop tablet">
            <h2 className="cd-headline clip white"><span />
              <span className="cd-words-wrapper">
                <b className="is-visible">Get in the best shape of your life</b>
                <b className>Look better, feel better, live better</b>
                <b className>A personal programme</b>
                <b className>Made for you and your goals</b>
                <b className>Coached by experts</b>
                <b className>Designed for everyone</b>
                <b className>Caring, challenging, inspiring</b>
                <b className>Start at any fitness level</b>
                <b className>Be a better version of yourself</b>
              </span>
              <span className="banter">&nbsp;</span></h2>
          </div>
          <div className="mobile">
            <h2>Get in the best<br /> shape of your life</h2>
          </div>
          <ul className="buttons">
            <li><a href="https://w10.fit/about/" className="button white"><span>Learn More</span></a></li>
            <li><a href="https://w10.fit/getstarted/" className="button white"><span>Get Started</span></a></li>
          </ul>
        </div>
        <div className="down bounce">
          <img src="https://w10.fit/wp-content/themes/fury-w10/svg/iconArrowDown.svg" />
        </div>
      </section>
      );
    }
