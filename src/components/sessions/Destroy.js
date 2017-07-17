// Destroy does not render a view, just destroys session and redirects to '/'

import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { userSignOut } from '../../redux/actions/userActions'

@connect(() => {})
class Logout extends React.Component {
  componentWillMount = () => this.destroySession()

  destroySession = () => this.props.dispatch(userSignOut())

  render = () => <Redirect to="/" />
}

export default Logout
