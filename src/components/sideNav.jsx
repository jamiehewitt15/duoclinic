import React from "react";
import Sidebar from "react-sidebar";
import "./componentStyles.css";
 
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
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button className="sideBarBtn" onClick={() => this.onSetSidebarOpen(true)}>
          
        </button>
      </Sidebar>
    );
  }
}
 
export default App;