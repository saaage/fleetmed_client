// navbar will render differently based on the value of role(prop)

import React from 'react'
import styled from 'styled-components'
import StyledNavLink from './StyledNavLink'

const Navbar = props => (

  <nav className={props.className}>
    <ul>
      <li><StyledNavLink to="/profile">Profile Page</StyledNavLink></li>
      <li><StyledNavLink exact to="/home">FleetMED</StyledNavLink></li>
      <li><StyledNavLink to="/reviews">Reviews</StyledNavLink></li>
      <li><StyledNavLink to="/signout">Sign Out</StyledNavLink></li>
    </ul>
  </nav>

)

const styledNavbar = styled(Navbar)`
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;

  ul {
      list-style-type: none;
      margin: 0;
      overflow: hidden;
      padding: 0;
  }

  li {
      float: left;
  }

  li a {
      display: block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
      background-color: #111;
  }
`
export default styledNavbar
