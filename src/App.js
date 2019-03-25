import React, { Component } from "react";
import "./App.css";
import { getTodayFoods } from "./api/apiFunctions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.testing = this.testing.bind(this);
  }

  testing() {
    console.log("testing");
  }

  render() {
    return (
      <div className="App">
        <button onClick={getTodayFoods}>Hit API</button>
        <button onClick={this.testing}>Testing</button>
      </div>
    );
  }
}

export default App;
