import React from 'react';
import firebase from '../firebase/firebase';
import './profil.css';
import Header from '../içerik/header/header';

const Profil = () => {
    console.log(firebase.auth().currentUser)
  return (
    <div>
        <Header />
        <div className='log-page'>
            <div className='wel-div'>
                <p className='profil-p'>Kullanıcı Adı: <label style={{color:'#d64d4d',marginLeft:'10px',fontFamily:'Raleway',fontSize:'15px'}}>{firebase.auth().currentUser.displayName}</label></p>
                <p className='profil-p'>Email: <label style={{color:'#77ab59',marginLeft:'10px',fontFamily:'Raleway',fontSize:'15px'}}>{firebase.auth().currentUser.email}</label></p>
                <p className='profil-p'>Kayıt Tarihi: <label style={{color:'#3b5998',marginLeft:'10px',fontFamily:'Raleway',fontSize:'15px'}}>{firebase.auth().currentUser.metadata.creationTime}</label></p>
                <p className='profil-p'>Son Çevrimiçi Olduğu Tarih: <label style={{color:'#3b5998',marginLeft:'10px',fontFamily:'Raleway',fontSize:'15px'}}>{firebase.auth().currentUser.metadata.lastSignInTime}</label></p>
            </div>
        </div>
    </div>
  );
};

export default Profil;
