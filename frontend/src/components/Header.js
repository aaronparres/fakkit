import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import Context from '../Context';

export default class Header extends Component {

  onLogout = (e) => {
    e.preventDefault(); //Prevent reload from <a> element
    this.context.doLogin(null);
  }

  render() {
    let newLink;
    let loginLogout;
    if (this.context.user) {
      loginLogout = <a href="." onClick={this.onLogout}>logout</a>;
      newLink = <Link to="/new">new</Link>;
    } else {
      loginLogout = <Link to="/login">login</Link>
    }

    return (
      <div className="header">
        <div className="left">
          <span className="logo">fakkit</span>
          {newLink}
        </div>
        <div className="right">
          <span className="username">{this.context.user}</span>
          {loginLogout}
        </div>
      </div>
    )
  }
}
Header.contextType = Context;