import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => (
  <div style={{ display: 'flex', justifyContent: 'center'}}>
    <Link to="/home" style={{ margin: '10px'}}>
      <h1>Home</h1>
    </Link>
    <Link to="/users" style={{ margin: '10px'}}>
      <h1>Users</h1>
    </Link>
    <Link to="/about" style={{ margin: '10px'}}>
      <h1>About</h1>
    </Link>
  </div>
)

export default Head