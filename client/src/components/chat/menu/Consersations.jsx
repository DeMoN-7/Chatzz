import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation, getConversation } from '../../../service/api';
import { formatDate } from '../../../utils/common-utils';

const Component = styled(Box)`
    display:flex;
    height : 45px;
    padding: 13px 0;
    cursor : pointer;
    

`;
const Container = styled(Box)`
    display: flex;
`;
const Image = styled('img')({
    width: 40,
    height: 40,
    borderRadius: '50%',
    padding: '0 10px',
    objectFit: 'cover',

})
const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;
const Text = styled(Typography)`
    display: block;
    color: #a2a2a2;
    font-size: 14px;
`;
const Consersations = ({ user }) => {

    const { setPerson, account, newMessageFlag } = useContext(AccountContext);
    // const { account, newMessageFlag }  = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }

    // const { account } = useContext(AccountContext);
    return (<>
        {user.sub !== account.sub &&
            <Component onClick={() => getUser()}>

                <Box style={{ padding: ' 0 10px 0 0' }}>
                    <Image src={user.picture} />
                </Box>
                <Box style={{ width: '100%' }}>
                    <Container>
                        <Typography>{user.name}</Typography>
                        {
                            message?.text &&
                            <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                        }
                    </Container>
                    <Box>
                        <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                    </Box>
                </Box>
            </Component>}
    </>
    )
}

export default Consersations