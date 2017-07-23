import { injectGlobal } from 'styled-components'

const global = injectGlobal`

  body {
    margin: 0px;
    margin-top: 1px;
  }

  #root [data-reactroot] {
    height: 100vh;
    position: relative;
  }
`

export default global
