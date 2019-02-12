import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './../../pages/Home/Home';
import About from './../../pages/About';
import Portfolilo from './../../pages/Portfolio';
import Contact from './../../pages/Contact';
import { Nav, NavItem } from 'reactstrap';

const FooterNav = () => {
    return (
        <Nav className="footer-nav">
        <NavItem>
            <NavLink to="/"  component={Home}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/about"  component={About}>About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/portfolio"  component={Portfolilo}>Portfolilo</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/contact"  component={Contact}>Contact</NavLink>
        </NavItem>
        </Nav>
    );
}
export default FooterNav;