import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiSquarePlus } from 'react-icons/ci'
import useConversation from '../zustand/useConversation'

const Navbar = () => {

    const navigate = useNavigate()
    const isUserSignedIn = !!localStorage.getItem('token')
    const { setSelectedConversation } = useConversation()

    const handleSignout = () => {
        localStorage.removeItem('token')
        setSelectedConversation(null)
        navigate('/login')
    }

  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
        <Link to="/"><h1 className='text-2xl'>TRADEHARBOR</h1></Link>
        <div className='flex flex-row'>
            <ul className='flex gap-6'>
                { isUserSignedIn ? (
                    <>
                    <Link to='/account'><li>Account</li></Link>
                    <li><button onClick={handleSignout}>Sign Out</button></li>
                    <Link to='/createproduct'><CiSquarePlus className='text-3xl'/></Link>
                    </>
                ) : (
                    <>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/signup"><li>Signup</li></Link>
                    </>
                )}
            </ul>
            
        </div>
    </nav>
  )
}

export default Navbar