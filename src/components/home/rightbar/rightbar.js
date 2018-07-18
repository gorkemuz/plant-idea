import React from "react";
import "./rightbar.css";
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';

const RightBar = () => {
  let title;
  firebase.database().ref('kategoriler').on('value', (snapshot) => {
    title = snapshot.val();
  });
  return (
    <div className="Kategoriler">
      <p className="kategori-title">İçerikler</p>
      {title.map((item, i) => (
        <p key={i} className="kategori">
         <Link className='ka' to={'/home/'+item.id}>{item.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default RightBar;
