import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <h2>FleetMED</h2>
        <Link to="/profile">Profile Page</Link>
      </nav>
    )
  }
}

export default Navbar
