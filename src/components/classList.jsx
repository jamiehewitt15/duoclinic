import React from "react"
import "./componentStyles.css"
import "./styles/header.css"


export default function ClassList() {
      return (      
        <section id="classList" className="classList" >
        <iframe title="classList" src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=8494" width={1200} height={800} />
        <iframe title="calanderList" src="https://app.wodify.com/Public/ClassCalendarEntry.aspx?TenantKey=35pY12xN5P&Location_Id=8611&Program_Id=77132,77191"  width="1200" height="1100"  />
        </section>
      );
    }
