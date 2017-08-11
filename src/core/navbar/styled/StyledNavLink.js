import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#4E5884'
  }
})`
  color: #4E5884;
  font-weight: 500;
  font-family: 'Open Sans';
`

export default StyledNavLink
