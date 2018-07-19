import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

import Login from "./login/login";
import Register from "./register/register";
import Home from "./home/home";
import Filozof from './menu/filozof';

const App = () => {
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
