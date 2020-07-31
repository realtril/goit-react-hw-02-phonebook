import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertMessage from "../Notifications/AlertMessage";
import "../Notifications/AlertAnimation.css";

class GuestList extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onDeleteGuest = (event) => {
    const id = event.target.id;
    const { contacts: contactList } = this.state;
    const contacts = contactList.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  };

  onAddPerson = (personData) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, personData],
    }));
  };

  isNameExist(name) {
    const result = this.state.contacts.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (result) {
      return false;
    } else {
      return true;
    }
  }

  onchange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.state.contacts.filter((person) => {
      return person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });

    return (
      <div className="phoneBookList">
        <AddGuest
          onAddPerson={this.onAddPerson}
          isNameExist={this.isNameExist}
          state={this.state}
        />
        <div className="Guest">
          <input
            type="text"
            value={this.state.filter}
            onChange={this.onchange}
            className="filter"
            placeholder="Find contact by name"
          />
          <TransitionGroup className="Guests">
            {filteredContacts.map((user, index) => {
              return (
                <CSSTransition
                  key={uuidv4()}
                  timeout={250}
                  classNames="Guests-item-fade"
                  unmountOnExit
                >
                  <Guest
                    user={user}
                    key={uuidv4()}
                    onDeleteGuest={this.onDeleteGuest}
                    index={index}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

const Guest = (props) => {
  return (
    <div className="contact">
      <h2 className="contactName">{props.user.name}</h2>
      <p>{props.user.number}</p>
      <button
        id={props.user.id}
        className="delete"
        onClick={props.onDeleteGuest}
      >
        Delete
      </button>
    </div>
  );
};

// Guest.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string,
//     id: PropTypes.string,
//     namber: PropTypes.string,
//   }).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

class AddGuest extends Component {
  state = {
    name: "",
    number: "",
    alertOn: false,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  postNum = () => {
    if (this.props.isNameExist(this.state.name)) {
      this.props.onAddPerson(this.state);
      this.setState({ name: "", number: "" });
    } else {
      this.setState({ alertOn: true });
      // alert(`${this.state.name} already exists`);
    }
  };

  clearAlert = () => {
    this.setState({ alertOn: false });
  };

  render() {
    return (
      <>
        <div className="phoneBookApp">
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="logo-slideIn"
            unmountOnExit
          >
            <h1 className="logo">
              <span role="img" aria-label="cool">
                😎
              </span>
              Phonebook
              <span role="img" aria-label="cool">
                😎
              </span>
            </h1>
          </CSSTransition>
          <div className="addContactForm">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputHandler}
              placeholder="Name"
            />
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.inputHandler}
              placeholder="Number"
            />
            <button className="addGuest" onClick={this.postNum}>
              Add Guest
            </button>
            <CSSTransition
              in={this.state.alertOn}
              timeout={300}
              classNames="wrapper"
              unmountOnExit
            >
              <AlertMessage
                name={this.state.name}
                clearAlert={this.clearAlert}
              />
            </CSSTransition>
          </div>
        </div>
      </>
    );
  }
}

export default GuestList;
