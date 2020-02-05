import { user } from '../constants/usersConstant'

const request = () => ({ type: user.USERS_REQUEST })

const success = result => ({ type: user.USERS_SUCCESS, payload: result })

const error = error => ({ type: user.USERS_ERROR, payload: error })

export const userAction = { 
  request,
  success,
  error
}