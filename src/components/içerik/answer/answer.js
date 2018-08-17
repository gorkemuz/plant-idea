import React, { Component } from 'react';
import './answer.css';
import { firebase, hoc } from '../../firebase';
import _ from 'lodash';
import ReactDOM from 'react-dom';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      cevap: [],
      var: '',
      kazma: '',
     };
  }

/* ============================== DAMLA +++++++++++++ DAMLA =================================== */
  arttır = (yanıt,callback) => {
    if(this.state.var === ''){
    document.getElementById(yanıt.key).style.color = '#ffa500'
    const ref = firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla').push()
      const newItem ={
        key: ref.key,
        user: firebase.auth().currentUser.uid
      }
      ref.set(newItem)
      _.values(yanıt.kazma).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/kazma/'+us.key).remove()
     }
    })
    }else{
      callback();
      }}
  kontrol = (yanıt,callback) => {
    _.values(yanıt.damla).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        this.state.var = 'var';
        document.getElementById(yanıt.key).style.color = '#3399ff'
        firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla/'+us.key).remove()
      }
      else{console.log('2 eşleşmedi')}
     })
    callback(yanıt,this.sıfırla)}

/* ============================== KAZMA ------ KAZMA =================================== */
  sıfırla = () => {
    this.setState({kazma: ''})
    this.setState({var: ''})
  }

  kontrolKazma = (yanıt,callback) => {
    _.values(yanıt.kazma).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        this.state.kazma = 'var';
        document.getElementById(yanıt.key).style.color = '#3399ff'
        firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/kazma/'+us.key).remove()
     }
    })
    callback(yanıt,this.sıfırla)
  }

  arttırKazma = (yanıt,callback) => {
    if(this.state.kazma === ''){
    document.getElementById(yanıt.key).style.color = '#8a2be2'
    const ref = firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/kazma').push()
      const newItem ={
        key: ref.key,
        user: firebase.auth().currentUser.uid
      }
      ref.set(newItem)
      _.values(yanıt.damla).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        firebase.database().ref('kategoriler/'+this.props.url+'/answer/'+yanıt.key+'/damla/'+us.key).remove()
     }
    })}else{
      callback();
    }}

  render() {
    setTimeout(() => {
     this.state.cevap.map((yanıt) => {
      _.values(yanıt.damla).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        document.getElementById(yanıt.key).style.color = '#ffa500'
        console.log(this.myRef)
     }

      })}) },0)
    setTimeout(() => {
     this.state.cevap.map((yanıt) => {
      _.values(yanıt.kazma).map((us) => {
      if(us.user === firebase.auth().currentUser.uid){
        document.getElementById(yanıt.key).style.color = '#8a2be2'
        console.log(this.myRef)
     }

    })}) },2000)

    return (
      <div className="main">
        {this.state.cevap.map((yanıt,i) => (
          <div className="kart" key={i}>
            <div className="answers-stats">
            <i className="fas fa-tint arrow-up" id={yanıt.key} onClick={() => {
              this.kontrol(yanıt,this.arttır);

                  }}></i> <label className={i} ><label className='yanıt-damla'>{(_.values(yanıt.damla).length)}</label></label>

                {((_.values(yanıt.damla).length-1)+(_.values(yanıt.kazma).length-1))>5?<i className="fas fa-tree tree"></i>:<i className="fas fa-seedling seed" ></i>}
                <label className={i} ><label className='yanıt-damla'>{-(_.values(yanıt.kazma).length)}</label></label>
                <img
                alt="user"
                className="arrow-down"
                src="../images/arrow.png"
                height="20px"
                onClick={()=> {
                  this.kontrolKazma(yanıt,this.arttırKazma);
                }}
              ></img>


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
