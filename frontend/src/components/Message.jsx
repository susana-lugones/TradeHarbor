import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { extractTime } from '../utils/extractTime'

const Message = ({message}) => {
  const [viewingUser, setViewingUser] = useState('')
  const [loading, setLoading] = useState(false)
  const formattedTime = extractTime(message.createdAt)

  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`http://localhost:8000/accountinfo`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        const data = await res.data
        if (data.error) {
          throw new Error(data.error)
        }
        setViewingUser(data._id)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [])

  const chatEnd = message.senderId === viewingUser ? 'chat-end' : ''
  const bubbleBgColor = message.senderId === viewingUser ? "bg-teal-500" : "";

  return (
    <div className={`chat ${chatEnd}`}>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>
            {!loading && message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message