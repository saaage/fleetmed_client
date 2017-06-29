import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/reviewActions'

// connect can be used to provide a specific piece of the store to a component
@connect((store) => {
  return {
  }
})
class Reviews extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchReviews())
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <div>
        <ul>
          <li>Our first review</li>
        </ul>
      </div>
    )
  }
}

export default Reviews
