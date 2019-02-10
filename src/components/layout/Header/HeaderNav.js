import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const  HeaderNav = ({ logo, altImage, logoSize, backgroundColor, linkColor}) => {

  const [collapsed, setCollapsed] = useState({
      isOpen: false
  });

  const toggle = ()=>{
    const updateCollapsed = {...collapsed};
    updateCollapsed.isOpen = !updateCollapsed.isOpen;
    setCollapsed(updateCollapsed);
  }

    return (
      <div>
        <Navbar style={{background:`${backgroundColor}`}} dark   expand="md">
        <div className="navbarDesktop">
        <NavItem className="hideInMobile">
                <p style={{color: `${linkColor}`}} href="#">(850) 764-3189</p>
            </NavItem>
          <NavbarBrand href="/"><img style={{width:`${logoSize}`}} src={logo} alt={altImage}/></NavbarBrand>
            <NavItem className="hideInMobile">
                <a style={{color: `${linkColor}`}} href="#">Drop us a line!</a>
            </NavItem>
        </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={collapsed.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink style={{color: `${linkColor}`}} to="/blog" >blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} to="/">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} to="/getInTouch">get in touch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} to="/about">about</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} to="/portfolio">portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} to="/contact">contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default HeaderNav;