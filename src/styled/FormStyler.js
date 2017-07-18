// Occupies an open component lot and adds styles to elements inside
import styled from 'styled-components'

const FormStyler = styled.div`

  border: 1px solid;
  border-radius: 3px;
  display: flex;
  height: 20em;
  justify-content: center;
  width: 30em;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  
  input {
    display: block;
    margin-bottom: .5em;
    font-size: 100%;
  }
`
export default FormStyler
