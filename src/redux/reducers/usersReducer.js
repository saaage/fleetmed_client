let initialState = {
  user: {
    authentication_token: null,
    email: null,
    signedIn: false,
  },
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state = initialState, action){

  switch(action.type){
    case "USER_SIGN_IN":
      return {...state, fetching: true}
    case "USER_SIGN_IN_FULFILLED":
      return {...state, user: {...action.payload, signedIn: true}, fetching: false, fetched: true}
    case "USER_SIGN_IN_FAILED":
      return {...state, error: action.payload, fetching: false, fetched: false}
    default:
      return state
  }
}
