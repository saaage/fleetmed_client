import axios from 'axios'

let reviews_path = 'http://localhost:3000/v1/reviews/'

export function fetchReviews() {

  return function(dispatch) {
    dispatch({type: 'FETCH_REVIEWS'})
    axios.get(reviews_path)
      .then((response) => {
        dispatch({type: 'FETCH_REVIEWS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_REVIEWS_FAILED', payload: err})
      })
  }

}

export function deleteReview(id) {

  return function(dispatch) {
    dispatch({type: 'DELETE_REVIEW'})
    axios.delete(reviews_path + id)
      .then((response) => {
        dispatch({type: 'DELETE_REVIEW_FULFILLED', payload: id})
      })
      .catch((err) => {
        dispatch({type: 'DELETE_REVIEW_FAILED', payload: err})
      })
  }

}
