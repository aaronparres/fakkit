import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import Context from '../Context';

export default class Header extends Component {

  onLoginLogout = (e) => {
    e.preventDefault(); //Prevent reload from <a> element
    if (this.context.user) {
      this.context.doLogin(null);
    } else {
      this.context.doLogin("Chico Malo");
    }
  }

  render() {
    return (
      <div className="header">
        <div className="left">
          <span className="logo">fakkit</span>
          <Link to="/new">new</Link>
        </div>
        <div className="right">
          <span className="username">{this.context.user}</span>
          <a href="." onClick={this.onLoginLogout}>
            {this.context.user ? "logout" : "login"}
          </a>
        </div>
      </div>
    )
  }
}
Header.contextType = Context;