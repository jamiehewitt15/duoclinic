import React from "react"
import "./componentStyles.css"
import "./styles/header.css"
import logo from "./images/logo.png"

export default function Header() {
      return (
        <div id="nav" className="nav-underline">
          <div id="logo"><a href="/">
          <img class="logo" src={logo}  alt="logo" />
            </a></div>
          <div id="covid-container">
            <a id="covid-link" href="https://w10.fit/our-covid-19-plan/">Our Covid-19 plan</a>
          </div>
          <div className="links">
            <a href="/getstarted/">Get Started</a>
            <a href="/about/">About</a>
            <a href="/personal-training/">Personal Training</a>
            <a href="/blog">Blog</a>
            <a href="/contact/">Contact</a>
            <a href="#" className="ham">&nbsp;</a>
          </div>  
          <a id="get-started" href="/getstarted/">Try Us</a>
        </div>
      );
    }
