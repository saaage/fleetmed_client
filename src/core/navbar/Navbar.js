// navbar will render differently based on the value of role(prop)

import React from 'react'
import StyledNavLink from './styled/StyledNavLink'

const Navbar = props => {

  if(props.signedIn)
    return (
      <nav className={props.className}>
        <ul>
          <li><StyledNavLink to="/profile">Profile Page</StyledNavLink></li>
          <li><StyledNavLink exact to="/home">FleetMED</StyledNavLink></li>
          <li><StyledNavLink to="/reviews">Reviews</StyledNavLink></li>
          <li><StyledNavLink to="/signout">Sign Out</StyledNavLink></li>
        </ul>
      </nav>
    )
  else if(!props.signedIn)
    return null
}

Navbar.defaultProps = {
  signedIn: false
}

export default Navbar
