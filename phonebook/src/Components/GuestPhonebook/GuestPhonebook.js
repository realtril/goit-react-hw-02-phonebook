import React, { Component } from "react";
import GuestListDataContainer from "../GuestListDataContainer/GuestListDataContainer";

class GuestPhoneBook extends Component {
  render() {
    return (
      <div className="GuestPhoneBook">
        <GuestListDataContainer />
      </div>
    );
  }
}

export default GuestPhoneBook;
