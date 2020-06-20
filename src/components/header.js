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
            <a id="covid-link" href="./">Our Covid-19 plan</a>
          </div>
          <div className="links">
            <a href="#trial">Get Started</a>
            <a href="#numbers">About</a>
            <a href="/personal-training/">Personal Training</a>
            <a href="/contact/">Contact</a>
            <a href="#" className="ham">&nbsp;</a>
          </div>  
          <a id="get-started" href="/getstarted/">Try Us</a>
        </div>
      );
    }

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.height = "30px !important";
  } else {
    document.getElementById("logo").style.height = "70px";
  }
}