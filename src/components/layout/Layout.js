// Layout is our highest level container just below App
// Layout will map the state of user.SignedIn to props
// 1. check for token 2. if token present, validate token. if token is not present 3. if token is valid set signedIn to true
// user.SignedIn is only utilized to trigger Sessions.New component

import React from 'react'
import { connect } from 'react-redux'
import NewSession from '../sessions/New'
import SignedIn from './SignedIn'
import { withRouter, Redirect } from 'react-router-dom'
import store from '../../redux/store'

class Layout extends React.Component {

  render() {

      if (this.props.signedIn) {
        return <SignedIn />
      } else {
        return null
      }

  }
}

export default Layout
