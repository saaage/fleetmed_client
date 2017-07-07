
export function userSignIn() {
  return function(dispatch) {
    dispatch({type: 'USER_SIGN_IN_FULFILLED',
      payload: {
        id: 1,
        name: 'Stefan Age',
        email: 'me@stefanage.com'
      }
    })
  }
}
