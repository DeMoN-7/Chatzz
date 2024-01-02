import React, { useEffect } from 'react'
import { Box , InputBase,styled} from '@mui/material'
import {EmojiEmotionsOutlined,AttachFile,Mic} from '@mui/icons-material';
import { uploadFile } from '../../../service/api';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;

`;

const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg)'
`;
const Footer = ({sendText,setValue,value,file,setFile,setImage}) => {
    useEffect(()=>{
        const getImage = async () =>{
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);
                console.log(data);
                console.log(file);
                console.log(data.id);
                console.log(file.id)
                //calling upload file api which is responsible for file upload(image here)
                let response  = await uploadFile(data);
                setImage(response.data);//cannot find this one
            }
        }
        getImage();
    },[file])
    
    const onFileChange = (e)=>{
        // setting file name for use state and for file name
        setFile(e.target.files[0]);
        //setting vale for input field to show
        setValue(e.target.files[0].name);
    }
    return (
        <Container>
            <EmojiEmotionsOutlined/>
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            <Search>
                <InputField
                placeheloder = "Type a message"
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={(e)=>{sendText(e)}}
                value = {value}
                />
            </Search>
            <Mic/>
        </Container>
    )
}

export default Footer