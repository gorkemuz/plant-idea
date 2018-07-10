import React, { Component } from 'react';
import './LeftBar.css';
import logo from './tree.png';
import history from './history.png';


class LeftBar extends Component{
    render(){
    return (
        <div className='left-bar'>
          <div className='icon-back'>
            <img alt='user' className='icon' src={ logo } height='64px'/>
          </div>
          <img alt='user' className='history' src={ history } height='48px'/>
        </div>
    );
}
}

export default LeftBar;
