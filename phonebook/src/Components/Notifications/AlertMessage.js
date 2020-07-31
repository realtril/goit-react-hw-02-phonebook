import React from "react";
import "./AlertMessage.css";

const Notification = ({ name, clearAlert }) => {
  return (
    <div className="wrapper">
      <h2>Contact of {name} is already in the list.</h2>
      <p>Please enter the number which is not in the list.</p>
      <button onClick={clearAlert}>Close</button>
    </div>
  );
};

export default Notification;
