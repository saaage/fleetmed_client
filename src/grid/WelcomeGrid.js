import styled from 'styled-components'

const WelcomeGrid = styled.div`
  display: grid;
  grid-template-areas:
    ". logo ."
    ". form ."
    ". signup .";
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: 1fr 2fr 1fr;
  height: 100vh;
`

export default WelcomeGrid
