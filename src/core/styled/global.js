import { injectGlobal } from 'styled-components'

const global = injectGlobal`

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    background-color: #DCECF8;
    font-size: 16px;
  }

  #root [data-reactroot] {
    height: 100vh;
    position: relative;
  }
`

export default global
