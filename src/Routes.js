// Routes holds our route tree and will be rendered by App.js

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import Comps from './components'

// If props.token is false, then render Sign In page

const Routes = (props) => {

  if (props.token)
    return (
      <div className={props.className}>
        <Route path="/reviews" component={Comps.Reviews}/>
        <Route path="/profile" component={Comps.Profile}/>
      </div>
    )
    return (
      <div className={props.className}>
        <Route path="/signin" component={Comps.Sessions.New}/>
        <Redirect to='/signin'/>
      </div>
    )
}

const styledRoutes = styled(Routes)`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
`

export default styledRoutes
