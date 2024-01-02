import React, { useEffect } from 'react'
import {Box,Typography,styled} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {useContext} from 'react'
// import { defaultProfilePicture } from '../../../constants/data';
import AccountProvider, { AccountContext } from '../../../context/AccountProvider';
const Header = styled(Box)`

height: 44px;
background: #ededed;
display: flex;
padding: 8px 16px;
align-items: center;
`;

const Image = styled('img')({
  width: 40,
  height: 40,
  objectFit: 'cover',
  borderRadius: '50%'
})

const Name = styled(Typography)`
margin-left:12px ;`

const Status = styled(Typography)`
margin-left:12px ;
font-size:12px;
color: rgb(0,0,0,0.6);
`
const RishtContainer = styled(Box)`
  margin-left:auto;
  &> svg{
    padding : 8px;
    font-size:22px;
    color: #000
  }
`

const ChatHeader = ({person}) => {
  const {activeusers} = useContext(AccountContext)
  useEffect(()=>{
    const fun=()=>{
      console.log("active users",activeusers);
    }
    fun();
  },[activeusers])
  return (
    <Header>
      <Image src = {person.picture} alt = "dp" />
      <Box>
        <Name>{person.name}</Name>
        {/* <Status>{activeusers?.find(user=> user.sub === person.sub)?'Online':'offline'}</Status> */}
        <Status>{activeusers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status> 
      </Box>
      <RishtContainer>
        <SearchIcon/>
        <MoreVertIcon/>
      </RishtContainer>
    </Header>
  )
}

export default ChatHeader