import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: 'yellow',
    fontSize: '1.1rem'
  }
})`
  color: palevioletred;
  font-weight: 500;
  font-family: 'Open Sans';
  font-size: '1rem';
`

export default StyledNavLink
