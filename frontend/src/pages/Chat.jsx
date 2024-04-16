import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'

const Chat = () => {
  return (
    <div className='flex flex-grow items-center justify-center'>
        <div className='border-gray-600 border flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#ececec] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <ChatWindow />
        </div>
    </div>
  )
}

export default Chat