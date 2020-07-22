import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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
      <div className="GuestList">
        <AddGuest
          onAddPerson={this.onAddPerson}
          isNameExist={this.isNameExist}
          state={this.state}
        />
        <br />
        <div className="Guest">
          <h2>Find contact by name</h2>
          <input
            type="text"
            value={this.state.filter}
            onChange={this.onchange}
          />
          <table className="foundContacts">
            <tbody>
              {filteredContacts.map((user, index) => {
                return (
                  <Guest
                    user={user}
                    key={uuidv4()}
                    onDeleteGuest={this.onDeleteGuest}
                    index={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const Guest = (props) => {
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.number}</td>
      <td>
        <button
          id={props.user.id}
          className="delete"
          onClick={props.onDeleteGuest}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

class AddGuest extends Component {
  state = {
    name: "",
    number: "",
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
      alert(`${this.state.name} already exists`);
    }
  };

  render() {
    return (
      <div>
        Name :&nbsp;
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputHandler}
        />
        <br />
        <br />
        Number :&nbsp;
        <input
          type="text"
          name="number"
          value={this.state.number}
          onChange={this.inputHandler}
        />
        <br />
        <br />
        <button className="addGuest" onClick={this.postNum}>
          Add Guest
        </button>
      </div>
    );
  }
}

export default GuestList;
