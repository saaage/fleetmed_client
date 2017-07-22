import styled from 'styled-components'
import Navbar from '../Navbar'

const styledNavbar = styled(Navbar)`
  align-self: flex-start;
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
