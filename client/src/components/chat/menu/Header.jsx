//libs
import React, { useState } from 'react'
import { Box,styled} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import { useContext } from 'react'


//Components
import { AccountContext } from '../../../context/AccountProvider'
import HeaderMenu from './HeaderMenu';
import InfoDrower from '../../drawer/InfoDrower';


const Component = styled(Box)`
    height:44px;
    background-color:#ededed;
    padding:8px 16px;
    display:flex;
    align-item:center;
`
const Wrapper = styled(Box)`
  margin-left:auto;
  &> *{
    margin-left:2px;
    padding:8px;
    color:#000;
  };
  &:first-of-type{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;

  }
`
const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    
})
const Header = () => {
    const [opendrawer,setOpendrawer] = useState(false);
    const {account} = useContext(AccountContext)
    const toggleDrawer = ()=>{
      setOpendrawer(true);
    }
  return (
    <>
    <Component>
        <Image 
        src = {account.picture} 
        alt="dp"
        onClick={()=>toggleDrawer()}
        style ={{curser:'pointer'}}
        referrerpolicy="no-referrer"
        />
        <Wrapper>
          <ChatIcon/>
          <HeaderMenu setOpendrawer = {setOpendrawer}/>
        </Wrapper>
    </Component>
    <InfoDrower open={opendrawer} setopen = {setOpendrawer}/>
    </>

  )
}

export default Header