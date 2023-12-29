
import { Dialog,Box,styled } from "@mui/material";

// component import
import Menu from "./Menu/Menu";
import EmptyChat from "./Chat/EmptyChat";


const Component=styled(Box)`
display:flex;

`
const LeftComponent=styled(Box)`

min-width:450px;

`
const RightComponent=styled(Box)`

width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14);

`


const DialogStyle={
    height:'95%',
    width:'100%',
    margin:'20px',
    borderRadius:0,
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'none',
    color:'#ff0ff0',
    background:'#363636',
    // background:'#660066',
    
}


const ChatDialog=()=>{
    return(
        <Dialog open={true} 
        PaperProps={{sx:DialogStyle}}
        maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu></Menu>
                </LeftComponent>
                <RightComponent>
                    <EmptyChat/>

                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;