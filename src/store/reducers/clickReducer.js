import { click } from '../constants/clickConstant'

const initialState = {
  data: 0
}

const number = (state = initialState, action) => {
  switch (action.type) {
    case click.INCREMENT_NUMBER:
      return {
        ...state,
        data: action.payload
      }
    case click.DECREMENT_NUMBER:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default number