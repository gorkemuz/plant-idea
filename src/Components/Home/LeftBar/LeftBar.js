import React, { Component } from "react";
import logo from "./tree.png";
import history from "./history.png";
import settings from "./settings.png";
import phone from "./smartphone.png";
import "./leftbar.css";
import zar from "./die.png";

class LeftBar extends Component {
    render() {
        return (
            <div className="left-bar">
                <div className="icon-back">
                    <img alt="user" className="icon" src={logo} height="64px" />
                </div>
                <img alt="user" className="history" src={history} height="48px" />
                <img alt="user" className="settings" src={settings} height="48px" />
                <img alt="user" className="phone" src={phone} height="48px" />
                <img alt="user" className="zar" src={zar} height="48px" />
            </div>
        );
    }
}

export default LeftBar;
