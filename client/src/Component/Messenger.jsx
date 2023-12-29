
// Component
import LoginDialog from "./LoginDialog";
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import ChatDialog from "./Chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../Context/AccountProvider";



const Component=styled(Box)`
height:100vh;
background:#181818;
`


const LoginHeader=styled(AppBar)`
height:230px;
background-color:#ff0000;
box-shadow:none;
`
const Header=styled(AppBar)`
height:125px;
background-color:#ff0000;
box-shadow:none;
`

const Messenger =()=>{

    const {account}=useContext(AccountContext);


    return(
        <Component>
            {
                account ?
                <>
                    <Header>
                    <Toolbar>

                    </Toolbar>
                    </Header>
                    <ChatDialog/>

                    </>
                :
                <>
                <LoginHeader>
                <Toolbar>

                </Toolbar>
                </LoginHeader>
                <LoginDialog/>
                
                </>
    }
        </Component>
    )
}
export default Messenger;