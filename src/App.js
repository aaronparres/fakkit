import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LinkList from './components/LinkList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LinkList />
      </div>
    );
  }
}

export default App;
