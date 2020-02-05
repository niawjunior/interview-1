import { combineReducers } from 'redux'
import clickReducer from './clickReducer'
import usersReducer from './usersReducer'
import usersDetailReduce from './usersDetailReduce'
const rootReducer = combineReducers({
  clickReducer: clickReducer,
  usersReducer: usersReducer,
  usersDetailReduce: usersDetailReduce
})

export default rootReducer