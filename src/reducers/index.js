import { combineReducers } from 'redux'
import { restaurants } from './restaurants'
import { session } from './session'

export default combineReducers({
  restaurants,
  session,
})
