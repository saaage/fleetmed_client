// Routes holds our route tree and will be rendered by App.js

import React from 'react'
import { Route } from 'react-router-dom'

import Comps from './components'

const Routes = () =>

  <div>
    <Route path="/profile" component={Comps.Profile}/>
    <Route path="/reviews" component={Comps.Reviews}/>
  </div>

export default Routes
