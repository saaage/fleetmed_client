const initialState = {
  allReviews: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REVIEWS':
      return { ...state, fetching: true }
    case 'FETCH_REVIEWS_FULFILLED':
      return { ...state, allReviews: action.payload.data, fetching: false, fetched: true }
    case 'FETCH_REVIEWS_FAILED':
      return { ...state, error: action.payload }
    case 'DELETE_REVIEW_FULFILLED':
      return { ...state,
        allReviews: state.allReviews.filter(review => review.id !== action.payload) }
    default:
      return state
  }
}
