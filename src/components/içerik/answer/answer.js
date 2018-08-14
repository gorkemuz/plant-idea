import React, { Component } from 'react';
import './answer.css';
import { firebase, hoc } from '../../firebase';
import _ from 'lodash';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       cevap: [],
       avaible: true,
       artı: 0
     };
  }

  render() {
    return (
      <div className="main">
        {this.state.cevap.map((yanıt, i) => (
          <div className="kart" key={i}>
            <div className="answers-stats">
              <i className="fas fa-tint arrow-up" onClick={() => {
                  yanıt.damla = yanıt.damla+1;
                  firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key).child('damla').set(yanıt.damla)
                  document.getElementById(i).innerHTML= yanıt.damla
                  }}></i>
              <i className="fas fa-seedling seed" ></i>
              <img
                alt="user"
                className="arrow-down"
                src="../images/arrow.png"
                height="20px"
              ></img>
              <label class='yanıt-damla' id={i} >{yanıt.damla}</label>
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
    .ref('kategoriler/'+url)
    .on('value', snapshot => {
      this.setState({ cevap: _.values(snapshot.val().answer)});
      console.log(this.state.cevap)
    });
})(Answer);
