// Routes holds our route tree and will be rendered by App.js

import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Comps from './components'

const Routes = (props) =>

  <div className={props.className}>
    <Route path="/signin" component={Comps.Sessions.New}/>
    <Route path="/reviews" component={Comps.Reviews}/>
    <Route path="/profile" component={Comps.Profile}/>
  </div>

const styledRoutes = styled(Routes)`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
`

export default styledRoutes
