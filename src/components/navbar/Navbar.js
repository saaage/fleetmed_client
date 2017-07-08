// navbar will render differently based on the value of role(prop)

import React from 'react'
import styled from 'styled-components'
import StyledLink from '../styled/StyledLink'

const Navbar = (props) =>

  <nav className={props.className}>
      <ul>
        <li><StyledLink to="/profile">Profile Page</StyledLink></li>
        <li><StyledLink to="/">FleetMED</StyledLink></li>
        <li><StyledLink to="/reviews">Reviews</StyledLink></li>
      </ul>
  </nav>

const styledNavbar = styled(Navbar)`

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
