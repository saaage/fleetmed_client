import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { confirmEmail } from 'redux/actions/registrationActions'
import queryString from 'query-string'

@withRouter
@connect(() => ({}))
class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props)
    this.submitConfirmation = this.submitConfirmation.bind(this)
  }

  componentDidMount() {
    this.submitConfirmation()
  }

  // Issue a post request to API with token from URL params
  submitConfirmation() {
    const confirmationToken = queryString.parse(this.props.location.search)
    this.props.dispatch(confirmEmail(confirmationToken))
  }

  render() {
    return <Redirect to="/profile" />
  }
}

export default ConfirmEmail
