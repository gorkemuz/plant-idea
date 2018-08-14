import React from 'react';
import './filozof.css';
import firebase from '../firebase/firebase';

const Liste = () => {
  firebase.database().ref('filozoflar').push({
    
  })
  return (
    <div>
        <div className="liste">
        <p>Friedrich Nietzsche</p>
        <p>Aristotales</p>
        <p>Platon (Eflatun)</p>
        <p>Sokrates</p>
        <p>Sigmund Freud</p>
        <p>Friedrich Hegel</p>
        <p>Karl Marx</p>
        <p>Descartes</p>
        <p>Immanuel Kant</p>
        <p>John Locke</p>
        <p>Konfüçyüs</p>
        <p>Spinoza</p>
        <p>Friedrich Hegel</p>
        <p>Karl Marx</p>
      </div>
      </div>
  );
};

export default Liste;
