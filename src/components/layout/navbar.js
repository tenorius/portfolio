import React from 'react'
import './navbar.css'
import Menu from './menu'
import Logo from './logo'
import Nav from './nav'
const Navbar = () => (
    <div className="navbar">
        <Logo/>
        <Nav/>
        <Menu/>
    </div>
);

export default Navbar;