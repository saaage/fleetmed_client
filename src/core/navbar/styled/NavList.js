import styled from 'styled-components'

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;

  /* Change the link color to #111 (black) on hover */
  li a:hover {
      background-color: #2c3e50;
  }

  li {
    display: inline-block;
  }


    li a {
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

  li:last-child {
    float: right;
    margin-right: 22px;
  }

  text-align: center;
  width: 100%;
`

export default NavList
