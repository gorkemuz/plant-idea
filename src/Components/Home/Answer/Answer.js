import React, { Component } from "react";
import "./answer.css";

class Answer extends Component {
  render() {
    return (
      <div className="main">
        <div className="kart">
          <div className="answers-stats">
            <img
              alt="user"
              className="arrow-up"
              src="images/arrow-up.png"
              height="34px"
            />
            <i className="fas fa-seedling seed" />
            <img
              alt="user"
              className="arrow-down"
              src="images/arrow.png"
              height="34px"
            />
          </div>
          <div className="content">
            <p className="answer">
              Seamles quality -proof ideas through granular content. Rapidiously
              pontificate transparent Seamles quality -proof ideas through
              granular content. Rapidiously pontificate transparent Seamles
              quality -proof ideas through granular content. Rapidiously
              pontificate transparent Seamles quality -proof ideas through
              granular content. Rapidiously pontificate transparent Seamles
              quality -proof ideas through granular content. Rapidiously
              pontificate transparent Seamles quality -proof ideas through
              granular content. Rapidiously pontificate transparent systems
              rather.
            </p>
          </div>
          <div className="answers-info">
            <label className="answer-date">10/02/2018</label>
            <label className="answer-nick">Kaennn</label>
          </div>
        </div>
        <div className="kart">
          <div className="answers-stats">
            <img
              alt="user"
              className="arrow-up"
              src="images/arrow-up.png"
              height="34px"
            />
            <i className="fas fa-seedling seed" />
            <img
              alt="user"
              className="arrow-down"
              src="images/arrow.png"
              height="34px"
            />
          </div>
          <div className="content">
            <p className="answer">
              Seamlessly initiate inexpensive quality vectors through error-free
              best practices. Credibly transition future-proof ideas through
              granular content. Rapidiously pontificate transparent systems
              rather.
            </p>
          </div>
          <div className="answers-info">
            <label className="answer-date">10/02/2018</label>
            <label className="answer-nick">Kaennn</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
