import React, { Component } from 'react';
import '../styles/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header id="main-header">
                <div className="container">
                    <h2><span id="main-heading">React-Redux BlogPost</span> <span id="author">by Aditya Gupta</span></h2>
                </div>
            </header>
        );
    }
}

export default Navbar;