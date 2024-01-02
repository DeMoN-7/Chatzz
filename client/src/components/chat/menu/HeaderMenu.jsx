import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 5px 24px;
    color:#ff0ff0;

`

const HeaderMenu = ({setOpendrawer}) => {
    const [open,setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);

    }
    const handleClick =(e)=>{
        setOpen(e.currentTarget);
    }
    return (
        <>
            <MoreVertIcon onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuOption onClick={()=>{handleClose(); setOpendrawer(true);}}>Profile</MenuOption>
            </Menu>
            
        </>
    )
}

export default HeaderMenu