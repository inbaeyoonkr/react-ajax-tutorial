import React, { Component } from "react";
import { Header } from "./components/index.js";
import { PostContainer } from "./containers/index.js";
import "./App.css";
import "./Animation.css";
import Axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostContainer />
      </div>
    );
  }
}
export default App;
