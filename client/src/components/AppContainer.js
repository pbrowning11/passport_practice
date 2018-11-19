import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import NavTabs from "./NavTabs";

class AppContainer extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.state.currentPage === "Login" ? (
                    <Login />
                ) : (
                        this.state.currentPage === "Signup" ? (
                            <SignUp />
                        ) : (
                                <Home />
                            )
                    )}
            </div>
        )
    }
}

export default AppContainer;