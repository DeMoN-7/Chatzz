import { Box, Divider } from '@mui/material'
import  emptyChatImage  from '../../../constants/CHatzz.png'
import styled from '@emotion/styled'

const Component = styled(Box)`
  background:#565656;
  padding:30px 0;
  text-align: center;
  height:100%;

`
const Container = styled(Box)`
  padding: 0 200px;
`
const Image = styled('img')({
  width: 400,
  marginTop: 100
})
const Title = styled(Box)`
  font-size:32px;
  margin25px 0 10px 0;
  font-family: inherit;
  font-weight:300;
  color:#f200f2
`
const SubTitle = styled(Box)`
  font-size:14px;
  color:#f200f2;
  font-weight:400;
  font-family:inherit;
`
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt='whatsapp ' referrerpolicy="no-referrer"/>
        <Title>ChatZZ </Title>
        <SubTitle> Select Chat to Start</SubTitle>
        <Divider />
      </Container>
    </Component>
  )
}

export default EmptyChat;