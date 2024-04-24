import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Account = () => {

  // States used for account information and buttons for conditional rendering
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [userButtonClicked, setUserButtonClicked] = useState(false)
  const [emailButtonClicked, setEmailButtonClicked] = useState(false)
  const [passwordButtonClicked, setPasswordButtonClicked] = useState(false)
  const [usernameInput, setUsernameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  // Function to fetch account information
  const fetchAccount = async () => {
    // Send a GET request to the server to get the account information
    const response = await axios.get('http://localhost:8000/accountinfo', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    // Set the account information to the states
    setUsername(response.data.username)
    setEmail(response.data.email)
  }

  // Functions to handle the button clicks and input changes
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

  // Function to handle the username change
  const handleUserSubmit = () => {
    console.log(usernameInput)
    // Send a PATCH request to the server with the new username
    axios.patch('http://localhost:8000/editusername',
      {
        username: usernameInput
      },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        // Fetch the account information and reload the page
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
    // Send a PATCH request to the server with the new email
    axios.patch('http://localhost:8000/editemail',
      {
        email: emailInput
      },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((response) => {
        // Fetch the account information and reload the page
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
    // Send a PATCH request to the server with the new password
    axios.patch('http://localhost:8000/editpassword',
      {
        password: passwordInput
      },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      // No rendering of the password because the password is hashed so cannot be returned from the DB
    setPasswordButtonClicked(false)
    setPasswordInput('')
  }

  const handleDeleteAccount = () => {
    // Send a DELETE request to the server to delete the account
    axios.delete('http://localhost:8000/deleteaccount',
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    // Remove the token from the local storage and navigate to the login page
    localStorage.removeItem('token')
    navigate('/login')
  }

  const handleDeleteProduct = async (id) => {
    try {
      // Send a DELETE request to the server to delete the product
      await axios.delete(`http://localhost:8000/delete/${id}`,
      {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
      // Alert the user that the product has been deleted
      alert('Product Deleted')
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch the products when the page loads and when the products array is modified
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/user/products', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        await setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAccount()
    getProducts()
  }, [products])

  // Render the account page
  return (
    <div className="flex flex-grow flex-col gap-3 w-full items-center justify-center bg-[#ececec] text-gray-800">
      <div className="flex h-[] w-[300px] flex-col rounded-lg bg-teal-500">
        <div className="flex flex-col items-start p-3">
          <h2 className="pb-[8px] text-3xl font-semibold">ACCOUNT</h2>
          <h2 className="pb-[8px]">Username: {username}</h2>
          <h2 className="pb-[8px]">Email: {email}</h2>
        </div>
        <div className="flex flex-col items-start p-2 pb-3">
          <button onClick={handleUserClick} className="m-1 rounded-md bg-zinc-200 p-1">Edit Username</button>
          <button onClick={handleEmailClick} className="m-1 rounded-md bg-zinc-200 p-1">Edit Email</button>
          <button onClick={handlePasswordClick} className="m-1 rounded-md bg-zinc-200 p-1">Change Password</button>
          <button className="m-1 rounded-md bg-red-600 p-1" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
        <div className="flex flex-col items-start">
          {userButtonClicked ? (<>
            <div className='w-[300px] h-[2px] bg-white mb-1'></div>
            <input type="text" placeholder='New Username' value={usernameInput} onChange={handleUserChange} className="m-2 rounded-md bg-zinc-200 p-1" />
            <button onClick={handleUserSubmit} className="rounded-md bg-zinc-200 m-2 px-1.5 py-1">Submit</button>
          </>) : null
          }
          {emailButtonClicked ? (<>
            <div className='w-[300px] h-[2px] bg-white mb-1'></div>
            <input type="text" placeholder='New Email' value={emailInput} onChange={handleEmailChange} className="m-2 rounded-md bg-zinc-200 p-1" />
            <button onClick={handleEmailSubmit} className="rounded-md bg-zinc-200 px-1.5 py-1 m-2">Submit</button>
          </>) : null
          }
          {passwordButtonClicked ? (<>
            <div className='w-[300px] h-[2px] bg-white mb-1'></div>
            <input type="password" placeholder='New Password' value={passwordInput} onChange={handlePasswordChange} className="m-2 rounded-md bg-zinc-200 p-1" />
            <button onClick={handlePasswordSubmit} className="rounded-md bg-zinc-200 px-1.5 py-1 m-2">Submit</button>
          </>) : null
          }
        </div>
      </div>

      <div className="flex h-[] w-[300px] flex-col rounded-lg bg-teal-500 p-3">
        <h2 className="pb-[4px] text-xl font-semibold">My Products:</h2>
        <div className="flex flex-col">
          {products?.map((product) => (
            <div>
              <div key={product._id} className="flex flex-col py-1">
                <Link to={`/product/${product._id}`}><p className='text-lg'>{product.name}:</p></Link>
                <p>{product.description}</p>
                <p>${product.price_range}</p>
              </div>
              <button className='bg-red-500 hover:bg-red-600 rounded-md p-1' onClick={() => handleDeleteProduct(product._id)}>Delete Product</button>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Account