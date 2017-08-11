import styled from 'styled-components'

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;

  li {
    display: inline-block;
  }

  li a {
      display: block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }

  text-align: center;
`

export default NavList
