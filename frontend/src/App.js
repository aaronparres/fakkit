import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import LinkList from './components/LinkList';
import NewLink from './components/NewLink';
import LoginForm from './components/LoginForm';

import Context from './Context';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      doLogin: this.doLogin,      
    }
  }

  doLogin = (user) => {
    this.setState({ user });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/" exact component={LinkList} />
            <Route path="/new" component={NewLink} />
            <Route path="/login" component={LoginForm} />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
