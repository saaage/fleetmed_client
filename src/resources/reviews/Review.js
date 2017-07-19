import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Review = props => (
  <li className={props.className}>
    {`${props.id}: ${props.feedback}`}
    <button onClick={props.delete}>Delete</button>
  </li>
)

Review.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired
}

Review.defaultProps = {
  className: null
}

const styledReview = styled(Review)`
  color: pink;
  font-family: 'Open Sans'
`

export default Review
