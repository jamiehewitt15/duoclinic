import React from "react"
import "./componentStyles.css"
import TubeImage from "./images/fulhamtube.png"

export default function Tube() {
      return (
        <section className="light travelling t96">
        <div className="holder">
            <h2 className="specialHeading blue">Travelling by tube</h2>
            <ul className="tubeTravel">
                <img alt="Fulham Broadway Tube Station" src={TubeImage}/>
                <h4>Fulham Broadway<br />Tube Station</h4>
                <p className="tubeLine">District Line</p>
            </ul>
            {/* <div className="inner">
            <h2>Travelling by car</h2>
            <div className="from">
                <h5>From Kensal Rise, Kensal Green, Queens Park,<br />
                Willesden, Kilburn or Harlesden:</h5>
                <p>Head for the junction of Harrow Road and Ladbroke Grove, cross the canal and turn left by the Dock Kitchen and Tom Dixon shop.</p>
            </div>
            <div className="from">
                <h5>From Notting Hill, Kensington, or Westbourne Park:</h5>
                <p>Head up past Portobello Road to the top of Ladbroke Grove and turn onto Kensal Road before you reach the Innocent building. Alternatively, head for Elkstone Road or Goldborne Road and join Kensal Road by the West Thirty Six bar.</p>
                <p>You’ll find us at 202-208 Kensal Road, between Canalot Studios and the Cobden’s Working Men’s Club. There are ample Pay &amp; Display car parking spaces nearby.</p>
                <p>See you soon.</p>
            </div>
            </div> */}
        </div>
        </section>
      );
    }