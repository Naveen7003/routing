import axios from "../utils/axios"
import { useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const { data } = await axios.get("/users")
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  let renderUsers = "Loading...";

  if (users.length > 0) {
    renderUsers = users.map((user) => (
      <div className='bg-red-100 p-5 mr-3 mb-2' key={user.id}>
        <h1 className='font-3xl'>Name: {user.name}</h1>
        <small className='font-2xl'>Email: {user.email}</small>
      </div>
    ));
  }

  return (
    <div className="p-16">
      <h1 className='font-semibold text-green-800 text-5xl'>Homepage</h1>
      <button className='mt-5 px-4 py-2 text-xl bg-blue-400 rounded-sm' onClick={getUsers}>Get Users</button>
      <br />
      <hr className='mb-4' />
      
      <div className='flex pl-20 pt-4 flex-wrap'>{renderUsers}</div>
    </div>
  );
}

export default Home;
