import React from "react"
import "./componentStyles.css"

export default function Video() {
      return (<section className="videos">
      <div className="holder">
        <div className="findOutMoreHeading">
          <h2 className="specialHeading blue">Find Out More</h2>
        </div>
        <div className="video">
            <div className="player">
              <div className="lines">
                <div className="wistia_responsive_padding" >
                    <div className="wistia_responsive_wrapper" >
                        <div className="wistia_embed wistia_async_zsf8r28522 videoFoam=true" style={{height: '100%', width: '100%'}}>
                        <div className="videoContainer">
                        <iframe title="video1" className="iframeVideo" src='https://player.vimeo.com/video/421936046?title=0&byline=0&portrait=0' frameBorder={0} allow="autoplay; fullscreen" allowFullScreen />
                        </div><div>

                        </div>

                            </div></div></div>
              </div>
            </div>
            {/* <div className="quote">
              <blockquote style={{borderLeft: '3px solid #29888e'}}>
                <p>"I’ve done things I never thought I could do"</p>
                <cite style={{fontFamily: 'Montserrat'}}>Emma</cite>
              </blockquote>
            </div>
          <li>
            <div className="player">
              <div className="lines linesleft">
                <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                    <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
                        <div className="wistia_embed wistia_async_c6jl4v0ve5 videoFoam=true" style={{height: '100%', width: '100%'}}>
                        
                        <div className="videoContainer">
                        <iframe title="video2" className="iframeVideo" width="560" height="315" src="https://www.youtube.com/embed/LLe408h_cL4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                             
                         <div className="middle">
                            <div className="text"></div>
                        </div> 
                        </div>


                        </div></div></div>
              </div>
            </div>
            <div className="quote">
              <blockquote style={{borderRight: '3px solid #29888e'}}>
                <p>"A real-life changing event"</p>
                <cite style={{fontFamily: 'Montserrat'}}>David <i>&nbsp;</i></cite>
              </blockquote>
            </div>
          </li> */}
        </div>
      </div>
    </section>
      );
    }