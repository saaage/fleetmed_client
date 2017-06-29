let initialState = {
  allReviews: []
}

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case "FETCH_REVIEWS_FULFILLED":
      return {...state, allReviews: action.payload}
    default:
      return state
  }

}
