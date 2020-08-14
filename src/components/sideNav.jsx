import React from "react";
import {  Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import "./componentStyles.css";
import Menu from "./images/menuWhite.svg";
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
        <div className="sideBarMenu">
          <Link id="covid-link" to="/covid">Our Covid-19 plan</Link>
          <Link className="sideLink" to="/"><p>Home</p></Link>
          <Link className="sideLink" to="/about"><p>About</p></Link>
          <Link className="sideLink" to="/services"><p>Services</p></Link>
          <Link className="sideLink" to="/classes"><p>Classes</p></Link>
          <Link className="sideLink" to="/#trial"><p>Get Started</p></Link>
          <Link className="sideLink" to="/contact"><p>Contact Us</p></Link>
          <ul className="menuFooterList">
          <li className="menuFooter"><a className="menuFooterLink" href="mailto: info@duoclinic.co">info@duoclinic.co</a></li> 
          <li className="menuFooter"><a className="menuFooterLink" href="tel:07900653068">07900 653068</a></li> 
          </ul>
        </div>
          
        
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { 
          background: "white",
          paddingTop: "30px",
          height: "100vh",
          position: "fixed", } }}
      >
        <button className="sideBarBtn" onClick={() => this.onSetSidebarOpen(true)}>
          <img className="menuIcon" src={Menu} alt="Menu Icon"/>
        </button>
      </Sidebar>
    );
  }
}
 
export default App;