import { applyMiddleware, createStore } from 'redux'

import { logger } from 'redux-logger'
// logs changes to state in the console
import promise from 'redux-promise-middleware'
// allows us to dispatch a promise as the value of payload in our actions
// a 'pending' aciton is dispatched immediately with the original type string and a suffix of _PENDING
import thunk from 'redux-thunk'
// allows us to write action creators that return a function instead of an action
import reducer from './reducers'

const middleware = applyMiddleware(promise(), thunk, logger)
// combines our middleware into one object

export default createStore(reducer, middleware)
