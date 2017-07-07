import { Link } from 'react-router-dom'
import styled from 'styled-components'



const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  font-family: ${props => props.to=="/" ? 'Alegreya Sans SC' : 'Open Sans'};
  font-size: ${props => props.to=="/" ? '18px' : '14px'};
`

export default StyledLink
