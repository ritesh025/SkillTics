import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to='/'>
        <p className="text-3xl font-extrabold text-gradient">SKILLTICS</p>
        </Link>
        <Link to='/upload' className='primary-button w-fit'>
        Upload your Resume
        </Link>
    </nav>
  )
}

export default Navbar