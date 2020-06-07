import React from "react"

export default function Footer() {
      return (
        <div>
          <footer>
            <div className="frow">
              <div className="frow1">
                <ul>
                  <li><a href="/getstarted/">Get Started</a></li> 
                  <li><a href="/about/">About</a></li>
                  <li><a href="/womens-fitness/">Womens Fitness</a></li> 
                  <li><a href="/mens-fitness/">Mens Fitness</a></li>  
                  <li><a href="/personal-training/">Personal Training</a></li>  
                  <li><a href="/small-group-personal-training/">Small Group Personal Training</a></li>  
                  <li><a href="/one-2-one-personal-training/">One-to-One Personal Training</a></li>  
                  <li><a href="/fitness-over-50/">Fitness After 50</a></li>  
                  <li><a href="/athlete-programme/">W10 Athlete Programme</a></li>  
                </ul>
              </div>    
              <div className="frow2">
                <ul>
                  <li><a href="/timetable/">Classes</a></li>   
                  <li><a href="/the-space/">The Space</a></li>   
                  <li><a href="/blog/">Blog</a></li>  
                  {/*   <li><a href="/press/">Press</a></li>  */}
                  <li><a href="/ebooks/">e-Books</a></li> 
                  <li><a href="/contact/">Contact</a></li> 
                  <li><a href="/callback/">Callback</a></li> 
                  <li><a href="/contact#emailus">Email us</a></li> 
                  <li><a href="/member/">Members Area</a></li> 
                  <li><a href="/charity/">Charity Partners</a></li> 
                </ul>
              </div>
              <div className="frow3">
                <div className="newsletter">
                  <h4>Get your fitness fill</h4>	
                  <form acceptCharset="UTF-8" action="https://ge734.infusionsoft.com/app/form/process/c94572c3a561ac03c4f386844d722a41" className="infusion-form" id="inf_form_c94572c3a561ac03c4f386844d722a41" method="POST">
                    <input name="inf_form_xid" type="hidden" defaultValue="c94572c3a561ac03c4f386844d722a41" />
                    <input name="inf_form_name" type="hidden" defaultValue="Web Form submitted" />
                    <input name="infusionsoft_version" type="hidden" defaultValue="1.70.0.200651" />
                    <input className="infusion-field-input-container" id="inf_field_FirstName" name="inf_field_FirstName" type="text" placeholder="Your Name" />
                    <input className="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" type="email" placeholder="Email" />
                    <input type="submit" defaultValue="+" />
                  </form>
                </div>
                <ul className="socials">
                  <h4>Follow Us</h4>
                  <li><a href="https://www.facebook.com/w10fit/" className="facebook" target="_blank">&nbsp;</a></li>
                  <li><a href="https://www.instagram.com/w10fit/" className="instagram" target="_blank">&nbsp;</a></li>
                  <li><a href="https://twitter.com/w10fit" className="twitter" target="_blank">&nbsp;</a></li>
                </ul>
              </div>
              <iframe src="https://theifba.com/certificate/?g=8029&c=w&t=true&align=left" width="20%" style={{border: 0, width: '100%', marginTop: '20px', opacity: '0.3'}} height="120px" />
            </div>
            <div className="end">
              <div className="mobile pin">&nbsp;</div>
              <a href="https://www.google.com/maps?cid=13584322199484334831" target="blank" className="pin">202-208 Kensal Road, London W10 5BN</a>
              <div className="line line110">&nbsp;</div>
              <p className="terms"><strong><a href="https://w10.fit/privacy-policy/">Privacy Policy</a> / <a href="https://w10.fit/cookie-policy/">Cookie Policy</a> / <a href="https://w10.fit/terms-conditions/">Terms &amp; Conditions</a></strong></p><strong>
                <p className="small">© 2019 W10. All Rights Reserved. Registered Office: The Basement, 202-208 Kensal Road, London W10 5BN. Registered Company No. 07566945.</p>
              </strong></div><strong>
            </strong></footer><strong>
          </strong></div>
      );
    }
