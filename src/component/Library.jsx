import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Library = () => {
  return (
    <div className='ml-20 mt-10 text-3xl'>
        <h1>The books are below</h1>
        <ul >
            <li>
                <Link to="/show/1">Book 1</Link>
            </li>
            <li>
                <Link to="/show/2">Book 2</Link>
            </li>
            <li>
                <Link to="/show/3">Book 3</Link>
            </li>
        </ul>
        <hr />
        <Outlet />
    </div>
  )
}

export default Library