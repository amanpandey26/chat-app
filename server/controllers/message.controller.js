import Conversation from '../models/coversation.model.js'
import Message from '../models/message.model.js'

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {userId: receiverId} = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            $all: [senderId, receiverId]
        })

        if (!conversation) {
            conversation = Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller",error)
        res.status(400).json({error:"Internal server error!"})
    }
}