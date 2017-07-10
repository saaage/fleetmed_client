import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import globalStyles from './styled/global'
import Layout from './layout/Layout'
import Routes from '../Routes'

@withRouter
@connect((store) => {
  return {}
})
class App extends React.Component {

  constructor(props) {
    super(props)
  }

  tokenPresent() {
    const token = localStorage.getItem('token')
    if (token == undefined){
      return false
    } else
      return token.null ? false : true
  }

  render() {
    let token = this.tokenPresent()

    return (
      <div>
        <globalStyles />
        <Layout token={token}/>
        <Routes signedIn={token}/>
      </div>
    )
  }

}

export default App
