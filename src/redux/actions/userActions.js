import axios from 'axios'

let sessions_path = 'http://localhost:3000/v1/sessions'

export function userSignIn(email, password) {

  return function(dispatch) {
    dispatch({type: 'USER_SIGN_IN'})
    axios.post(sessions_path, {
      email: email,
      password: password
    })
      .then((response) => {
        dispatch({type: 'USER_SIGN_IN_FULFILLED', payload: response.data.data.user})
      })
      .catch((err) => {
        dispatch({type: 'USER_SIGN_IN_FAILED', payload: err})
      })
  }
}
