import React, {Component} from "react";
import API from "../../utils/API"
import Auth from "../../modules/auth"

class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.email || !this.state.password) {
            alert("Please Fill Out All Fields.")
        } else {
            API.checkUser({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    Auth.authenticateUser(res.data.token)
                    this.setState({
                        email: "",
                        passowrd: "",
                    })
                })
                .catch(err => console.log(err))
        };
    };

    render() {
        return (
            <form>
                <p>Email: {this.state.email}</p>
                <p>Password: {this.state.password}</p>
                <input 
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
                type="email"
                placeholder="Email"
                />
                <input 
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
                type="password"
                placeholder="Password"
                />
                <button onClick={this.handleFormSubmit}>Login</button>
            </form>
        )
    }
}

export default Login

