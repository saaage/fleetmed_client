import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { checkAPISession } from 'redux/actions/userActions'
import Routes from 'routes'
import globalStyles from 'core/styled/global'
import Navbar from 'core/navbar/styled/Navbar'


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
        <Navbar signedIn={signedIn} />
        <Routes signedIn={signedIn} />
      </div>
    )
  }
}

export default App
