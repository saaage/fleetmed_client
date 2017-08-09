import { injectGlobal } from 'styled-components'

const global = injectGlobal`

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0px;
    background-color: #34495E;
    font-size: 1.4rem;
  }

  #root [data-reactroot] {
    height: 100vh;
    position: relative;
  }
`

export default global
