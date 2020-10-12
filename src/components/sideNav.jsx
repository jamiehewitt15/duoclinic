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
          <Link className="sideLinkCovid" id="covid-link" to="/covid" onClick={() => this.onSetSidebarOpen(false)} >Our Covid-19 plan</Link>
          <Link className="sideLink top" to="/" onClick={() => this.onSetSidebarOpen(false)} ><p>Home</p></Link>
          <Link className="sideLink" to="/about" onClick={() => this.onSetSidebarOpen(false)} ><p>About</p></Link>
          <Link className="sideLink" to="/services" onClick={() => this.onSetSidebarOpen(false)} ><p>Personal Trainer</p></Link>
          <Link className="sideLink" to="/contact" onClick={() => this.onSetSidebarOpen(false)} ><p>Contact Us</p></Link>
          <Link className="sideLink" to="/duoclinic" onClick={() => this.onSetSidebarOpen(false)} ><p>Services</p></Link>
          <a className="sideLink" target="blank" href="https://duoclinic.ptminder.com/" ><p>Login</p></a>
          <Link className="sideLink" to="/tryus" onClick={() => this.onSetSidebarOpen(false)} ><p>Try Us</p></Link>
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