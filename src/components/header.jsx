import React from "react"
import {  Link } from "react-router-dom";
import "./componentStyles.css";
import logo from "./images/logo.png";
import SideNav from "./sideNav";

export default function Header() {
      return (
        <div id="nav" className="nav-underline">
          
          <div id="logo">
          <Link to="/">
          <img id="logoImg" class="logo" src={logo}  alt="logo" />
          </Link>
           </div>
          <div id="covid-container">
          <Link id="covid-link" to="/covid">Our Covid-19 plan</Link>
          </div>
          <div className="sideBarButton">
          <SideNav />
          </div>
          
          <div className="links">
            
            <nav>
            <Link to="/about" >About</Link>
            <Link to="/services" >Personal Trainer</Link>
            <Link to="/contact" >Contact</Link>
            <Link to="/duoclinic" >Services</Link>
            <a href="https://duoclinic.ptminder.com/" target="blank">Login</a>
            </nav>
          </div>  
          <div id="covid-container">
          <Link id="covid-link" to="/tryus">Try Us</Link>
          </div>
          <a id="get-started" href="/getstarted/">Try Us</a>
        </div>
      );
    }

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logoImg").classList.add("smallLogo");
    document.getElementById("logoImg").classList.remove("logo");
    document.getElementById("nav").classList.add("smallNav");
  } else {
    document.getElementById("logoImg").classList.remove("smallLogo");
    document.getElementById("logoImg").classList.add("logo");
    document.getElementById("nav").classList.remove("smallNav");
  }
}
