import axios from 'axios'

export function userSignIn(email, password) {
  return function(dispatch) {
    dispatch({type: 'USER_SIGN_IN_FULFILLED',
      payload: {
        name: 'Stefan Age',
        email: email,
        password: password
      }
    })
  }
}
