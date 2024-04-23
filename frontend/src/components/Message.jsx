import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { extractTime } from '../utils/extractTime'

const Message = ({ message }) => {
  const [viewingUser, setViewingUser] = useState('')
  const [loading, setLoading] = useState(false)
  const formattedTime = extractTime(message.createdAt)

  useEffect(() => {
    const getUser = async () => {

      try {
        const res = await axios.get(`http://localhost:8000/accountinfo`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        const data = await res.data
        if (data.error) {
          throw new Error(data.error)
        }
        setViewingUser(data._id)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    setLoading(true)
    if (message.senderId && viewingUser) {
      setLoading(false)
    }
  }, [message.senderId, viewingUser])

  const handleAccept = async () => {
    try {
      await axios.delete(`http://localhost:8000/acceptoffer/${message._id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      await axios.post(`http://localhost:8000/sendmessage/${message.receiverId}`,
        { 'message': 'Your offer has been accepted!' },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      await axios.put(`http://localhost:8000/updatemessage/${message._id}`,
        { 'offer': false },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload(forceReload = false)
    }
  }

  const handleDecline = async () => {
    try {
      await axios.delete(`http://localhost:8000/declineoffer/${message._id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      await axios.post(`http://localhost:8000/sendmessage/${message.receiverId}`,
        { 'message': 'Your offer has been declined.' },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      await axios.put(`http://localhost:8000/updatemessage/${message._id}`,
        { 'offer': false },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload(forceReload = false)
    }
  }

  const chatEnd = message.senderId === viewingUser ? 'chat-end' : ''
  const bubbleBgColor = message.senderId === viewingUser ? "bg-teal-500" : "";

  return (
    <div>
      {!loading && <div>
        <div className={`chat ${chatEnd}`}>
          <div className={`chat-bubble text-white ${bubbleBgColor}`}>
            {message.message}
          </div>

          <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>

        </div>
        {message.offer && message.senderId !== viewingUser &&
          <div className='flex gap-4'>
            <button className='bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-md' onClick={handleAccept}>Accept</button>
            <button className='bg-red-500 hover:bg-red-600 text-white p-2 rounded-md' onClick={handleDecline}>Decline</button>
          </div>
        }
      </div>
      }
    </div>
  )
}

export default Message