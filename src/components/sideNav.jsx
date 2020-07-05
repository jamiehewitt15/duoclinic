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
          <Link className="sideLink" to="/contact"><p>Contact Us</p></Link>
          
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