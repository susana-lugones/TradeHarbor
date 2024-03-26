import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Account = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [userButtonClicked, setUserButtonClicked] = useState(false)
  const [emailButtonClicked, setEmailButtonClicked] = useState(false)
  const [passwordButtonClicked, setPasswordButtonClicked] = useState(false)
  const [usernameInput, setUsernameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const navigate = useNavigate()

  const fetchAccount = async () => {
    const response = await axios.get('http://localhost:8000/accountinfo', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    setUsername(response.data.username)
    setEmail(response.data.email)
  }

  const handleUserClick = () => {
    setUserButtonClicked(true)
    setEmailButtonClicked(false)
    setPasswordButtonClicked(false)
  }

  const handleEmailClick = () => {
    setUserButtonClicked(false)
    setEmailButtonClicked(true)
    setPasswordButtonClicked(false)
  }

  const handlePasswordClick = () => {
    setUserButtonClicked(false)
    setEmailButtonClicked(false)
    setPasswordButtonClicked(true)
  }

  const handleUserChange = (event) => {
    setUsernameInput(event.target.value)
  }

  const handleUserSubmit = () => {
    console.log(usernameInput)
    axios.patch('http://localhost:8000/editusername',
    {
      username: usernameInput
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      fetchAccount()
      window.location.reload()
      setUserButtonClicked(false)
      setUsernameInput('')
    })
    
    
  }

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value)
  }

  const handleEmailSubmit = async () => {
    console.log(emailInput)
    axios.patch('http://localhost:8000/editemail',
    {
      email: emailInput
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      fetchAccount()
      window.location.reload()
      setEmailButtonClicked(false)
      setEmailInput('')
    })
  }

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value)
  }

  const handlePasswordSubmit = () => {
    console.log(passwordInput)
    axios.patch('http://localhost:8000/editpassword',
    {
      password: passwordInput
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    setPasswordButtonClicked(false)
    setPasswordInput('')
  }

  const handleDeleteAccount = () => {
    axios.delete('http://localhost:8000/deleteaccount',
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    localStorage.removeItem('token')
    navigate('/login')
  }

  useEffect(() => {
    fetchAccount()
  }, [])

  return (
    <div className="flex flex-grow w-full items-center justify-center bg-[#1a1a1a] text-white">
      <div className="flex h-[] w-[300px] flex-col rounded-lg bg-zinc-700">
        <div className="flex flex-col items-start p-3">
          <h2 className="pb-[8px] text-3xl font-semibold">ACCOUNT</h2>
          <h2 className="pb-[8px]">Username: {username}</h2>
          <h2 className="pb-[8px]">Email: {email}</h2>
        </div>
        <div className="flex flex-col items-start p-2 pb-3">
          <button onClick={handleUserClick} className="m-1 rounded-md bg-teal-600 p-1">Edit Username</button>
          <button onClick={handleEmailClick} className="m-1 rounded-md bg-teal-600 p-1">Edit Email</button>
          <button onClick={handlePasswordClick} className="m-1 rounded-md bg-teal-600 p-1">Change Password</button>
          <button className="m-1 rounded-md bg-red-600 p-1" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
        <div className="flex flex-col items-start">
          {userButtonClicked ? (<>
            <div className='w-[300px] h-[2px] bg-white mb-1'></div>
            <input type="text" placeholder='New Username' value={usernameInput} onChange={handleUserChange} className="m-2 rounded-md bg-zinc-600 p-1" />
            <button onClick={handleUserSubmit} className="rounded-md bg-teal-600 m-2 px-1.5 py-1">Submit</button>
          </>) : null
          }
          {emailButtonClicked ? (<>
            <div className='w-[300px] h-[2px] bg-white mb-1'></div>
            <input type="text" placeholder='New Email' value={emailInput} onChange={handleEmailChange} className="m-2 rounded-md bg-zinc-600 p-1" />
            <button onClick={handleEmailSubmit} className="rounded-md bg-teal-600 px-1.5 py-1 m-2">Submit</button>
          </>) : null
          }
          {passwordButtonClicked ? (<>
            <div className='w-[300px] h-[2px] bg-white mb-1'></div>
            <input type="password" placeholder='New Password' value={passwordInput} onChange={handlePasswordChange} className="m-2 rounded-md bg-zinc-600 p-1" />
            <button onClick={handlePasswordSubmit} className="rounded-md bg-teal-600 px-1.5 py-1 m-2">Submit</button>
          </>) : null
          }
        </div>
      </div>
    </div>

  )
}

export default Account