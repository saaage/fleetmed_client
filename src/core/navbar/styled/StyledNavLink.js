import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#ecf0f1',
    fontSize: '1.1rem'
  }
})`
  color: #7f8c8d;
  font-weight: 500;
  font-family: 'Open Sans';
  font-size: '1rem';
`

export default StyledNavLink
