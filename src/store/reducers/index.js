import { combineReducers } from 'redux'
import clickReducer from './clickReducer'
const rootReducer = combineReducers({
  clickReducer: clickReducer
})

export default rootReducer