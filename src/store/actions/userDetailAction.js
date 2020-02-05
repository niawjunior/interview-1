import { userDetail } from '../constants/userDetailConstant'

const request = () => ({ type: userDetail.USERS_DETAIL_REQUEST })

const success = result => ({ type: userDetail.USERS_DETAIL_SUCCESS, payload: result })

const error = error => ({ type: userDetail.USERS_DETAIL_ERROR, payload: error })

export const userDetailAction = { 
  request,
  success,
  error
}