import React,{Component} from "react";
import "./content.css";
import firebase from '../../firebase/firebase';

const Content = ({url}) => {
  let içerik = '';
  firebase.database().ref('kategoriler').on('value', (snapshot)=> {
    içerik = snapshot.val()[url].text;
    console.log(içerik);
  });

  return (
    <p className="içerik" id="içerik">
      {içerik}
    </p>
    );
}

export default Content;
