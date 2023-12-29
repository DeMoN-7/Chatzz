import { useContext } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { Box,styled} from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";




const Component=styled(Box)`
height:44px;
background:#464242;
padding:8px 6px;
border:1.3px solid #232323;
`


const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;

const Image=styled('img')(
    {
        height:'50px',
        width:'50px',
        borderRadius:"50%",
    }
)


const Header=()=>
{

    const{account}=useContext(AccountContext);

    return(
        <>
        <Component>
            <Image src={account.picture} alt="Profile" />
        </Component>
        <Wrapper>
            {/* <MessageIcon/> */}
        </Wrapper>
        </>
    )
}
export default Header;