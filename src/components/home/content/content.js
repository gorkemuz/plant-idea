import React from "react";
import "./content.css";
import * as firebase from 'firebase';

const Content = ( {url} ) => {
  let text;
  firebase.database().ref('kategoriler/'+url).on('value', (snapshot) => {
    text = snapshot.val().text;
  });
  //const text = title[url].text;
  return (
    <p className="içerik" id="içerik">
      {text}
    </p>
    );
}

export default Content;
