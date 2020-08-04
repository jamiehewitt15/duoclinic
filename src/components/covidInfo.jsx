import React from "react"
import "./componentStyles.css"
import Fulhamdrink from "./images/Fulhamdrink.jpg"
import F45FulhamWeights from "./images/F45FulhamWeights.jpg"
import covid from "./images/covid.png"


export default function covidInfo() {
      return (      
        <div>
  <section className id="why">
    <div className="holder">
      <div className="heading inner">
        <h2 className="specialHeading blue">Maintaining a safe, healthy environment</h2>
        <p>We’re already in a good place, but the seriousness of the Coronavirus situation deserves new levels of stringency. Our response is to instigate a strict plan of initiatives to protect and reassure our members when we reopen the gym.</p>
      </div>
    </div>
  </section>
  <section className="bb96">
    <div className="holder">
      <dl className="dual">
        <dt>
          <p><img alt="Fulham duo clinic drink" src={covid} className="aligncenter size-full " /></p>
        </dt>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">Existing practices</h3>
            <ol type={1}> 
              <li>Every member has a minimum space allocation of 100 sq ft when training.</li>
              <li>Each member has sole use of their equipment for each session.</li>
              <li>All equipment is cleaned with sanitiser after each session.</li>
              <li>Personal training is only ever carried out in groups of four.</li>
              <li>We limit sessions to 50 minutes to allow for 10 minutes of cleaning</li>
            </ol>
            <p />
          </div>
        </dd>
      </dl>
    </div>
    {/*    <div class="holder">
  <div class="heading inner secondheader">
      <h2 class="smaller">New initiatives</h2>
      <p><span class="subheading">Our local charity partner</span></p>
  </div>
    </div> */}
    <div className="holder">
      <dl className="dual right second">
        <div className="tablet mobile">
          <dt>
            <p><img alt="F45 Fulham Weights" src={F45FulhamWeights} className="aligncenter size-full " /></p>
          </dt>
        </div>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">New initiatives</h3>
            <ol start={6}>
              <li>We will thoroughly sanitise the entire space every month.</li>
              <li>We’ve installed hand-sanitiser pumps at every Training Pod.</li>
              <li>Every training station is positioned at least 2 metres apart.</li>
              <li>We now have outdoor training for larger group classes</li>
              <li>Every Duo Clinic team member is fully briefed on correct practices.</li>
            </ol>
            <p />
          </div>
        </dd>
        <div className="desktop">
          <dt>
            <p><img alt="F45 Fulham Weights" src={F45FulhamWeights} className="aligncenter size-full" /></p>
          </dt>
        </div>
      </dl>
    </div>
  </section>
</div>
      );
    }

