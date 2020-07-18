import React from "react"
import "./componentStyles.css"

export default function Video() {
      return (
      <section className="videos">
      <div className="holder">
        <div className="findOutMoreHeading">
          <h2 className="specialHeading blue">Find Out More</h2>         
          <iframe title="video1" className="iframeVideo" src='https://player.vimeo.com/video/421936046?title=0&byline=0&portrait=0' frameBorder={0} allow="autoplay; fullscreen" allowFullScreen />            
       </div>
        </div>
        
    </section>
      );
    }