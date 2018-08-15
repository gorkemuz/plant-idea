import React, { Component } from 'react';
import './answer.css';
import { firebase, hoc } from '../../firebase';
import _ from 'lodash';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       cevap: [],
       avaible: true,
      artı: 0,
      var: true,
     };
  }

  render() {
    return (
      <div className="main">
        {this.state.cevap.map((yanıt, i) => (
          <div className="kart" key={i}>
            <div className="answers-stats">
            <i className="fas fa-tint arrow-up" id={i}  onClick={() => {
                firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key).child('damla')
                  .on('value', snapshot =>  {
                    this.usr = _.values(snapshot.val());
                  })
                  .then(() => {this.usr.map((us,i) => {
                    if(us.user === firebase.auth().currentUser.uid){
                      this.setState({ var: false})
                    }
                  })})
                  .then(() => {
                    document.getElementById(i).style.color = '#f6546a'
                    document.getElementsByClassName(i).innerHTML = _.values(yanıt.damla.length);
                    if(this.state.var === true){
                    firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key).child('damla').push({
                      'user': firebase.auth().currentUser.uid
                    })
                  }})
                  }}></i>
              <i className="fas fa-seedling seed" ></i>
              <img
                alt="user"
                className="arrow-down"
                src="../images/arrow.png"
                height="20px"
                onClick={()=> {
                  firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key).child('damla').set(                       yanıt.damla)
                  // document.getElementsByClassName(i).innerHTML = yanıt.damla;
                  document.getElementById(i).style.color = '#3399ff'
                }}
              ></img>
              <label className={i} ><label className='yanıt-damla'>{_.values(yanıt.damla).length}</label></label>
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
    });
})(Answer);
