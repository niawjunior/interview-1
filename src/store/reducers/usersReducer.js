import { user } from '../constants/usersConstant'

const initialState = {
  data: [],
  pending: false,
  error: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.USERS_REQUEST:
      return {
        ...state,
        pending: true,
        data: []
      }
    case user.USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: false,
        data: action.payload
      }
    case user.USERS_ERROR:
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

export default userReducer