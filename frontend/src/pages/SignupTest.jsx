import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './CSS/LoginSignup.css'

export const SignupTest = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8000/register', {
        email: email,
        username: username,
        password: password
    })
    .then(() => {
        alert('User Registered')
        setEmail('')
        setUsername('')
        setPassword('')
        fetchUsers()
        navigate('/logintest')
    })
    .catch((error) => {
        console.log("Can't Register User")
        console.log(error)
    })
}

  return (
    <div className='w-100% flex flex-grow justify-center items-center bg-teal-500 '>
      <div className="flex flex-col items-center justify-center rounded-md loginsignup-container">
        <h1 className='text-2xl font-semibold pb-4'> Sign Up</h1>
        <div className="flex flex-col gap-7 w-[80%]">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='h-[72px] w-[100%] bg-[#c9c9c9] text-lg p-2 rounded-md'/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='h-[72px] w-[100%] bg-[#c9c9c9] text-lg p-2 rounded-md'/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='h-[72px] w-[100%] bg-[#c9c9c9] text-lg p-2 rounded-md'/>
        </div>
        <button onClick={handleRegister}>Continue</button>
        <p className="loginsignup-login">Already have an account<span>   <Link to='/login'>Login here</Link> <span></span></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox"/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default SignupTest