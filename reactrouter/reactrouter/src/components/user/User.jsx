import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-500 text-center text-black text-2xl p-4' >user :{id}</div>
  )
}

export default User
