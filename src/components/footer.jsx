import React from "react"
import facebookIcon from "./images/001-facebook.svg"
import instagramIcon from "./images/002-instagram.svg"

export default function Footer() {
      return (
        <div>
          <footer>
            <div className="frow">
              <div className="frow1">
                <ul>
                  <li class="footerList"><a href="/getstarted/">Get Started</a></li> 
                  <li class="footerList"><a href="/timetable/">Classes</a></li>   
                  <li class="footerList"><a href="/about/">About</a></li> 
                  <li class="footerList"><a href="/contact/">Contact</a></li> 
                  <li class="footerList"><a href="mailto: info@duoclinic.co">Email us</a></li> 
                </ul>
              </div>    
              <div className="frow2">
                <ul>
                <li class="footerList"><a href="mailto: info@duoclinic.co">info@duoclinic.co</a></li> 
                <li class="footerList"><a href="tel:07900653068">07900 653068</a></li> 
                <li class="footerList"><a href="https://www.duoclinic.co/privacy-policy/">Privacy Policy</a></li>
                <li class="footerList"><a href="https://www.facebook.com/DuoClinicFulham/"> <img src={facebookIcon} className="socialIcon"  alt="Facebook icon" /> </a>
                <a href="https://www.instagram.com/duo.clinic/"> <img src={instagramIcon} className="socialIcon"  alt="Instagram icon" /> </a></li>
                  {/*   <li><a href="/press/">Press</a></li>  */}
                  
                </ul>
              </div>
              <div className="frow3">
                <div className="newsletter">
                  <h4>Get a Call Back</h4>	
                  <form target="_blank" acceptCharset="UTF-8" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2C0k__JuWiMeAfDAOJIKDnt3uFcLkzb4Q_CTF0v7ObFdghA/formResponse" className="infusion-form" id="inf_form_c94572c3a561ac03c4f386844d722a41" method="POST">
                    <input name="inf_form_xid" type="hidden" defaultValue="c94572c3a561ac03c4f386844d722a41" />
                    <input name="inf_form_name" type="hidden" defaultValue="Web Form submitted" />
                    <input name="infusionsoft_version" type="hidden" defaultValue="1.70.0.200651" />
                    <input className="infusion-field-input-container" id="inf_field_FirstName" name="entry.179464223" type="text" placeholder="Your Name" />
                    <input className="infusion-field-input-container" id="inf_field_Email" name="entry.953511542" type="text" placeholder="Phone Number" />
                    <input className="submitTriangle" type="submit" defaultValue="+" />
                  </form>
                </div>
                {/* <ul className="socials">
                  <h4>Follow Us</h4>
                  <li><a href="https://www.facebook.com/w10fit/" className="facebook" target="_blank">&nbsp;</a></li>
                  <li><a href="https://www.instagram.com/w10fit/" className="instagram" target="_blank">&nbsp;</a></li>
                  <li><a href="https://twitter.com/w10fit" className="twitter" target="_blank">&nbsp;</a></li>
                </ul> */}
              </div>
              {/* <iframe src="https://theifba.com/certificate/?g=8029&c=w&t=true&align=left" width="20%" style={{border: 0, width: '100%', marginTop: '20px', opacity: '0.3'}} height="120px" /> */}
            </div>
            <div className="end">
              {/* <div className="mobile pin">&nbsp;</div> */}
              {/* <a href="https://www.google.com/maps?cid=13584322199484334831" target="blank" className="pin">202-208 Kensal Road, London W10 5BN</a>
              <div className="line line110">&nbsp;</div> */}
              <p className="terms"><strong><a href="/" className="termsLink">Privacy Policy</a> / <a href="/" className="termsLink">Cookie Policy</a> / <a href="/" className="termsLink">Terms &amp; Conditions</a></strong></p><strong>
                <p className="small">© 2019 Duo Clinic. All Rights Reserved. Registered Office: 2 - 8 Dawes Road, Fulham, London SW6 7EW. Registered Company No. 07566945.</p>
              </strong></div><strong>
            </strong></footer><strong>
          </strong></div>
      );
    }

    