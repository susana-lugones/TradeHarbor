import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const isUserSignedIn = !!localStorage.getItem('token')

    const handleSignout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
        <Link to="/"><h1 className='text-3xl'>LOGO HERE</h1></Link>
        <ul className='flex gap-6'>
            { isUserSignedIn ? (
                <>
                <Link to='/account'><li>Account</li></Link>
                <li><button onClick={handleSignout}>Sign Out</button></li>
                </>
            ) : (
                <>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Signup</li></Link>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar