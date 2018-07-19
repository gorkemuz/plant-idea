import React , {Component} from "react";
import "./answer.css";
import firebase from '../../firebase/firebase';

const Answer = ({url}) => {
  let cevap = [];
    firebase.database().ref('kategoriler').on('value', (snapshot)=> {
      cevap = cevap.concat(snapshot.val()[url].answer);
      console.log(cevap);
    });
  console.log(cevap);
    return (
      <div className="main">
              {cevap.map((yanıt,i) => (
                <div className="kart">
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
                {yanıt.text}
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

export default Answer;
