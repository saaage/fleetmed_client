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
    display: flex;
  }

  #root [data-reactroot] {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`

export default global
