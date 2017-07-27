// navbar will render differently based on the value of role(prop)

import React from 'react'
import StyledNavLink from 'core/navbar/styled/StyledNavLink'
import NavList from 'core/navbar/styled/NavList'

const Navbar = props => {

  if(props.signedIn)
    return (
      <nav className={props.className}>
        <NavList>
          <li><StyledNavLink to="/dashboard">Dashboard</StyledNavLink></li>
          <li><StyledNavLink exact to="/home">FleetMED</StyledNavLink></li>
          <li><StyledNavLink to="/signout">Account</StyledNavLink></li>
        </NavList>
      </nav>
    )
  else if(!props.signedIn)
    return null
}

Navbar.defaultProps = {
  signedIn: false
}

export default Navbar
