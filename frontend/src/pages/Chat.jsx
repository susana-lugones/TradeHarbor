import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'

const Chat = () => {
  // If the user is not logged in, display a message to login. Else display the chat window
  return (
    <div className='flex flex-grow items-center justify-center pt-5'>
        {!localStorage.getItem('token') ? <h1 className='text-2xl'>Unauthorized: Please Login</h1> : 
        (<div className='border-gray-600 border flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#ececec] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <ChatWindow />
    </div>)}
    </div>
  )
}

export default Chat