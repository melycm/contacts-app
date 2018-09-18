import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h2>Add Contact </h2>
        <Form />
        <h2 style={{marginTop: '70px'}}> Contact List </h2>
      </div>
    );
  }
}

export default App;
