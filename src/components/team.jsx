import React from "react"
import "./componentStyles.css"
import image1 from "./images/headshots/1.png"
import image2 from "./images/headshots/2.png"
import image3 from "./images/headshots/3.png"
import image4 from "./images/headshots/4.png"

export default function Team() {
    return (
        <section>
          <div className="table">
            <div className="tr">
            <div className="td">
              <img  src={image1} alt="Duo Clinic gym trainer headshot" />
            </div>
            <div className="td">
              <img  src={image2} alt="Duo Clinic gym trainer headshot" />
            </div>
            <div className="td">
              <img  src={image3} alt="Duo Clinic gym trainer headshot" />
            </div>
            <div className="td">
              <img  src={image4} alt="Duo Clinic gym trainer headshot" />
            </div>
            </div>
          </div>
        </section>
      );
    }


