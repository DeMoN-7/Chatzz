import React from 'react'
import { Box, Drawer, Typography, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Component
import Profile from './Profile';

const Header = styled(Box)`
    background-color: #008069;
    height:107px;
    color: white;
    display:flex;
    &>svg, &>p{
        margin-top:auto;
        padding:15px;
        font-weight:600;
    }
`
const Component = styled(Box)`
    background: #ededed;
    height:85%;
`
const DrawerStyle = {
    left:20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none',
}
const InfoDrower = ({ open, setopen }) => {
    const handleClose = () => {
        setopen(false)
    }
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps = {{sx : DrawerStyle}}
            style = {{zIndex: 1500}}
        >
            <Box>
                <Header>
                    <ArrowBackIcon onClick = {()=>setopen(false)}/>
                    <Typography>Profile</Typography>
                </Header>
                <Component>
                    <Profile/>
                </Component>
            </Box>
        </Drawer>
    )
}

export default InfoDrower