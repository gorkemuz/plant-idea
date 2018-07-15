import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';


/*============================================================
                    COMPONENTS
=============================================================*/

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aciklamaListesi: [
                {
                    adres: "Nevşehir, Türkiye",
                },
                {
                    yaş: new Date().getFullYear() - 2001,
                },
                {
                    eposta: "react.developer6@gmail.com",
                },
                {
                    telefon: "0(543) 270 15 88"
                }
            ],
            Titles:['İçinde yaşadığımız evren gerçek mi?','Özgür irademiz var mı?','Neden hiçlik yerine bir şeyler var?','Rakamlar tam olarak nedir?']
        }}
        render(){
            return (
                    <BrowserRouter>
                        <div>
                            <Route exact path='/' component={Login}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/home'
                                   render={()=>
                                       <Home
                                           titles={this.state.Titles} />
                            }/>
                        </div>
                    </BrowserRouter>
            );
        }
    }

export default App;
