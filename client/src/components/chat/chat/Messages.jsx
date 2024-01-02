import React, { useEffect, useState,useRef } from 'react'
import {Box, styled} from '@mui/material';
import Footer from './Footer';
import {AccountContext} from '../../../context/AccountProvider'
import { useContext } from 'react';
import {newMessage,getMessage } from '../../../service/api'
import Message from '../chat/Message'
// import socket from 'socket.io'
const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    
    background-size: 50%;
    `;

const Component = styled(Box)`
height: 80vh;
overflow-y: scroll;
`
const Container = styled(Box)`
    padding: 1px 80px;
`
const Messages = ({person, consersation}) => {
    const {account,socket,newmessageflag,setNewmwssageflag} = useContext(AccountContext);
    const [value,setValue ] = useState('');
    const [Messages,setMessages ] = useState([])
    
    const [file,setFile] = useState();
    const [image,setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);
    const scrollRef = useRef();
    useEffect(()=>{
        socket.current.on('getMessage',data=>{
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    },[])
    useEffect(()=>{
        const getMessagesDetails = async ()=>{
            if(consersation){
            let data = await getMessage(consersation._id);
            console.log("selected message messages.jsx",data);
            setMessages(data);
            }
        }
        if(consersation){
        consersation._id && getMessagesDetails();
        }

    },[person._id,consersation._id,newmessageflag])
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [Messages]);
    useEffect(() => {
        incomingMessage && consersation?.members?.includes(incomingMessage.senderId) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, consersation]);

    const sendText = async (e)=>{
        // console.log(e);
        const code = e.keyCode || e.which;
        // console.log(code);
        if(code === 13){
            let message = {};
            if(!file){
            message ={
                senderId:account.sub,
                reveiverId:person.sub,
                conversationId: consersation._id,
                type:'text',
                text:value
            } 
        }else{
            message ={
                senderId:account.sub,
                reveiverId:person.sub,
                conversationId: consersation._id,
                type:'file',
                text:image
        }
    }
            socket.current.emit('sendMessage',message);
            await newMessage(message);
            setValue('');
            setFile('');
            setImage('');
            setNewmwssageflag(!newmessageflag)
        }
    }
    return (
        <Wrapper>
            <Component>
            {
                Messages && Messages.map(message =>(
                    <Container ref = {scrollRef}>
                        <Message message={message}/>
                    </Container>
                ))
            }
            </Component>
            <Footer 
            sendText ={sendText} 
            setValue={setValue} 
            value = {value}
            file = {file}
            setFile = {setFile}
            setImage={setImage}
            />
            
        </Wrapper>
    )
}

export default Messages