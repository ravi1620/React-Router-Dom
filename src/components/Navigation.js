import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='App nav'>
        <Link to ="/home">Home</Link>
        <Link to ="/">Login</Link>
        <Link to ="/signup">Signup</Link>
    </nav>
  )
}

export default Navigation