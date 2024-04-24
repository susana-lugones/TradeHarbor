import { useState, useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import axios from 'axios'

const useGetMessages = () => {
    // State to hold the messages (globally) and loading state
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                // Send a GET request to the server to get the messages of the selected conversation
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
        // Fetch the messages when the selected conversation is modified
        if (selectedConversation?._id) getMessages()
    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages
