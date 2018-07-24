import React from 'react';
import {Link} from 'react-router-dom';
import './addContent.css';
import firebase from '../../firebase/firebase';


class AddContent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      title: [],
      içerik: '',
      url: '',
    }}

  /*componentWillMount = () => {
    firebase
    .database()
    .ref('kategoriler')
    .on('value', snapshot => {
      this.setState({ title: snapshot.val() });
      this.setState({url:this.props.match.params.id})
      })
  };
  componentWillReceiveProps(nextProps){
       firebase
      .database()
      .ref('kategoriler')
      .once('value', snapshot => {
          this.setState({ içerik: snapshot.val()[nextProps.match.params.id] });
          console.log(snapshot.val()[this.state.url])
        });
     //call your api and update state with new props

  }
*/
  render() {
    return (
      <div className='f-screen'>
        {/*<div className="içerikler-div">
          <p className="içerikler-başlık">İÇERİKLER</p>
          {this.state.title.map((item, i) => (
            <div key={i} className="yazı">
              <Link className="ka" to={'/add_content/' + item.id}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className='cont'>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {this.state.içerik.title}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {this.state.içerik.text}
                <br/>
                <label>Id: {this.state.içerik.id}</label>
              </div>
            </div>
            <footer class="card-footer">
              <a href="" className="card-footer-item">KAYDET</a>
              <a href="" className="card-footer-item">DÜZENLE</a>
              <a href="" className="card-footer-item">SİL</a>
            </footer>
          </div>
        </div>*/}
      </div>
    );
  }
};

export default AddContent;