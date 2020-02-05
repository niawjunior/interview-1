
import { userAction } from '../store/actions/usersAction'
import { userDetailAction } from '../store/actions/userDetailAction'

const getUsers = id => {
  const url = id 
    ? `https://jsonplaceholder.typicode.com/users/${id}` 
    : 'https://jsonplaceholder.typicode.com/users'
    return dispatch => {
      if (id) {
        dispatch(userDetailAction.request())
        return fetch(url)
          .then(res => res.json())
          .then(res => {
            dispatch(userDetailAction.success(res))
          })
          .catch(() => {
          dispatch(userDetailAction.error('error'))
        })
      } else {
        dispatch(userAction.request())
        return fetch(url)
          .then(res => res.json())
          .then(res => {
            dispatch(userAction.success(res))
          })
          .catch(() => {
          dispatch(userAction.error('error'))
        })
      }
    }
}

export const userService = {
  getUsers
}