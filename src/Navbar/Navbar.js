import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"
import About from '../Common/About';
import Home from '../Common/Home';

const Navbar = () => {
    return <div>

        <nav className="abc navbar navbar-expand-lg navbar-dark ">
            <a className="navbar-brand" href="#"><h4>ROOM FINDER</h4></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About Us </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/signup">Register</Link>
                    </li>
                
                </ul>
               
            </div>
        </nav>

    </div>;
};

export default Navbar;
