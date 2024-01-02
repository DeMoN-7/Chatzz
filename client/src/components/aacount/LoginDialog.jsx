import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import  qrCodeImage  from "../../constants/CHatzz.png";
// import qrCodeImae from '../../images/CHatZZ.png';

import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from "jwt-decode";

import { addUser } from "../../service/api";
const Component = styled(Box)`
  display: flex;
`;
const dialogstyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  color: "#ff0000",
  background: "#363636",
};

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

// const Title = styled(Typography)`
//   font-size: 1.5vw;
//   font-weight: 300;
//   color: #525252;
//   font-family: inherit;
//   margin-bottom: 25px;
// `;
const Component1=styled(Box)`
    padding:20px;
    font-size:1.2rem;
    font-weight:700px;

`
const Box1 = styled(Box)`
  margin-left: 10px;
`;
const Box2 = styled(Box)`
  margin-top: 30px;
  margin-left: 33%;
  height: 50px;
  width: 250px;
`;
const Box3 = styled(Box)`
  margin-top: 60px;
  margin-left: 3%;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    // color:#4A4A4A;
  }
`;
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decode = jwt_decode(res.credential);
    setAccount(decode);
    await addUser(decode);
  };
  const onLoginError = (res) => {
    console.log("Login failed ", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Component>
        <Container>
        <Component1>To Use ChatZZ</Component1>
          <StyledList>  
            <ListItem>1. Welcome To ChatZZ</ListItem>
            <ListItem>2. Login With the Google Account</ListItem>
            <ListItem>3. Developed By Ayush</ListItem>
          </StyledList>
        </Container>
        <Box3>
        <img src={qrCodeImage} alt="qr Code"  />
        </Box3>
      </Component>
      <Box2>
        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
      </Box2>

      {/* </Component> */}
    </Dialog>
  );
};

export default LoginDialog;
