// Layout is our highest level container just below App
// Layout will map the state of user.SignedIn to props
// 1. check for token 2. if token present, validate token. if token is not
// present 3. if token is valid set signedIn to true
// user.SignedIn is only utilized to trigger Sessions.New component

import React from 'react'
import SignedIn from './SignedIn'

const Layout = () => (

  this.props.signedIn ? <SignedIn /> : null

)

export default Layout
