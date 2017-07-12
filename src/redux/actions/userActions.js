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

export function userSignOut(email, token) {

  return function(dispatch) {
    dispatch({type: 'USER_SIGN_OUT'})
    localStorage.clear()
    axios.delete(sessions_path, {
      headers: {
        'X-User-Email': email,
        'X-User-Token': token
      }
    })
      .then((response) => {
        dispatch({type: 'USER_SIGN_OUT_FULFILLED', payload: response.status})
      })
      .catch((err) => {
        dispatch({type: 'USER_SIGN_OUT_FAILED', payload: err})
      })
  }

}

export function checkAPISession() {

  return function(dispatch) {
    dispatch({type: 'VALIDATING_SESSION'})
    axios.get(sessions_path, {
      headers: {
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    })
      .then((response) => {
        dispatch({type: 'VALIDATING_SESSION_FULFILLED', payload: response.status})
      })
      .catch((err) => {
        dispatch({type: 'VALIDATING_SESSION_FAILED', payload: err })
      })
  }

}
