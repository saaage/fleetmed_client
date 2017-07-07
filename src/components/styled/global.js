import { injectGlobal } from 'styled-components'

const global = injectGlobal`

  html {
    height: 100%;
  }

  body {
    display: flex;
    margin: 0px;
    min-height: 100%;
  }

  #root{
    flex: 1;
  }

  #root [data-reactroot] {
    height: 100%;
  }
`

export default global
