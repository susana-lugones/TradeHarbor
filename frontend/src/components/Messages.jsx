import React, { useState, useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from './skeletons/MessageSkeleton'

const Messages = () => {

  // Get the messages from the hook
  const { messages, loading } = useGetMessages()

  return (
    <>
    <>
      {/* Show message skeleton when loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </>
    <div className='px-4 flex-1 overflow-auto'>
      {/* When not loading display all message elements */}
        {!loading && messages.length > 0 && messages.map((message) => (
          <Message 
            key={message._id}
            message={message}
          />
        ))}
        
    </div>
    </>
  )
}

export default Messages