import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginTest = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/login', { username, password })
            const token = response.data.token
            setUsername('')
            setPassword('')
            navigate('/')
            window.location.reload()
            localStorage.setItem('token', token)
        } catch (error) {
            console.log("Can't Login User")
        }
    }

    return (
        <div className='w-100% flex flex-grow justify-center items-center bg-teal-500 '>
            <div className="flex flex-col items-center justify-center rounded-md loginsignup-container">
                <h1 className='text-2xl font-semibold pb-4'> Login</h1>
                <div className="flex flex-col gap-7 w-[80%]">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='h-[72px] w-[100%] bg-[#c9c9c9] text-lg p-2 rounded-md' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='h-[72px] w-[100%] bg-[#c9c9c9] text-lg p-2 rounded-md' />
                </div>
                <button onClick={handleLogin}>Continue</button>
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginTest