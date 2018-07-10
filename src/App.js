import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Input from './Components/Input/Input';
import Answer from './Components/Answer/Answer';
import RightBar from './Components/RightBar/RightBar';
import LeftBar from './Components/LeftBar/LeftBar'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'login'
        };}

    routeHome= () => {
            this.setState({route:'home'});
    }
    routeRegister= () => {
            this.setState({route:'register'});
    }
    routeLogin = () => {
            this.setState({route:'login'})
    }


        render(){
            return (<div>
                    <Helmet>
                        <meta charSet="utf-8"/>
                        <title>PLANT.CAMP</title>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                              integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                              crossorigin="anonymous"/>
                        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
                    </Helmet>
                    {
                        (this.state.route === 'home')
                            ?<div>
                                  <Header/>
                                  <div className='container'>
                                    <Content/>
                                    <Input/>
                                  </div>
                                  <Answer/>
                                  <LeftBar/>
                                  <RightBar/>
                              </div>
                            :((this.state.route === 'login')
                            ?<Login routeChange={ this.routeHome} routeSwitch={ this.routeRegister }/>
                            :<Register routeChange={ this.routeLogin }/>)

                    }
                </div>
            );
        }
    }

export default App;
