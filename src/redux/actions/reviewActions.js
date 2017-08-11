import axios from 'axios'

const reviewsPath = 'http://10.0.58.7:3000/v1/reviews/'

export function fetchReviews() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_REVIEWS' })
    axios.get(reviewsPath, {
      headers: {
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    })
      .then((response) => {
        dispatch({ type: 'FETCH_REVIEWS_FULFILLED', payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_REVIEWS_FAILED', payload: err })
      })
  }
}

export function deleteReview(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_REVIEW' })
    axios.delete(reviewsPath + id, {
      headers: {
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    })
      .then(() => {
        dispatch({ type: 'DELETE_REVIEW_FULFILLED', payload: id })
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_REVIEW_FAILED', payload: err })
      })
  }
}
