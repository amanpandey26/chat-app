import {create} from "zustand"

const useConversation = create((set)=> ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation)=> selectedConversation({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages})
}))

export default useConversation;