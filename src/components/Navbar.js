import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <Link to="/"><h2>FleetMED</h2></Link>
        <Link to="/profile">Profile Page</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
    )
  }
}

export default Navbar
