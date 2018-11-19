import React, { Component } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
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
                {this.state.currentPage === "login" ? (
                    <Login />
                ) : (
                        this.state.currentPage === "signup" ? (
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