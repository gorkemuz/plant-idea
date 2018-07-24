import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { app } from '../firebase/firebase';
import Header from '../home/header/header';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      kullanıcı: '',
    };
  }
  componentWillMount = () => {
    app
      .auth()
      .signOut()
      .then(user => {
        this.setState({ redirect: true });
      });
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return <Header />;
  }
}

export default Logout;
