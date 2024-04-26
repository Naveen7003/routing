import React from 'react'
import { useNavigate } from 'react-router-dom';


const Entry = () => {
    const navigate = useNavigate();
    const SubmitHandler = () =>{
        navigate("/show")
    }
  return (
    <div>
        <button onClick={SubmitHandler} className='h-10 w-20 bg-red-400 '>Submit</button>
    </div>
  )
}

export default Entry