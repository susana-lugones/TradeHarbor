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
        <div className='w-full h-screen flex'>
            <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
                <form className='text-center bg-teal-700 border rounded-lg w-[500px] h-[400px] p-9'
                    onSubmit={handleLogin}>
                    
                    <label>Username</label>
                    <br />
                    <input type='text' className='w-[400px] h-[40px] border rounded-xl bg-zinc-700 p-2' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type='password' className='w-[400px] h-[40px] border rounded-xl bg-zinc-700 p-2' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <button type='submit' className='w-[200px] h-[50px] bg-[#1a1a1a] border rounded-lg hover:bg-zinc-700'>Login</button>
                </form>
            </div>
            <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-700'>
                <h2 className='text-3xl text-white'>Login</h2>
            </div>
        </div>
    )
}

export default Login