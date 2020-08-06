import React from "react";

const Guest = ({ user, onDelete }) => {
  return (
    <div className="contact">
      <h2 className="contactName">{user.name}</h2>
      <p>{user.number}</p>
      <button id={user.id} className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Guest;
