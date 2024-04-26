import React from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
const Details = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    console.log(location)
  return (
    <div>
        <h1 className='text-3xl'>Details</h1>
        <h1 className='text-3xl mt-5'> Book Id :<span className='font-extrabold'>{id}</span></h1><br></br>
        <Link className="text-blue-600" to={`${pathname}/profile`}>Profile</Link><br />
        <button className='py-3 px-6 bg-red-600' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Details

