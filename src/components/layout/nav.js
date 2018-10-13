import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => (
    <nav className="nav">
        <Link to="/home">
            <i className="material-icons">
                home
            </i>
        </Link>
        <Link to="/about">
            <i className="material-icons">
                person
            </i>
        </Link>
        <Link to="">
            <i className="material-icons">
                settings
            </i>
        </Link>
        <Link to="">
            <i className="material-icons">
                album
            </i>
        </Link>
        <Link to="">
            <i className="material-icons">
                email
            </i>
        </Link>
    </nav>
);

export default Nav;