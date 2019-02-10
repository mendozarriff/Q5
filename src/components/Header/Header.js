import React from 'react';
import HeaderNav from './HeaderNav';
import logo  from './../../images/q5_logo.png';
const Header = ()=>{
    return(
    <div>
        <HeaderNav homeText="Home" logo={logo} altImg="q5 logo" logoSize="53px" backgroundColor="#132F40" linkColor="#fff"/>
    </div>
    );
}

export default Header;