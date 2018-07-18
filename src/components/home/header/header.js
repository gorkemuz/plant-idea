import React, { Component } from "react";
import "./header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to='/home/1' className="logo">
            PLANT.LOGO
          </Link>
          <div className="header-right">
            <img
              alt="user"
              className="user"
              src="../images/farmer1.png"
              height="48px"
            />
            <label className="nickname">rheawin</label>
            <img alt="more" className="dot" src="../images/dot.png" width="8px" />
          </div>
        </div>
        <div className='header-menu'>
          <p className='menu-items'>Felsefe Tarihi</p><p className='menu-items'>Geçmiş Yazılarım</p><Link to='/filozoflar'><p className='menu-items'>Filozoflar</p></Link><p className='menu-items'>Felsefe Nedir?</p>
      </div>
      </div>
    );
  }
}

export default Header;
