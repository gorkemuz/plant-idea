import React, { Component } from "react";
import "./leftbar.css";

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <div className="icon-back">
          <img alt="user" className="icon" src="images/tree.png" height="64px" />
        </div>
        <img alt="user" className="history" src="images/history.png" height="48px" />
        <img alt="user" className="settings" src="images/settings.png" height="48px" />
        <img alt="user" className="phone" src="images/smartphone.png" height="48px" />
        <img alt="user" className="zar" src="images/die.png" height="48px" />
      </div>
    );
  }
}

export default LeftBar;
