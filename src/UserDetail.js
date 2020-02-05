import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { userService } from './services/usersService'
const UserDetail = ({ match, data, getUserDetail, pending, error }) => {

  const id = match.params.id
  useEffect(() => {
    getUserDetail(id)
  }, [getUserDetail, id])

  if (pending) {
    return <h1>Loading...</h1>
  } else {
    return (
        error 
        ? <h1>Error</h1>
        :
        <div>
          <h1>Username: { data && data.name }</h1>
          <h4>Email: { data && data.email }</h4>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.usersDetailReduce.data,
  pending: state.usersDetailReduce.pending,
  error: state.usersDetailReduce.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserDetail: userService.getUsers
}, dispatch)

const userDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail)

export default userDetail