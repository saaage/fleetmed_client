// Reviews is a container component with access to state
// Reviews will have the following actions: all, show

import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews, deleteReview, addReview } from '../../redux/actions/reviewActions'

import Review from './Review'

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

    this.deleteReview = this.deleteReview.bind(this)
    // binds deleteReview as a Class method rather than an instance method
  }

  componentWillMount() {
    this.props.dispatch(fetchReviews())
  }

  deleteReview(id) {
    this.props.dispatch(deleteReview(id))
  }

  render() {

    let { reviews } = this.props

    let mappedReviews = reviews.map( review =>
      <Review key={review.id} {...review}
        id={review.id}
        delete={ () => this.deleteReview(review.id) } />
    )

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
