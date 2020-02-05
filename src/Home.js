import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions/clickAction'
import Show from './Show'

const Home = ({data, incrementState, decrementState}) => {

const onIncrement = () => {
  incrementState(data + 1)
}

const onDecrement = () => {
  decrementState(data - 1)
}

return (
  <>
    <Show data={data}/>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </>
)
}

const mapStateToProps = state => ({
  data: state.clickReducer.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementState: increment,
  decrementState: decrement
}, dispatch)

const home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default home