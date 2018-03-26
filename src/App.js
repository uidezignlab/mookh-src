import React, { Component } from 'react';
import logo from './logo.svg';
import './fonts.css';
import './reset.css';
import './App.css';
import './Header';
import './Content';
import Header from "./Header";
import Content from "./Content";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Content />
      </div>
    );
  }
}

export default App;
