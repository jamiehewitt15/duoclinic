import React from "react"
import Header from "./header"
import "./styles/layout.css"


export default function Layout({ children }) {
  return (
      <div>
          <Header />
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
        </div>
      </div>
    
  )
}