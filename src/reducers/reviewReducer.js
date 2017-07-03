let initialState = {
  allReviews: []
}

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case "FETCH_REVIEWS_FULFILLED":
      return {...state, allReviews: action.payload}
    case "DELETE_REVIEW_FULFILLED":
      return {...state, allReviews: state.allReviews.filter( review => review.id !== action.payload )}
    default:
      return state
  }

}
