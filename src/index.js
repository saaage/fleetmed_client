import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>,
  document.getElementById('root')
)
