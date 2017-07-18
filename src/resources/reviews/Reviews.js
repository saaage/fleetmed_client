// Reviews is a container component with access to state
// Reviews will have the following actions: all, show
import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews, deleteReview } from 'redux/actions/reviewActions'

import Grid from 'core/svg/Grid'
import Review from './Review'


// @connect connects a React component to the Redux store allowing us to
//   map pieces state to component props. The export will include
//   the connected component
@connect(store => (
  {
    reviews: store.reviews.allReviews,
    fetching: store.reviews.fetching
  }
))
class Reviews extends React.Component {

  constructor(props) {
    super(props)

    // binds deleteReview as a Class method rather than an instance method
    this.deleteReview = this.deleteReview.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchReviews())
  }

  deleteReview(id) {
    this.props.dispatch(deleteReview(id))
  }

  render() {
    const { reviews, fetching } = this.props

    const mappedReviews = reviews.map(review => (
      <Review
        key={review.id}
        {...review}
        id={review.id}
        delete={() => this.deleteReview(review.id)}
      />
      )
    )

    const ulStyle = {
      margin: '0px',
      listStyleType: 'none'
    }

    if (fetching) {
      return (
        <Grid />
      )
    }

    return (
      <ul style={ulStyle}>
        { mappedReviews }
      </ul>
    )
  }
}

export default Reviews
