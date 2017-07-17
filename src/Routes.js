// Routes holds our route tree and will be rendered by App.js

import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Comps from './components'

const Routes = (props) => {
  // If a user is signed in, provide routes for our application
  if (props.signedIn) {
    return (
      <div className={props.className}>
        <Route path="/reviews" component={Comps.Reviews}/>
        <Route path="/profile" component={Comps.Profile}/>
        <Route path="/signout" component={Comps.Sessions.Destroy} />
      </div>
    )
  } else if (props.signedIn == false) {
    // If not signed in provide signIn route and redirect
      return (
        <Switch>
          <Route path='/signin' component={Comps.Sessions.New}/>
          <Redirect from='/' to='/signin'/>
        </Switch>
      )
  } else {
      return null
  }
}

const styledRoutes = styled(Routes)`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
`

export default styledRoutes
