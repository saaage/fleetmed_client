import React from 'react'
import SignedIn from './SignedIn'

const Layout = props => (
  props.signedIn ? <SignedIn /> : null
)

export default Layout
