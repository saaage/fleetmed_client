import axios from 'axios'
import { Redirect } from 'react-router-dom'

let sessions_path = 'http://localhost:3000/v1/sessions'

export function userSignIn(email, password, successCallBack) {

  return function(dispatch) {
    dispatch({type: 'USER_SIGN_IN'})
    axios.post(sessions_path, {
      email: email,
      password: password
    })
      .then((response) => {
        dispatch({type: 'USER_SIGN_IN_FULFILLED', payload: response.data.data.user})
        const { authentication_token, email } = response.data.data.user
        localStorage.setItem('token', authentication_token)
        localStorage.setItem('email', email)
        successCallBack()
      })
      .catch((err) => {
        dispatch({type: 'USER_SIGN_IN_FAILED', payload: err})
      })
  }
}
