import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user, setUsers] = useState([])
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
            navigate('/account')
            window.location.reload()
            localStorage.setItem('token', token)
        } catch (error) {
            console.log("Can't Login User")
        }
    }

    return (
        <div className='w-full flex-grow flex'>
            <div className='w-[50%] h-[100%] bg-[#ececec] text-gray-800 flex justify-center items-center'>
                <form className='text-center bg-teal-500 border rounded-lg w-[400px] h-[400px] p-9'
                    onSubmit={handleLogin}>
                    
                    <label>Username</label>
                    <br />
                    <input type='text' className='w-[80%] h-[40px] border rounded-xl bg-zinc-200 p-2' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type='password' className='w-[80%] h-[40px] border rounded-xl bg-zinc-200 p-2' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <button type='submit' className='w-[50%] h-[50px] bg-[#ececec] border rounded-lg hover:bg-zinc-200'>Login</button>
                </form>
            </div>
            <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-500'>
                <h2 className='text-3xl text-white'>Login</h2>
            </div>
        </div>
    )
}

export default Login