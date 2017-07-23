import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Comps from 'index'
import Centered from 'flexbox/CenteredContainer'

const Routes = (props) => {
  if (props.signedIn) {
    return (
        <Switch>
            <Route path="/reviews" component={Comps.Reviews} />
            <Route path="/dashboard" component={Comps.Dashboard} />
            <Route path="/signout" component={Comps.Sessions.Destroy} />
            <Route path="/confirm" component={Comps.Registration.ConfirmEmail} />
            <Redirect exact from="/signup" to="/profile" />
        </Switch>
    )
  } else if (props.signedIn === false) {
    // If not signed in provide signIn route and redirect
    return (
      <Switch>
          <Route path="/signin" component={Comps.Sessions.New} />
          <Route path="/signup" component={Comps.Registration.NewProvider} />
          <Redirect from="/" to="/signin" />
      </Switch>
    )
  } else {
    return null
  }
}

export default Routes
