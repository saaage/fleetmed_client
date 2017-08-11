// Occupies an open component lot and adds styles to elements inside
import styled from 'styled-components'

const FormStyler = styled.div`

  border-radius: 5px;
  display: flex;
  grid-area: form;
  justify-content: center;

  form {
    align-self: center;
    background-color: #FAFAFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
    height: 70%;
    width: 100%;
    padding: 20px 10px;
    a {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      width: 145px;
    }
  }

  input {
    display: inline-block;
    font-size: 16px;
    height: 44px;
    width: 95%;
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
