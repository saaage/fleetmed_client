// Allows user to initiate a new session
import React from 'react'
import { connect } from 'react-redux'
import { userSignIn } from 'redux/actions/userActions'
import WelcomeGrid from 'grid/WelcomeGrid'
import FormStyler from 'core/styled/FormStyler'
import Button from 'core/styled/Button'
import StyledLink from 'core/styled/StyledLink'
import { LargeLogo } from 'core/styled/Logo'

@connect(() => ({}))
class New extends React.Component {
  constructor(props) {
    super(props)
    this.signIn = this.signIn.bind(this)
    this.successCallBack = this.successCallBack.bind(this)
  }

  signIn(e) {
    e.preventDefault()
    const email = this.email.value
    const password = this.password.value
    const successCallBack = this.successCallBack
    this.props.dispatch(userSignIn(email, password, successCallBack))
  }

  successCallBack() {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <WelcomeGrid>
        <LargeLogo />
        <FormStyler>
          <form>
            <input ref={(node) => { this.email = node }} type="email" placeholder="Email" />
            <input ref={(node) => { this.password = node }} type="password" placeholder="Password" />
            <Button primary onClick={this.signIn}>Login</Button>
            <StyledLink to="/signup">Sign Up For FleetMED</StyledLink>
          </form>
        </FormStyler>
      </WelcomeGrid>
    )
  }
}

export default New
