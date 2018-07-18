import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import fire from './firebase/firebase';

import Login from "./login/login";
import Register from "./register/register";
import Home from "./home/home";
import Filozof from './menu/filozof';
import * as firebase from 'firebase';

const App = () => {
  firebase.database().ref().set({
    kategoriler : [
      {
        id:0,
        title:"İçinde yaşadığımız evren gerçek mi?",
        text:"İçinde yaşadığımız evren gerçek mi? İçinde yaşadığımız evren gerçek mi? İçinde yaşadığımız evren gerçek mi?İ çinde yaşadığımız evren gerçek mi?",
        answer: [
          {
            text: 'Seamles quality -proof ideas through granular content. Rapidiously pontificate transparent Seamles quality -proof ideas through granular content. Rapidiously pontificate transparent Seamles quality -proof ideas through granular content. Rapidiously pontificate transparent Seamles quality -proof ideas through granular content. Rapidiously pontificate transparent Seamles quality -proof ideas through granular content. Rapidiously pontificate transparent Seamles quality -proof ideas through granular content. Rapidiously pontificate transparent systems rather.',
            id: 'rheawin',
            date: '10/08/2019'
          },
          {
            text: 'İlk postun ikinci yorumu',
            id: 'annen',
            date: '10/08/2019'
          }
        ]
      },
      {
        id:1,
        title:"Rakamlar tam olarak nedir?",
        text:"Rakamlar tam olarak nedir? Rakamlar tam olarak nedir?Rakamlar tam olarak nedir? Rakamlar tam olarak nedir? Rakamlar tam olarak nedir?",
        answer: [
          {
            text: 'İkinci postun ilk yorumu',
            id: 'rheawin',
            date: '10/08/2019'
          },
          {
            text: 'İkinci postun ikinci yorumu',
            id: 'annen',
            date: '10/08/2019'
          }
        ]
      },
      {
        id:2,
        title:"Neden hiçlik yerine bir şeyler var?",
        text:"Neden hiçlik yerine bir şeyler var? Neden hiçlik yerine bir şeyler var? Neden hiçlik yerine bir şeyler var? Neden hiçlik yerine bir şeyler var? ",
        answer: [
          {
            text: 'Üçüncü postun ilk yorumu',
            id: 'rheawin',
            date: '10/08/2019'
          },
          {
            text: 'Üçüncü postun ikinci yorumu',
            id: 'annen',
            date: '10/08/2019'
          }
        ]
      },
      {
        id:3,
        title:"Özgür irademiz var mı?",
        text:"Özgür irademiz var mı Özgür irademiz var mı Özgür irademiz var mı Özgür irademiz var mı",
        answer: [
          {
            text: 'Dördüncü postun ilk yorumu',
            id: 'rheawin',
            date: '10/08/2019'
          },
          {
            text: 'Dördüncü postun ikinci yorumu',
            id: 'annen',
            date: '10/08/2019'
          }
        ]
      },
      {
        id:4,
        title:"4444444444444444",
        text:"Özgür irademi444444444444444444444z var mı Özgür irademiz var mı Özgür irademiz var mı Özgür irademiz var mı",
        answer: [
          {
            text: 'bence şu yüzden ........',
            id: 'rheawin',
            date: '5/08/2019'
          },
          {
            text: 'yok şu yüzden ........',
            id: 'annen',
            date: '10/08/2019'
          }
        ]
      }
    ]
  });
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/filozoflar" component={Filozof} />
          <Route
            path="/home/:id"
            component={Home}
          />
        </div>
      </BrowserRouter>
    );
}

export default App;
