import React, { Component } from "react";
import react from "react";
export default class ListContacts extends Component {
  render() {
    const { contacts } = this.props;
    console.log("Props", this.props);
    return (
      <div className="contact">
        <ol className="contact-list">
          {contacts.map((contact) => (
            <li className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button className='contact-remove'>
              Remove
            </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
