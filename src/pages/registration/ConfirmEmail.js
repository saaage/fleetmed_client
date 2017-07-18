import React from 'react'
import { connect } from 'react-redux'
import { checkAPISession } from 'redux/actions/userActions'

@connect(() => ({}))
class ConfirmEmail extends React.Component {

  // First, validate session
  // If validation fails, render sign in page
  // componentDidMount() {
  //   this.props.dispatch(checkAPISession())
  // }
  // Issue a post request to API with token in URL params
  submitConfirmation() {
    console.log(this.props.location.search)
  }

  render() {
    return (
      <button onClick={this.submitConfirmation}>Click me</button>
    )
  }
}

export default ConfirmEmail
