import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/reviewActions'

// @connect connects a React component to the Redux store allowing us to map state to props
// the module export will include the connected component
@connect((store) => {
  return {
    reviews: store.reviews.allReviews
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
  }

  render() {

    let { reviews } = this.props
    let mappedReviews = reviews.map(review => <li key={review.created_at}>{review.feedback} {review.recommended ? 'Recommended' : ''}</li>)

    return(
      <div>
        <ul>
          { mappedReviews }
        </ul>
      </div>
    )
  }
}

export default Reviews
