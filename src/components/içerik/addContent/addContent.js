import React from 'react';
import {Link} from 'react-router-dom';
import './addContent.css';
import firebase from '../../firebase/firebase';
import _ from 'lodash';


class AddContent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      title: [],
      içerik: '',
      url: '',
      düzenleTitle: '',
      düzenleText: '',
      oluşturText: '',
      oluşturTitle: '',
      içerikSayısı: 0,
      key: '',
    }}

  componentWillMount = () => {
    firebase
    .database()
    .ref('kategoriler')
    .on('value', snapshot => {
      this.setState({title: _.values(snapshot.val()) });
      this.setState({url:this.props.match.params.id})
      //this.setState({ içerikSayısı: _.values(snapshot.val()).reverse()[0].id});
      })
  };
  componentWillReceiveProps(nextProps){
       firebase
      .database()
      .ref('kategoriler/'+nextProps.match.params.contentId)
      .once('value', snapshot => {
          this.setState({ içerik: snapshot.val() });
          console.log(this.state.içerik)
        });
     //call your api and update state with new props
  }
  başlıkUpdate = () => {
    firebase
    .database()
    .ref('kategoriler/'+this.props.match.params.id)
    .update({
      title: this.state.düzenleTitle
    })
  }
  içerikUpdate = () => {
    firebase
    .database()
    .ref('kategoriler/'+this.props.match.params.id)
    .update({
      text: this.state.düzenleText
    })
  }
  içerikCreate = () => {
    const ref = firebase.database().ref('kategoriler').push()
    const newItem = {
     key: ref.key,
     title:this.state.oluşturTitle,
     text: this.state.oluşturText,
     id: this.state.içerikSayısı+1
    }
    ref.set(newItem);

  }
  render() {
    return (
      <div className='f-screen'>
        <div className="içerikler-div">
          <p className="içerikler-başlık">İÇERİKLER</p>
          {this.state.title.map((item, i) => (
            <div key={i} className="yazı">
              <Link className="ka" to={'/add_content/' + item.key}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className='cont'>
                        {/* ===================================================
                          ************ İÇERİK DÜZENLEME BÖLÜMÜ **************
                        =====================================================*/}
          <div className="card ilk-card">
              <h3>İÇERİK DÜZENLE</h3>
              <p className="card-header-title">
                <label>başlık : </label>
                <input 
                      style={{width:'400px'}} 
                      placeholder={this.state.içerik.title}
                      onChange={event => {
                        const düzenleTitle = event.target.value;
                        this.setState({ düzenleTitle });
                      }}
                      >
                </input>
                      <button className='düzenle-başlık' onClick={this.başlıkUpdate}>Save</button>
              </p>
                <label>içerik : </label>
                <textarea 
                        placeholder={this.state.içerik.text}
                        onChange={event => {
                          const düzenleText = event.target.value;
                          this.setState({ düzenleText });
                        }}
                        >
                </textarea>
                <button className='düzenle-içerik' onClick={this.içerikUpdate}>Save</button>
              <br/>
                <label>id : </label>{this.state.içerik.id}
            </div>

                        {/* ===================================================
                          ************ YENİ İÇERİK EKLEME BÖLÜMÜ *************
                        =====================================================*/}

          <div className="card">
              <h3>YENİ İÇERİK EKLE</h3>
              <p className="card-header-title">
                <label>başlık : </label>
                <input 
                      style={{width:'400px'}} 
                      onChange={event => {
                        const oluşturTitle = event.target.value;
                        this.setState({ oluşturTitle });
                      }}
                      >
                </input>
              </p>
                <label>içerik : </label>
                <textarea 
                        onChange={event => {
                        const oluşturText = event.target.value;
                        this.setState({ oluşturText });
                        }} 
                        >
                </textarea> 
                <button className='oluştur-button' onClick={this.içerikCreate}>Create</button>
              <br/>
            </div>
         </div>
        </div>
    );
  }
};

export default AddContent;