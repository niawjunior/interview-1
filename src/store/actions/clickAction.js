import { click } from '../constants/clickConstant'

const increment = result => ({ type: click.INCREMENT_NUMBER, payload: result })

const decrement = result => ({ type: click.DECREMENT_NUMBER, payload: result })

export { increment, decrement }