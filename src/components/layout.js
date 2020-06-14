import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./styles/layout.css"


export default function Layout({ children }) {
  return (
      <div>
          <Header />
        <div style={{  }}>
        {children}
        </div>
        <Footer />
      </div>
    
  )
}