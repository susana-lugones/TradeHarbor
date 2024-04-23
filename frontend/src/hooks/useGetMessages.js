import { useState, useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import axios from 'axios'

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`http://localhost:8000/getmessages/${selectedConversation._id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                const data = await res.data
                if (data.error) {
                    throw new Error(data.error)
                }
                // let loadedMessages = data
                setMessages(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        if (selectedConversation?._id) getMessages()
    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages
