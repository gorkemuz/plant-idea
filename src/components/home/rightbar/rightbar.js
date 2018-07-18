import React, { Component } from "react";
import "./rightbar.css";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
    };
  }

  componentWillMount = () => {
    firebase
      .database()
      .ref("kategoriler")
      .on("value", snapshot => {
        console.log(snapshot.val());
        this.setState({ title: snapshot.val() });
      });
  };

  render() {
    return (
      <div className="Kategoriler">
        <p className="kategori-title">İçerikler</p>
        {this.state.title.map((item, i) => (
          <div key={i} className="kategori">
            <Link className="ka" to={"/home/" + item.id}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default RightBar;
