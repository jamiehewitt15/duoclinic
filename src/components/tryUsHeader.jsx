import React from "react"
import {  Link } from "react-router-dom";
import "./componentStyles.css";
// import "./styles/fontsFP.css";

export default function PersonalTrainer() {
      return (
        <section id="trial" className="hero mini trial" >
          <div className="table">
            <div className="tr">
              
              <div className="td trialSection PT">
              <div className="middle">
                <div className="white center">
                     
                    <h2 class="PT"> MORE<br />
                                    THAN YOUR<br />
                                    TYPICAL<br />
                                    GYM</h2>
                    <p class="PT">Our unique environment offers a private space, moderen eqipment and premium personalised programming, we guarantee you won't find anywhere else... Plus, we've got onsite sports massage and osteopathy.</p>
                    
                    </div>
                </div>  
              </div>
              <div className="td tryUsBackground">
              <h2 class="PT blue"> GIVE US A TRY</h2>
              <p class="PT"> TO GET YOUR FREE TRIAL
                              PASS OR THE 7 DAY PT
                              TRIAL, JUST LEAVE YOUR
                              DETAILS BELOW</p>
                              <form target="_blank" acceptCharset="UTF-8" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2C0k__JuWiMeAfDAOJIKDnt3uFcLkzb4Q_CTF0v7ObFdghA/formResponse" className="infusion-form" id="inf_form_c94572c3a561ac03c4f386844d722a41" method="POST">
                    <input  name="inf_form_xid" type="hidden" defaultValue="c94572c3a561ac03c4f386844d722a41" />
                    <input name="inf_form_name" type="hidden" defaultValue="Web Form submitted" />
                    <input name="infusionsoft_version" type="hidden" defaultValue="1.70.0.200651" />
                    <input className="infusion-field-input-container tryUsInput" id="inf_field_FirstName" name="entry.179464223" type="text" placeholder="Your Name" />
                    <input className="infusion-field-input-container tryUsInput" id="inf_field_Email" name="entry.953511542" type="text" placeholder="Phone Number" />
                    <input className="infusion-field-input-container tryUsInput" id="inf_field_Email" name="entry.255321311" type="text" placeholder="Your Email" />
                    <input className="infusion-field-input-container tryUsInput" id="inf_field_Email" name="entry.1783728626" type="text" placeholder="Service Required" />
                    <input className="infusion-field-input-container tryUsInput" type="submit" defaultValue="+" value='GET MY FREE PASS'/>
                  </form>
              </div>
            </div>
          </div>
            
            
         
        </section>

      );
    }
