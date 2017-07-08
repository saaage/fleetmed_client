let initialState = {
  user: {},
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state = initialState, action){

  switch(action.type){
    case "USER_SIGN_IN":
      return {...state, fetching: true}
    case "USER_SIGN_IN_FULFILLED":
      return {...state, user: action.payload, fetching: false, fetched: true}
    case "USER_SIGN_IN_FAILED":
      return {...state, error: action.payload, fetching: false, fetched: false}
    default:
      return state
  }
}
