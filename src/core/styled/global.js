import { injectGlobal } from 'styled-components'

const global = injectGlobal`

  body {
    margin: 0px;
    margin-top: 1px;
  }

${''/* Any items rendered inside of App will be in centered along X and Y */}
  #root [data-reactroot] {
    align-items: center;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`

export default global