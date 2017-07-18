import React from 'react'
import { connect } from 'react-redux'

import Button from 'core/styled/Button'
import FormStyler from 'core/styled/FormStyler'
import Span from 'core/styled/Span'
import StaticLot from 'core/styled/StaticLot'
import StyledLink from 'core/styled/StyledLink'

@connect(() => ({}))
class NewProvider extends React.Component {
  render() {
    return (
      <StaticLot>
        <FormStyler>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Password Confirmation" />
            <Button>Sign Up</Button>
          </form>
        </FormStyler>
        <Span>Already a user?</Span>
        <StyledLink to="/signin">Log In</StyledLink>
      </StaticLot>
    )
  }
}

export default NewProvider
