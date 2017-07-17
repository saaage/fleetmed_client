import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import globalStyles from './styled/global'
import Layout from './layout/Layout'
import Routes from '../Routes'
import { checkAPISession } from '../redux/actions/userActions'

@withRouter
@connect(store => (
  {
    user: store.users.user
  }
))
class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(checkAPISession())
  }

  render() {
    const { signedIn } = this.props.user

    return (
      <div>
        <globalStyles />
        <Layout signedIn={signedIn} />
        <Routes signedIn={signedIn} />
      </div>
    )
  }
}

export default App
