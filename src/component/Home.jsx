import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
            </li>
            <li>
            <Link to='/register'>Registration</Link>
            </li>
            <li>
            <Link to='/Dashboard'>Dashboard</Link>
          </li>
        </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Home