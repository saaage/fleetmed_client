// App will render different views based on the state value of signedIn

import React from 'react'

import globalStyles from './styled/global'
import Layout from './layout/Layout'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <globalStyles />
        <Layout />
      </div>
    )
  }

}

export default App
