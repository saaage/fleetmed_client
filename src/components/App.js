// App renders the strcutural components of our application as well as Routes

import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './structural/Navbar'

import Routes from '../Routes'

require("!style-loader!css-loader!sass-loader!../sass/all.scss")

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Routes/>
      </div>
    )
  }
}

export default App
