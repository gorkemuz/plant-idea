import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

import Login from "./login/login";
import Register from "./register/register";
import Home from "./home/home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Titles: [
                "İçinde yaşadığımız evren gerçek mi?",
                "Özgür irademiz var mı?",
                "Neden hiçlik yerine bir şeyler var?",
                "Rakamlar tam olarak nedir?",
            ],
        };
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/home" render={() => <Home titles={this.state.Titles} />} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
