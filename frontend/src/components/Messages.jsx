import React, { useState, useEffect } from 'react'
import Message from './Message'
import axios from 'axios'
import useConversation from '../zustand/useConversation'

const Messages = () => {

  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  const getMessages = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:8000/getmessages/${selectedConversation._id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
      const data = await res.data
      if (data.error) {
        throw new Error(data.error)
      }
      setMessages(res.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (selectedConversation._id) getMessages()
  }, [selectedConversation._id, setMessages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.map((message) => (
          <Message 
            key={message._id}
            message={message}
          />
        ))}
        {loading && <div className='loading loading-spinner'></div>}
    </div>
  )
}

export default Messages