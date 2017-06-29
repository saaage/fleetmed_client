import axios from 'axios'

export function fetchReviews() {

  return function(dispatch) {
    axios.get('http://localhost:3000/v1/reviews')
      .then((response) => {
        dispatch({type: 'FETCH_REVIEWS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_REVIEWS_FAILED', payload: err})
      })
  }

}
