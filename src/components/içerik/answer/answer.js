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
      kazma: '',
     };
  }
  componentDidMount = () => {
    firebase.database().ref('kategoriler/'+this.props.url+'/answer').on('value', snapshot => {
      const veri = _.values(snapshot.val());
      veri.map((yanıt,i) =>  {
        _.values(yanıt.damla).map((us) => {
          if(us.user === firebase.auth().currentUser.uid){
            //document.getElementById(i).style.color = '#3399ff'
          }
        })
      })
  })
  }
/* ============================== DAMLA +++++++++++++  DAMLA =================================== */
  arttır = (yanıt,i,callback) => {
    console.log(this.state.var)
    if(this.state.var === ''){
    console.log('3 eşleşmemiş ekleniyo')
    document.getElementById(i).style.color = '#ffa500'
    const ref = firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla').push()
      const newItem ={
        key: ref.key,
        user: firebase.auth().currentUser.uid
      }
      ref.set(newItem)
      _.values(yanıt.kazma).map((us) => {
        if(us.user === firebase.auth().currentUser.uid){
          console.log(us.user)
          firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/kazma/'+us.key).remove()
        }
        else{console.log('2 eşleşmedi kazma')}
      })
    }else{
      console.log('eşleşmiş eklenmiyo')
      callback();
      }}
  kontrol = (yanıt,i,callback) => {
    _.values(yanıt.damla).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        this.state.var = 'var';
        document.getElementById(i).style.color = '#3399ff'
        console.log(us.user)
        firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla/'+us.key).remove()
      }
      else{console.log('2 eşleşmedi')}
     })
    callback(yanıt,i,this.sıfırla)}

/* ============================== KAZMA ------ KAZMA =================================== */
  sıfırla = () => {
    this.setState({kazma: ''})
    this.setState({var: ''})
  }

  kontrolKazma = (yanıt,i,callback) => {
    _.values(yanıt.kazma).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        this.state.kazma = 'var';
        console.log(us.user)
        document.getElementById(i).style.color = '#3399ff'
        firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/kazma/'+us.key).remove()
      }
      else{console.log('2 eşleşmedi kazma')}
    })
    callback(yanıt,i,this.sıfırla)
  }

  arttırKazma = (yanıt,i,callback) => {
    console.log(this.state.kazma)
    if(this.state.kazma === ''){
    console.log('3 eşleşmemiş ekleniyo')
    document.getElementById(i).style.color = '#8a2be2'
    const ref = firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/kazma').push()
      const newItem ={
        key: ref.key,
        user: firebase.auth().currentUser.uid
      }
      ref.set(newItem)
      _.values(yanıt.damla).map((us) => {
        if(us.user === firebase.auth().currentUser.uid){
          console.log(us.user)
          firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla/'+us.key).remove()
        }
        else{console.log('2 eşleşmedi kazma')}
      })
    }else{
      console.log('eşleşmiş eklenmiyo')
      callback();
      }}
  render() {
    return (
      <div className="main">
        {this.state.cevap.map((yanıt, i) => (
          <div className="kart" key={i}>
            <div className="answers-stats">
            <i className="fas fa-tint arrow-up" id={i} onClick={() => {

              this.kontrol(yanıt,i,this.arttır);

                  }}></i>
                {((_.values(yanıt.damla).length-1)-(_.values(yanıt.kazma).length-1))>5?<i className="fas fa-tree tree"></i>:<i className="fas fa-seedling seed" ></i>}
              <img
                alt="user"
                className="arrow-down"
                src="../images/arrow.png"
                height="20px"
                onClick={()=> {
                  this.kontrolKazma(yanıt,i,this.arttırKazma);
                }}
              ></img>
              <label className={i} ><label className='yanıt-damla'>{(_.values(yanıt.damla).length-1)-(_.values(yanıt.kazma).length-1)}</label></label>
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
