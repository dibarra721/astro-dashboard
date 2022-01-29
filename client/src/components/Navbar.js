
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const { logout } = props
  return (
    <div className="navBar">
      <nav>
       
     
     <li> <Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/forum">Forum</Link></li>
      <button onClick={logout}>Logout</button>

     
     
      </nav>

    </div>
  )
}