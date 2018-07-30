import React, { Component } from 'react';
import './content.css';
import { firebase, hoc } from '../../firebase';
import _ from 'lodash';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { içerik: '' };
  }

  render() {
    console.log(this.props.url)
    return (
      <p className="içerik" id="içerik">
        {this.state.içerik}
      </p>
    );
  }
}

export default hoc(function(url) {
  return firebase
    .database()
    .ref('kategoriler/'+url)
    .on('value', snapshot => {
      this.setState({ içerik: _.values(snapshot.val().text)});
    });
})(Content);
