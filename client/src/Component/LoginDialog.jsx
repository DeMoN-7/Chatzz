
import { Box, Dialog,List,ListItem,styled } from "@mui/material";
import qrCodeImae from '../images/CHatzz.png';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../Context/AccountProvider";






const DialogStyle={
    height:'96%',
    margintTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'none',
    color:'#ff0000',
    background:'#363636',
    
}
const Component=styled(Box)`
display:flex;
margin-top:60px;
margin-left:60px;
font-weight: 700;
font-size:23px;

`
const Box1=styled(Box)`
margin-left:10px;

`
const Component1=styled(Box)`
padding:20px;

`
const Box2=styled(Box)`
margin-top:30px;
margin-left:33%;
height:50px;
width:250px;
`


const LoginDialog =()=>{
        
    const {setAccount}=useContext(AccountContext);

    const onLoginSuccess = (res) =>{
        const decode=jwtDecode(res.credential);
        setAccount(decode);
    }
    const onLoginError=(res)=>{
        console.log("Login Failed",res);
        
    }
    


    return(
        <Dialog open={true}
        PaperProps={{sx:DialogStyle}}
        >

    <Component>
        <Box >
            <Component1>To Use ChatZZ</Component1>
            <List>
                <ListItem>1. Welcome To ChatZZ</ListItem>
                <ListItem>2. Login With the Google Account</ListItem>
                <ListItem>3. Developed By Ayush</ListItem>
            </List>
        </Box>
        <Box1>
            <img src={qrCodeImae} alt="qr Code"  />
        </Box1>
            </Component>
        <Box2>
          
            <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
            />

        </Box2>

        </Dialog>
        
    )
}
export default LoginDialog;