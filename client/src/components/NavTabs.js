import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
    <ul>
        <li>
            <Link 
            to="/"
            className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            >
            Home
            </Link>
        </li>
        <li>
            <Link 
            to="/signup"
            className={
                window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
            }
            >
            Sign Up
            </Link>
        </li>
        <li>
            <Link 
            to="/login"
            className={
                window.location.pathname === "/login" ? "nav-link active" : "nav-link"
            }
            >
            Login
            </Link>
        </li>
        <li>
            <Link 
            to="/logout"
            className={
                window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
            }
            >
            Logout
            </Link>
        </li>
    </ul>
);

export default NavTabs;
