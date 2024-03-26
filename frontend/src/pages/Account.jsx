import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Account = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const fetchAccount = async () => {
    const response = await axios.get('http://localhost:8000/accountinfo', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    setUsername(response.data.username)
    setEmail(response.data.email)
  }

  useEffect(() => {
    fetchAccount()
  }, [])

  return (
    <div className='w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center'>
      <h2 className='text-3xl'>ACCOUNT</h2>
      <br />
      <div>
        <h2>Username: {username}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  )
}

export default Account