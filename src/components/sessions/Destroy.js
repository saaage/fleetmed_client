// Smart component that does not render a view, but destroys session and redirects
// Contains logic for destroying current_user sessions
import React from 'react'
import { userSignOut } from '../../redux/actions/userActions'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

@withRouter
@connect((store)=>{return{}})
class Logout extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.destroySession()
  }

  destroySession(){
    let email = localStorage.getItem('email')
    let token = localStorage.getItem('token')
    this.props.dispatch(userSignOut(email, token))
  }

  render() {
    return <Redirect to="/" />
  }

}

export default Logout
