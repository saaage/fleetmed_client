import React from 'react'
import { connect } from 'react-redux'

import StaticLot from 'core/styled/StaticLot'
import FormStyler from 'core/styled/FormStyler'

@connect(() => ({}))
class NewProvider extends React.Component {
  render() {
    return (
      <StaticLot>
        <FormStyler>
          <form>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
          </form>
        </FormStyler>
      </StaticLot>
    )
  }
}

export default NewProvider
