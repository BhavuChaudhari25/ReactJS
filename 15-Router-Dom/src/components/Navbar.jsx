import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default Navbar