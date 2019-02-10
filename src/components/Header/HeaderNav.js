import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
                <NavLink style={{color: `${linkColor}`}} href="/">(850) 764-3189</NavLink>
            </NavItem>
          <NavbarBrand href="/"><img style={{width:`${logoSize}`}} src={logo} alt={altImage}/></NavbarBrand>
            <NavItem className="hideInMobile">
                <NavLink style={{color: `${linkColor}`}} href="/">Drop us a line!</NavLink>
            </NavItem>
        </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={collapsed.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink style={{color: `${linkColor}`}} href="/">blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href="/">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href="/">get in touch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href="/">portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href="/">contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default HeaderNav;