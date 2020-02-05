import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { userService } from './services/usersService'
const Users = ({ data, getUser, pending, error }) => {
  useEffect(() => {
    getUser()
  }, [getUser])
  if (pending) {
    return <h1>Loading...</h1>
  } else {
    return (
        error 
        ? <h1>Error</h1>
        :
        <ul>
          {
            data.map((item, key) => {
              return <li key={key}>
                <Link to={`users/${String(item.id)}`}>
                { item.name }
                </Link>
                </li>
            })
          }
        </ul>
    )
  }
  
}

const mapStateToProps = state => ({
  data: state.usersReducer.data,
  pending: state.usersReducer.pending,
  error: state.usersReducer.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser: userService.getUsers
}, dispatch)

const users = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default users