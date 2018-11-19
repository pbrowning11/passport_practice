import React from "react";
import Auth from "../modules/auth";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <button
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => props.handlePageChange("Signup")}
        className={
          props.currentPage === "Signup" ? "nav-link active" : "nav-link"
        }
      >
        Sign Up
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => props.handlePageChange("Login")}
        className={
          props.currentPage === "Login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </button>
    </li>
    <li className="nav-item">
      <button
        onClick={() => Auth.deauthenticateUser()}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Logout
      </button>
    </li>
  </ul>
);

export default NavTabs;