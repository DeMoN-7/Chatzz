import { Box, Typography, styled } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'

const ImageContainer = styled(Box)`
    display:flex;
    justify-content:center;
`
const Image = styled('img')({
    width:150,
    height:150,
    borderRadius:'50%',
    padding: '25px 0'
})

const Wrapper = styled(Box)`
    background:white;
    padding: 12px 30px 2px;
    box-shadow : 0 1px 3px rgba(0,0,0,0.08);
    & : first-of-type{
        font-size: 13px;
        color: #009688;
        font-weight:200;
    }
    & : last-child{
        margin: 14px 0;
        color: #4a4a4a;
    }
`

const DescContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p{
        font-size: 13px;
        color: #8696a0;
    }
`

const Profile = () => {
    const {account} = useContext(AccountContext);
  return (
    <>
        <ImageContainer>
            <Image src = {account.picture} alt="dp"/>
        </ImageContainer>
        <Wrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </Wrapper>
        <DescContainer>
            <Typography> This is not your username or pin. This name will be visible to your whatsapp contacts</Typography>
        </DescContainer>
        <Wrapper>
            <Typography>About</Typography>
            <Typography> Hi im using watsapp</Typography>
        </Wrapper>
    </>
  )
}

export default Profile