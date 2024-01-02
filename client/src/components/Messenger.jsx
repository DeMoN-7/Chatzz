//Lib imports
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { useContext } from "react";
//Components
import LoginDialog from "./aacount/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
  height: 125px;
background-color:#ff0000;

  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 230px;
  background-color: #df0000;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background: #181818;
`;

const Messanger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>

          <LoginDialog />
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>

          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messanger;
