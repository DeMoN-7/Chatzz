import Message from '../model/Message.js'
import Conversation from '../model/Conversation.js'
export const newMessage = async (request,response)=>{
    try {
        const newMessage = new Message(request.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json(' message sent successfully')
    } catch (error) {
        return response.status(500).json(error);
    }
}

export const getMessage  = async (request,response)=>{
    try{
        const messages = await Message.find({conversationId: request.params.id});
        return response.status(200).json(messages);
    }catch(error){
        return response.status(500).json(error);
    }
}