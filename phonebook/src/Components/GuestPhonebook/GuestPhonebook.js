import React, { Component } from "react";
import GuestList from "../GuestList/GuestList";

class GuestPhoneBook extends Component {
  render() {
    return (
      <div className="GuestPhoneBook">
        <br></br>
        <GuestList />
      </div>
    );
  }
}

export default GuestPhoneBook;
