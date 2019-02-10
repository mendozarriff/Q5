import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const  HeaderNav = ({homeText, aboutText, aboutLink, logo, altImage, logoSize, backgroundColor, linkColor}) => {

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
          <NavbarBrand href="/"><img style={{width:`${logoSize}`}} src={logo} alt={altImage}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={collapsed.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color: `${linkColor}`}} href="/">{homeText}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={aboutLink}>{aboutText}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default HeaderNav;