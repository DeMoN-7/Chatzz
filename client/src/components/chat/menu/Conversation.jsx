import {  useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../service/api'
import { Box , styled,Divider} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider'

import Conversations from './Consersations';
const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider)`
    margin: 0 0 0 0px;
    background-color:#858585;
    opacity: 0.6;
`
const Conversation = ({text}) => {
    const [users, setUsers] = useState([]);
    const {account,socket, setActiveUsers } = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let responce =  JSON.stringify( await getUsers());
            responce = await JSON.parse(responce);
            setUsers(responce.data);
            console.log("user ",users) ;
            console.log("responce ",responce) ;
            const filteredData = responce.data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            console.log("filtered",filteredData);
            setUsers(filteredData);
        }
        fetchData();
    }, [text]);
    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            console.log("current user",users)
            setActiveUsers(users);
        })
    }, [account])
    return (

        <Component >
            {
                users.map((user) => {
                    // console.log("from map",user._id);
                    
                    return<> <Conversations key={user._id} user = {user}/> <StyledDivider/></>
                    //  console.log(user);
                })
            }
        </Component>
    )
}
export default Conversation;