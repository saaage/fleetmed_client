import axios from 'axios'

const sessionsPath = 'http://localhost:3000/v1/sessions'

export function userSignIn(email, password, successCallBack) {
  return (dispatch) => {
    dispatch({ type: 'USER_SIGN_IN' })
    axios.post(sessionsPath, {
      email,
      password
    })
      .then((response) => {
        dispatch({ type: 'USER_SIGN_IN_FULFILLED', payload: response.data.data.user })
        const { authentication_token, email } = response.data.data.user
        localStorage.setItem('token', authentication_token)
        localStorage.setItem('email', email)
        successCallBack()
      })
      .catch((err) => {
        dispatch({ type: 'USER_SIGN_IN_FAILED', payload: err })
      })
  }
}

export function userSignOut() {
  return (dispatch) => {
    dispatch({ type: 'USER_SIGN_OUT' })
    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    axios.delete(sessionsPath, {
      headers: {
        'X-User-Email': email,
        'X-User-Token': token
      }
    })
      .then((response) => {
        dispatch({ type: 'USER_SIGN_OUT_FULFILLED', payload: response.status })
        localStorage.clear()
      })
      .catch((err) => {
        dispatch({ type: 'USER_SIGN_OUT_FAILED', payload: err })
      })
  }
}

export function checkAPISession() {
// this action is called during initial App load as well as refresh

  return (dispatch) => {
    dispatch({ type: 'VALIDATING_SESSION' })
    axios.get(sessionsPath, {
      headers: {
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    })
      .then((response) => {
        dispatch({ type: 'VALIDATING_SESSION_FULFILLED', payload: response.status })
      })
      .catch((err) => {
        dispatch({ type: 'VALIDATING_SESSION_FAILED', payload: err })
      })
  }
}
