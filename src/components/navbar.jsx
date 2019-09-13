import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand mb-0 h1" href = "#"> Navbar
            <span className= "badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
        </nav>
     );
}

export default Navbar;