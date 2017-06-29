import React from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/reviewActions'

// @connect connects a React component to the Redux store
// connect returns a new connected component class for us to use with our Redux store
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
    console.log(this.props);
  }

  render() {
    return(
      <div>
        <ul>
          <li>{typeof(this.props.reviews)}</li>
        </ul>
      </div>
    )
  }
}

export default Reviews
