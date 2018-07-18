import React, { Component } from "react";
import "./content.css";
import { firebase, hoc } from "../../firebase";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { içerik: "" };
  }

  render() {
    return (
      <p className="içerik" id="içerik">
        {this.state.içerik}
      </p>
    );
  }
}

export default hoc(function(url) {
  return firebase
    .database()
    .ref("kategoriler")
    .on("value", snapshot => {
      this.setState({ içerik: snapshot.val()[url].text });
    });
})(Content);
