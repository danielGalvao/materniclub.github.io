import React, { Component } from 'react';
import logo from './logo.jpg';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
