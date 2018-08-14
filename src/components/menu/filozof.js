import React from 'react';
import './filozof.css';
import Header from '../içerik/header/header';
import firebase from '../firebase/firebase';
import Liste from './liste';

class Filozof extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yazı: null
    };
  }
  componentWillMount = () => {
  firebase.database().ref('filozoflar/0').on('value' , snapshot => {
    this.setState({ yazı: snapshot.val().içerik });
  })}
  render(){
  return (
    <div>
      <Header />
      <Liste />
      <div className="filozof-içerik">
      <div className='bg'>
        {this.state.yazı}
      </div>
      </div>
      </div>
  );
}};

export default Filozof;
