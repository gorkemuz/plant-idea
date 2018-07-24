import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDTWXMTrwUY1lrZsCko8kUtvdJeIX83p20',
  authDomain: 'fir-5f855.firebaseapp.com',
  databaseURL: 'https://fir-5f855.firebaseio.com',
  projectId: 'fir-5f855',
  storageBucket: 'fir-5f855.appspot.com',
  messagingSenderId: '584033179469',
};
const app = firebase.initializeApp(config);
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase;
export { app, facebookProvider };
