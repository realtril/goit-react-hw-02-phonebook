import React, { Component } from "react";
import GuestPhonebook from "./Components/GuestPhonebook/GuestPhonebook";
import "./App.css";
import AlertMessage from "./Components/Notifications/AlertMessage";

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
