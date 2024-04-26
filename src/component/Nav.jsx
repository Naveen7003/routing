import React from 'react'
import {Link} from "react-router-dom"
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div><nav className='flex gap-10 justify-center'>
    <NavLink className={(e) => (e.isActive ? "text-red-400": "")} to="/">Home</NavLink>
    <NavLink className={(e) => (e.isActive ? "text-red-400": "")} to="/create">Book Entry</NavLink>
    <NavLink className={(e) => (e.isActive ? "text-red-400": "")} to="/show">Library</NavLink>
  </nav></div>
  )
}

export default Nav