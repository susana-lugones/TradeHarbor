import React, { useState, useEffect } from 'react'
import Conversation from './Conversation'
import axios from 'axios'

const Conversations = () => {
  // State to hold the loading state and the conversations
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  // Function to get the conversations from the server
  const getConversations = async () => {
    setLoading(true)
    try {
      // Send a GET request to the server to get the users that the logged in user has conversations with
      const res = await axios.get('http://localhost:8000/users/sidebar', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
      const data = await res.data
      if (data.error) {
        throw new Error(data.error)
      }
      setConversations(res.data)
      
    } catch (error) {
      console.error(error) 
    } finally {
      setLoading(false)
    }
  }

  // Fetch the conversations when the component mounts
  useEffect(() => {
    getConversations()
  }, [])

  // Return the conversations
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1} 
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations