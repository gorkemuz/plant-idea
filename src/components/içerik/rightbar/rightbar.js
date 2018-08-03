import React, { Component } from 'react';
import './rightbar.css';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import firebase from '../../firebase/firebase';

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: []
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
      <div className="Kategoriler">
        <p className="kategori-title">İÇERİKLER</p>
        {this.state.title.map((item, i) => (
          <div key={i} className="kategori">
            <Link className="ka" to={'/içerik/' + item.key}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default RightBar;
