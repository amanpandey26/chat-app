// import React from 'react'
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "../skeletons/MessageSkeleton"

const Messages = () => {
  const {loading, messages} = useGetMessages();
  console.log("messages:",messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
       {loading && [...Array(3)].map((_,index)=><MessageSkeleton key={index}/>)}

       {!loading && messages.length===0 && (
        <p className="text-center">Send a message to start the conversation</p>
       )}
    </div>
  )
}

export default Messages