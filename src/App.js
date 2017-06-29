import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Reviews from './components/containers/Reviews'

require("!style-loader!css-loader!sass-loader!./sass/all.scss")

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div>
          <Route path="/profile" component={Profile}/>
          <Route path="/reviews" component={Reviews}/>
        </div>
      </div>
    )
  }
}

export default App
