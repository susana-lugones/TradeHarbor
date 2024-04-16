import React, { useState, useEffect } from 'react'
import Conversation from './Conversation'
import axios from 'axios'

const Conversations = () => {

  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])


  const getConversations = async () => {
    setLoading(true)
    try {
      const res = await axios.get('http://localhost:8000/users/sidebar')
      const data = res.json()
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

  useEffect(() => {
    getConversations()
  }, [])

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation) => (
        <Conversation 
          key={conversation.id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1} 
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations