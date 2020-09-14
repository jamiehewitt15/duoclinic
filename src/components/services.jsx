import React from "react"
import "./componentStyles.css"
import Osteopathy from "./images/Osteopathy.jpg"
import SPORTSMASSAGE from "./images/SPORTSMASSAGE.jpg"
import DRYNEEDLING from "./images/DRYNEEDLING.jpg"
import PILATES from "./images/PILATES.jpg"

export default function aboutUsContent() {
      return (      
        <div>
  <section className id="why">
    <div className="holder">
      <div className="heading inner">
        <h2 className="specialHeading blue">Personal Training at Duo Clinic</h2>
        <p > Personal Training at Duo Clinic is more than just a training session. We’re about helping you achieve your goals. 
              <br /><br />Whether you're a beginner in need of a lifestyle change or a well-seasoned fitness competitor, our personal trainers are committed to giving you the best tools, guidance and ongoing support to ensure you achieve your health and fitness goals.</p>
              
      </div>
    </div>
  </section>
  <section className="bb96">
    <div className="holder">
      <dl className="dual">
        <dt>
          <p><img alt="Fulham duo clinic drink" src={PILATES} className="aligncenter size-full " /></p>
        </dt>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">PILATES</h3>
            Pilates aims to strengthen the body in an even way, with particular emphasis on core strength to improve general fitness and wellbeing. Pilates has something to offer for all ages and fitness levels.
            <br/>
            <br/>Not only is it great for strength, but regular pilates can improve posture, muscle tone, balance and joint mobility, and relieve stress and tension! For the more elite of athletes, pilates is the perfect complement to your training to help you develop whole-body strength and flexibility, while reducing the risk of injury. Get started by booking your sessions below.
            <p />
          </div>
        </dd>
      </dl>
    </div>
  
    <div className="holder">
      <dl className="dual right second">
        <div className="tablet mobile">
          <dt>
            <p><img alt="F45 Fulham Weights" src={Osteopathy} className="aligncenter size-full " /></p>
          </dt>
        </div>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">Osteopathy</h3>
            Osteopathy is a form of hands-on manual therapy and patient-centred care that aims to understand and treat the individual as a whole and not just focus on the painful symptoms. Osteopathy incorporates manual therapy techniques along with movement programs and patient education to help individuals to become pain free.
            <br/>
            <br/>Appointments include an Osteopathic assessment and diagnosis, treatment and treatment plans, movement programs and postural advice to practice in daily life.
            <p />
          </div>
        </dd>
        <div className="desktop">
          <dt>
            <p><img alt="F45 Fulham Weights" src={Osteopathy} className="aligncenter size-full" /></p>
          </dt>
        </div>
      </dl>
    </div>

    <div className="holder">
      <dl className="dual">
        <dt>
          <p><img alt="Fulham duo clinic drink" src={SPORTSMASSAGE} className="aligncenter size-full " /></p>
        </dt>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">Sports Massage</h3>
            Sports massage involves the manipulation of soft tissue to benefit those engaged in regular physical activity. Sports massage assists in correcting problems or imbalances in soft tissue (i.e. your skin, muscles, tendons, ligaments and fascia) caused from repetitive and strenuous physical activity or trauma. Sports massage may enhance performance, aid recovery and prevent potential injury.
            <br/>
            <br/>
            If you’ve got an injury or imbalance, we can help! Book your session below.
            <p />
          </div>
        </dd>
      </dl>
    </div>
    
    <div className="holder">
      <dl className="dual right second">
        <div className="tablet mobile">
          <dt>
            <p><img alt="F45 Fulham Weights" src={DRYNEEDLING} className="aligncenter size-full " /></p>
          </dt>
        </div>
        <dd className="middle">
          <div className="inside">
            <p>
            </p><h3 className="covidTitle">Dry Needling</h3>
            Dry Needling is a treatment technique involving a sterile, single-use, fine filament needle (an acupuncture needle) being inserted into the muscle to assist with decreasing pain and improving function, by helping to release knots in the muscle. This is a technique used to treat dysfunction of skeletal muscle and connective tissue, minimise peripheral pain, and improve or regulate damage.

            <br/>
            <br/>Get in touch or drop by the clinic to talk about your treatment options.<p />
          </div>
        </dd>
        <div className="desktop">
          <dt>
            <p><img alt="F45 Fulham Weights" src={DRYNEEDLING} className="aligncenter size-full" /></p>
          </dt>
        </div>
      </dl>
    </div>

  </section>
</div>
      );
    }

