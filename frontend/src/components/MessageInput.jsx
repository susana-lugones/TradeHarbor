import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import axios from 'axios'
import useConversation from '../zustand/useConversation'

const MessageInput = () => {
    // States to hold the message and loading state
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()
    
    // Function to send a message
    const sendMessage = async (message) => {
        setLoading(true)

        try {
            // Send a POST request to the server to send a message
            const res = await axios.post(`http://localhost:8000/sendmessage/${selectedConversation._id}`, {'message':message, 'offer': false}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            const data = await res.data
            if (data.error) {
                throw new Error(data.error)
            }
            setMessages([...messages, data])
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    // Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage('')
    }

    // Render the message input form
    return (
        <div className='px-4 my-3'>
            <div className='w-full relative'>
                <input onChange={(e) => setMessage(e.target.value)} value={message} type='text' className='border text-sm rounded-lg w-full p-2.5 bg-gray-200 border-gray-600 text-gray-600' placeholder='Send a message' />
                <div className='absolute flex items-center pe-1 inset-y-0 end-2 cursor-pointer' onClick={handleSubmit}>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </div>
            </div>
        </div>
    )
}

export default MessageInput