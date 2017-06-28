import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Profile from './Profile'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div>
          <Route path="/profile" component={Profile}/>
        </div>
      </div>
    )
  }
}

export default App
