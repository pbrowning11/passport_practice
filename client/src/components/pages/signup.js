import React, { Component } from "react";
import API from "../../utils/API"

class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.username || !this.state.password) {
            alert("Please Fill Out All Fields")
        } else {
            API.newUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log("clear?")
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    password: ""
                });
            })
                .catch(err => console.log(err))
        };
    };

    render() {
        return (
            <form>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
                <input
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Username"
                />
                <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Passowrd"
                />
                <button onClick={this.handleFormSubmit}>Sign Up!</button>
            </form>
        );
    }
}

export default SignUp