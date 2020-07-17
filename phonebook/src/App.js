import React, { Component } from "react";
import GuestPhonebook from "./Components/GuestPhonebook/GuestPhonebook";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuestPhonebook />
      </div>
    );
  }
}

export default App;
