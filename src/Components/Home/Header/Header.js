import React, { Component } from "react";
import "./header.css";
import user from "./farmer1.png";
import dot from "./dot.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="#default" className="logo">
                    PLANT.LOGO
                </a>
                <div className="header-right">
                    <img alt="user" className="user" src={user} height="48px" />
                    <label className="nickname">rheawin</label>
                    <img alt="more" className="dot" src={dot} width="8px" />
                </div>
            </div>
        );
    }
}

export default Header;
