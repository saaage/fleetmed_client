// Occupies an open component lot and adds styles to elements inside
import styled from 'styled-components'

const FormStyler = styled.div`

  border-radius: 5px;
  display: flex;
  grid-column-start: 2;
  grid-row: 2;
  justify-content: center;

  form {
    align-self: center;
    background-color: #FAFAFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    width: 100%;
    padding: none;
  }

  input {
    display: inline-block;
    font-size: 16px;
    height: 44px;
    width: 342px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: .5em;
    outline: 0 none;
  }

  button {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: none;
  }
`
export default FormStyler
