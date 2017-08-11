import axios from 'axios'
import queryString from 'query-string'

const registrationPath = 'http://10.0.58.7:3000/v1/users'

export function submitRegistration(emailAddress, password, passwordConfirmation, successCallBack) {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_REGISTRATION' })
    axios.post(registrationPath, { user: {
      email: emailAddress,
      password,
      password_confirmation: passwordConfirmation
    } })
      .then((response) => {
        dispatch({ type: 'SUBMIT_REGISTRATION_FULFILLED', payload: response.data.data.user })
        const { authentication_token, email } = response.data.data.user
        localStorage.setItem('token', authentication_token)
        localStorage.setItem('email', email)
        successCallBack()
      })
      .catch((err) => {
        dispatch({ type: 'SUBMIT_REGISTRATION_FAILED', payload: err })
      })
  }
}

export function confirmEmail(confirmationToken) {
  const token = queryString.stringify(confirmationToken)
  return (dispatch) => {
    dispatch({ type: 'CONFIRM_EMAIL' })
    const email = localStorage.getItem('email')
    const authToken = localStorage.getItem('token')
    axios.post('http://localhost:3000/v1/confirmation',
      token,
      {
        headers: {
          'X-User-Email': email,
          'X-User-Token': authToken
        }
      })
      .then((response) => {
        dispatch({ type: 'CONFIRM_EMAIL_FULFILLED', payload: response.status })
      })
      .catch((err) => {
        dispatch({ type: 'CONFIRM_EMAIL_FAILED', payload: err })
      })
  }
}
