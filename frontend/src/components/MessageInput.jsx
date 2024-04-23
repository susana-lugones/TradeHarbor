import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import axios from 'axios'
import useConversation from '../zustand/useConversation'

const MessageInput = () => {
    
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()
    

    const sendMessage = async (message) => {
        setLoading(true)

        try {
            const res = await axios.post(`http://localhost:8000/sendmessage/${selectedConversation._id}`, {message}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage('')
    }

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input onChange={(e) => setMessage(e.target.value)} value={message} type='text' className='border text-sm rounded-lg w-full p-2.5 bg-gray-200 border-gray-600 text-gray-600' placeholder='Send a message' />
                <button type='submit' className='absolute flex items-center pe-3 inset-y-0 end-0'>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput