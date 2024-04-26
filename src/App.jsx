import React from 'react'
import Nav from "./component/Nav"
import RouteComponent from './Routes/RouteComponent'
import axios from "axios"

const App = () => {
  const getusers = async () =>{
    try{
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(data)
    }catch(error){
      console.log(error)
    }
  
  }
  return (
    <div className='h-screen w-screen bg-slate-400 gap-10  '>
      <Nav />
    <button className='bg-green-600 h-12 w-24' onClick={getusers}> Go</button>
      <RouteComponent />
      
    </div>
  )
}

export default App