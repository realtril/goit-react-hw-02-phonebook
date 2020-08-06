import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Guest from "../Guest";
import AddGuest from "../AddGuest";
import "../Notifications/AlertAnimation.css";

// components/GuestList
const GuestList = ({ onAdd, search, onSearch, onDelete, data }) => (
  <div className="phoneBookList">
    <AddGuest data={data} onAdd={onAdd} />
    <div className="Guest">
      <input
        type="text"
        value={search}
        onChange={onSearch}
        className="filter"
        placeholder="Find contact by name"
      />
      <TransitionGroup className="Guests">
        {data.map((user) => (
          <CSSTransition
            key={user.id}
            timeout={250}
            classNames="Guests-item-fade"
            unmountOnExit
          >
            <Guest user={user} onDelete={onDelete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  </div>
);

// GuestList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onAdd: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onSearch: PropTypes.func.isRequired,
//   search: PropTypes.string.isRequired,
// };

export default GuestList;
