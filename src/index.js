import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.css";
import registerServiceWorker from "./utils/registerServiceWorker";
import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
