// App renders the strcutural components of our application as well as Routes
// If there is not a current user, App will render Sign In page

import React from 'react'
import { Route } from 'react-router-dom'
import NavContainer from './navbar/NavContainer'

import Routes from '../Routes'

class App extends React.Component {

  render() {
    return (
      <div>
        <NavContainer />
        <Routes />
      </div>
    )
  }
}

export default App
