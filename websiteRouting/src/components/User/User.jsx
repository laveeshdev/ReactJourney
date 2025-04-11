import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() ; 
  return (
    <div className='bg-gray-800 rounded-2xl text-2xl text-orange-700'>
        User : {userid}
      
    </div>
  )
}

export default User
