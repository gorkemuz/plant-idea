import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="#default" className="logo">
          PLANT.LOGO
        </a>
        <div className="header-right">
          <img alt="user" className="user" src="images/farmer1.png" height="48px" />
          <label className="nickname">rheawin</label>
          <img alt="more" className="dot" src="images/dot.png" width="8px" />
        </div>
      </div>
    );
  }
}

export default Header;
