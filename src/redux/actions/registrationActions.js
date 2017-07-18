import axios from 'axios'

const registrationPath = 'http://localhost:3000/v1/users'

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
