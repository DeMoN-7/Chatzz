//libs
import { Box } from "@mui/material"

//component
import Header from "./Header"
import Search from "./Search"
import Conversation from "./Conversation"
import { useState } from "react";


const Menu = ()=>{
    const [text,setText] = useState('');
    return (
        <Box>
            <Header/>
            <Search setText = {setText} />
            <Conversation text = {text}/>
        </Box>
    )
}

export default Menu