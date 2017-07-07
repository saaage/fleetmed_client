import { combineReducers } from 'redux'

import reviews from './reviewReducer'
import users from './usersReducer'

export default combineReducers({
  reviews, users
})
