import React, { Component } from 'react'
import './LoginForm.css';
import Context from '../Context';
import Axios from 'axios';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            status: "login correct",
            username: "",
            password: ""
        };
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        /*
        
        Check for the password is correct... mmm
        This is not the way t do this, WE ARE CHECKING THE PASSWORD
        THE PASSWORD IN THE CLIENT!!
        
        */

        Axios.get(`http://localhost:4000/users/${this.state.username}`)
            .then(response => {
                const userObj = response.data;
                if (userObj.password === this.state.password) {
                    this.context.doLogin(this.state.username);
                    this.props.history.replace("/");
                } else {
                    //TODO: Show error
                    this.setState({ status: "password is not correct", password: "" });
                }
            })
            .catch(err => {
                //TODO: Show error
                this.setState({ status: "username or password doesn't exist", password: "", username: "" });
            });


    }

    render() {
        document.title = "fakkit | login";
        let { username, password, status } = this.state;
        let errorMessage;
        if (status !== ("login error" && "login correct")) {
            errorMessage = <div className="error">{status}</div>
        }
        return (
            <div className="login">
                <form onSubmit={this.onSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.onChangeUsername} />
                    <label>Password</label>
                    <input type="password" value={password} onChange={this.onChangePassword} />
                    <button type="submit">Login</button>
                </form>
                {errorMessage}
            </div>
        );
    }
}
LoginForm.contextType = Context;