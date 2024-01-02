import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../service/api'
const ChatBox = () => {
    const {person,account} = useContext(AccountContext);
    const [consersation,setConversation] = useState({});
    useEffect( ()=>{
        const getConversationDetails = async () =>{
            let data = await getConversation({senderId:account.sub,receiverId:person.sub});
            setConversation(data);
        }
        getConversationDetails();
    },[person.sub]);
    return (
        <Box >
            <ChatHeader person={person}/>
            <Messages person={person} consersation={consersation}/>
        </Box>
    )
}

export default ChatBox