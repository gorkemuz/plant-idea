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
      artı: 0,
      var: '',
     };
  }
  sıfırla = () => {
      this.setState({var: ''})}
  arttır = (yanıt,callback) => {
    console.log(this.state.var)
    if(this.state.var === ''){
    console.log('3 eşleşmemiş ekleniyo')
    firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla')
    .push(
      {
         'user': firebase.auth().currentUser.uid
      }
    )}else{
      console.log('eşleşmiş eklenmiyo')
      callback();
      }}
  kontrol = (yanıt,callback) => {
    this.usr.map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        this.state.var = 'var';
        console.log(this.state.var)
      }
      else{console.log('2 eşleşmedi')}
    })
    callback(yanıt,this.sıfırla)}

  render() {
    return (
      <div className="main">
        {this.state.cevap.map((yanıt, i) => (
          <div className="kart" key={i}>
            <div className="answers-stats">
            <i className="fas fa-tint arrow-up" id={i} onClick={() => {
              firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key).child('damla') .on('value', snapshot =>  {
                    this.usr = _.values(snapshot.val());
                    console.log("1")
                  })
              document.getElementById(i).style.color = '#f6546a'
              document.getElementsByClassName(i).innerHTML = _.values(yanıt.damla.length-1);
              this.kontrol(yanıt,this.arttır);
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
              <label className={i} ><label className='yanıt-damla'>{_.values(yanıt.damla).length-1}</label></label>
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
