import logo from "./logo.svg";
import "./App.css";

import ListContacts from './Pages/ListContacts';

import React, { Component } from 'react'

export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
       contacts : [
        {
          "id": "karen",
          "name": "Karen Isgrigg",
          "handle": "@karen_isgrigg",
          "avatarURL": "http://localhost:5001/karen.jpg"
        },
        {
          "id": "richard",
          "name": "Richard Kalehoff",
          "handle": "@richardkalehoff",
          "avatarURL": "http://localhost:5001/richard.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "handle": "@tylermcginnis",
          "avatarURL": "http://localhost:5001/tyler.jpg"
        }
       ]
    }
    
  }
  remove = (contact)=>{
    this.setState((currentState)=>({
      contacts : currentState.contacts.filter((item) => {
        return item.id !== contact.id;
      })
    }))
  }
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} removeContacts={this.remove}/>
      </div>
    )
  }
}



