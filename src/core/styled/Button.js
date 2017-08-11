import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? '#46B9A2' : '#FAFAFF'};
  border: none;
  color: ${props => props.primary ? '#FAFAFF' : '#46B9A2'};
  font-size: 14px;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  display: block;
  width: 107px;
  height: 44px;
`

export default Button
