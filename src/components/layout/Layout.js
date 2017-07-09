// Layout is our highest level container just below App
// Layout will map the state of user.SignedIn to props
// 1. check for token 2. if token present, validate token. if token is not present 3. if token is valid set signedIn to true
// user.SignedIn is only utilized to trigger Sessions.New component

import React from 'react'
import { connect } from 'react-redux'
import NewSession from '../sessions/New'
import SignedIn from './SignedIn'

import { changeUserState } from '../../redux/actions/userActions.js'


@connect((store) => {
  return { signedIn: store.users.user.signedIn }
})
class Layout extends React.Component {

  componentWillMount() {
    if (this.tokenPresent()){
      this.props.dispatch(changeUserState())
    } else {
      console.log('no token')
    }
  }

  tokenPresent() {
    const token = localStorage.getItem('token')
    if (token == undefined){
      return false
    } else
      return token.null ? false : true
  }

  render() {
      if (this.props.SignedIn) {
        return <SignedIn />
      }
      return <NewSession />
  }
}

export default Layout
