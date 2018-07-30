import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/firebase';

const Header = ({ kullanıcı_adı, email }) => {
  return (
    <div>
      <div className="header">
        {/* =========== LOGO BURAYA EKLENECEK ============*/}
        <Link to="/home/1" className="logo">
          PLANT.LOGO
        </Link>
        {/* =========== HEADER - KULLANICI KISMI ============*/}
        <div className="header-right">
          <img
            alt="user"
            className="user"
            src="../images/farmer1.png"
            height="48px"
          />
          <label className="nickname">
            {firebase.auth().currentUser.displayName}
          </label>

          <div className="dropdown">
            <img alt="more" className="dot" src="../images/dot.png" width="8px" />
            <div className="dropdown-content">
              <Link className="logout" to="/logout">
                çıkış yap
              </Link>
              <Link className="logout" to={"/profile/"+firebase.auth().currentUser.uid}>
                profil
              </Link>
          </div>
</div> 

        </div>
      </div>
      {/* =========== FELSEFE MENÜSÜ ============*/}
      <div className="header-menu">
        <p className="menu-items">Felsefe Tarihi</p>
        <p className="menu-items">Geçmiş Yazılarım</p>
        <Link to="/filozoflar">
          <p className="menu-items">Filozoflar</p>
        </Link>
        <p className="menu-items">Felsefe Nedir?</p>
      </div>
    </div>
  );
};

export default Header;
