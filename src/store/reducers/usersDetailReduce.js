import { userDetail } from '../constants/userDetailConstant'

const initialState = {
  data: null,
  pending: false,
  error: false
}

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case userDetail.USERS_DETAIL_REQUEST:
      return {
        ...state,
        pending: true,
        data: []
      }
    case userDetail.USERS_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        error: false,
        data: action.payload
      }
    case userDetail.USERS_DETAIL_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
        data: action.payload
      }
    default:
      return state
  }
}

export default userDetailReducer