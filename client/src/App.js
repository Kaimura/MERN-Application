import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ReceiptList from './components/ReceiptList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ReceiptList>

        </ReceiptList>
      </div>
    );
  }
}

export default App;
