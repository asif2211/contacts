import React, { Component } from "react";
import react from "react";
import PropsType from "prop-types";
export default class ListContacts extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }
  handleInput = (value) => {
    this.setState(() => ({
      query: value.trim(),
    }));
  };
  render() {
    const { contacts, removeContacts } = this.props;

    // console.log("Props", this.props);
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
          className="search-contacts"
            required
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={(e) => this.handleInput(e.target.value)}
          />
          {/* {JSON.stringify(this.state)} */}
        </div>
        <ol className="contact-list">
          {contacts.map((contact) => (
            <li className="contact-list-item" key={contact.id}>
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                onClick={() => removeContacts(contact)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
ListContacts.propTypes = {
  contacts: PropsType.array.isRequired,
  removeContacts: PropsType.func.isRequired,
};
