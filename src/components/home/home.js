import React, { Component } from 'react';
import Header from '../içerik/header/header';
import firebase from '../firebase/firebase';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import './home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title : [],
     };
  }
  componentWillMount = () => {
    firebase
      .database()
      .ref('kategoriler')
      .on('value', snapshot => {
        this.setState({ title: _.values(snapshot.val() )});
      });
  };

  render() {
    return (
        <div>
            <Header />
            <div className="main-comp">
            {this.state.title.map((item, i) => (
                <div className="car">
                    <div key={i} className="conte">
                        <Link className="kp" to={'/içerik/' + item.key}>
                        {item.title}
                        </Link>
                        <hr/>
                        <p className='sorular'>
                        {item.text}
                        </p>
                        <label 
                            className='infos'>
                            {_.values(item.answer).length}
                            <i className="fas fa-seedling sed" /
                            >
                        </label>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
  }
}

export default Home;
