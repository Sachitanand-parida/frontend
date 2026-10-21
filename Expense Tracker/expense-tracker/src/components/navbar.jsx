import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <ul>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/reports'>Reports</Link></li>
        <li><Link to='/transaction'>Transaction</Link></li>
        <li><Link to='/'>Get Quote</Link></li>
        <li><Link to='/'>Reset</Link></li>
      </ul>
    </nav> 
  )
}

export default Navbar
