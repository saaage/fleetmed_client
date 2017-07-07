import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: 500;
  font-family: ${props => props.to=="/" ? 'Alegreya Sans SC' : 'Open Sans'};
  font-size: ${props => props.to=="/" ? '20px' : '16px'};
`

export default StyledLink
