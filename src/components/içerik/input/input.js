import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import './input.css';
import firebase from '../../firebase/firebase';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      içerik: {
        date: '10/08/80',
        id: '',
        yazı: '',
      },
      deneme: [],
    };
  }

  componentWillMount = () => {
    const a = firebase.auth().currentUser.displayName;
    const currentdate = new Date();
    let gg = currentdate.getDate()
    let aa = (currentdate.getMonth()+1)
    const yy = currentdate.getFullYear();
    gg = gg < 10 ? '0'+gg : gg;
    aa = aa < 10 ? '0'+aa : aa;


    const içerik = { ...this.state.içerik };
    içerik.id = a;
    içerik.date = gg+'/'+aa+'/'+yy;
    this.setState({ içerik });
  }

  setInput = () => {
    if(this.state.içerik.yazı === ''){
      alert('Boş cevap gönderemezsiniz!')
    }
    else{
    const ref = firebase.database().ref('kategoriler').child(this.props.url).child('answer').push();
    const newItem = {
      key: ref.key,
      yazı: this.state.içerik.yazı,
      date: this.state.içerik.date,

      id: this.state.içerik.id,
    }
    ref.set(newItem);
    console.log('tıklandı');}
  };

  render() {
    return (
      <div className="mainInput">
        <MuiThemeProvider theme={theme}>
          <TextField
            inputProps={{
              maxLength: 450,
             }}
            id="textarea mui-theme-provider-input"
            label="Ne Düsünüyorsunuz?"
            multiline
            className="Input"
            margin="normal"
            onChange={event => {
              const içerik = { ...this.state.içerik };
              içerik.yazı = event.target.value;
              this.setState({ içerik });
            }}
          />
        </MuiThemeProvider>
        <label htmlFor="outlined-button-fie">
          <Button
            variant="outlined"
            component="span"
            className="plant-button"
            onClick={this.setInput}
          >
            PLANT
          </Button>
        </label>
      </div>
    );
  }
}

export default Input;
