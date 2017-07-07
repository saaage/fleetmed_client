let initialState = {
  users: {}
}

export default function reducer(state = initialState, action){

  switch(action.type){
    case "USER_SIGN_IN_FULFILLED":
      return {...state, users: action.payload}
    default:
      return state
  }
}
