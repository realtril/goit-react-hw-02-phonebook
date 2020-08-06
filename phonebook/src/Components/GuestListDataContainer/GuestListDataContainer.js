import React, { Component } from "react";
import GuestList from "../GuestList/GuestList";
import { connect } from "react-redux";
import actions from "../../actions/actions";

class GuestListDataContainer extends Component {
  render() {
    return (
      <GuestList
        data={this.props.contacts}
        onAdd={this.props.onAdd}
        onDelete={this.props.onDelete}
        search={this.props.search}
        onSearch={this.props.onSearch}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { filter: search } = state.contacts;
  return {
    contacts: state.contacts.items.filter(
      (person) => person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    ),
    search: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onAdd: actions.onAdd,
  onSearch: actions.onSearch,
  onDelete: actions.onDelete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestListDataContainer);
