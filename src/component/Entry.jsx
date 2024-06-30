import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/axios"

const Entry = () => {
    const navigate = useNavigate();
    const SubmitHandler = () =>{
        navigate("/show")
    }
  const [posts, setposts] = useState([])

    const getposts = async () => {
      try {
        const { data } = await axios.get("/photos")
        setposts(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  
  return (
    <div className="p-16">
        <h1 className='font-semibold text-green-800 text-5xl'>Book Entries</h1>
        <div className='flex flex-col gap-2'>
        <button className='mt-5 px-3 w-36 py-2 text-xl bg-blue-400 rounded-sm' onClick={getposts}>Get Posts</button>
        <button onClick={SubmitHandler} className='px-3 w-36 py-2 text-xl bg-red-400 rounded-sm'>Submit</button>
        </div>
    <div className='p-6  flex gap-5 flex-wrap'>
      {posts.map((p)=>  (
        <div key={p.id} className='h-[250px] w-[250px] bg-slate-500'>
        <img src={`${p.url}`} className='h-[70%] w-[100%] object-cover' alt="" />
        <h2  className='mt-3 ml-2'>${p.title}</h2>
      </div>
      ))}
       
    </div>
     
    </div>
  )
}

export default Entry