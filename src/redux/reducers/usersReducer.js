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
      return {...state, user: { signedIn: true }, fetching: false, fetched: true}
    case "USER_SIGN_IN_FAILED":
      return {...state, error: action.payload, fetching: false, fetched: false}
    case "USER_SIGN_OUT_FULFILLED":
      return {...state, user: {signedIn: false}}
    case "VALIDATING_SESSION_FULFILLED":
      return {...state, user: { signedIn: true} }
    case "VALIDATING_SESSION_FAILED":
      return {...state, user: { signedIn: false } }
    default:
      return state
  }
}
