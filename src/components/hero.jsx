/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react"
import "./componentStyles.css"
import "./styles/header.css"
import "./styles/plugin.css"
import mainVideo from "./videos/duoBannerWebsite.mov"


export default class contactHero extends Component {

  componentDidMount() {
    onLoad();
  }
      render(){
        return(
          <section className="hero home" >
             <video className="backgroundVideo" muted autoPlay loop>
              <source src={mainVideo} type="video/mp4" />
            </video>
            
          <div className="middle">
            <div className="heroMiddle">
           
            <div className="desktop tablet">
              <h2 className="cd-headline clip white"><span />
              <a href="" className="typewrite" data-period="2000" style={{ fontFamily: 'Montserrat' }} data-type='[ 
                "<h1>Get in the best shape of your life</h1>", 
                "<h1>Look better, feel better, live better</h1>", 
                "<h1>Made for you and your goals</h1>", 
                "<h1>Coached by experts</h1>", 
                "<h1>Designed for everyone</h1>", 
                "<h1>Caring, challenging, inspiring</h1>", 
                "<h1>Start at any fitness level</h1>", 
                "<h1>A personal programme</h1>", 
                "<h1>Be a better version of yourself</h1>" ]'>
                <span class="wrap"></span>
              </a>
               </h2>
            </div>
            <div className="mobile">
              <h2>Get in the best<br /> shape of your life</h2>
            </div>
          </div>
          </div>

          {/* <div className="down bounce">
            <img src="https://w10.fit/wp-content/themes/fury-w10/svg/iconArrowDown.svg" />
          </div> */}
        </section>
        );

      }  
    }

var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 100;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 50 //200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  function onLoad() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; font-family: 'Montserrat', sans-serif;}";
      document.body.appendChild(css);
  };