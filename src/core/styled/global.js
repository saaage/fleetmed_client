import { injectGlobal } from 'styled-components'

const global = injectGlobal`

  body {
    margin: 0px;
    margin-top: 1px;
  }

  #root [data-reactroot] {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`

export default global
