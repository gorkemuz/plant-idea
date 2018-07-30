import React, { Component } from 'react';
import './answer.css';
import { firebase, hoc } from '../../firebase';
import _ from 'lodash';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       cevap: [],
       avaible: true
     };
  }

  render() {
    return (
      <div className="main">
        {this.state.cevap.map((yanıt, i) => (
          <div className="kart" key={i}>
            <div className="answers-stats">
              <img
                alt="user"
                className="arrow-up"
                src="../images/arrow-up.png"
                height="34px"
              />
              <i className="fas fa-seedling seed" />
              <img
                alt="user"
                className="arrow-down"
                src="../images/arrow.png"
                height="34px"
              />
            </div>

            <div className="content">
              <p className="answer" key={i}>
                  {yanıt.yazı}
              </p>
            </div>
            <div className="answers-info">
              <label className="answer-date">{yanıt.date}</label>
              <label className="answer-nick">{yanıt.id}</label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default hoc(function(url) {
  this.ref = firebase
    .database()
    .ref('kategoriler')
    .on('value', snapshot => {
      this.setState({ cevap: _.values(_.values(snapshot.val())[url].answer)});
      console.log(this.state.cevap)
    });
})(Answer);
