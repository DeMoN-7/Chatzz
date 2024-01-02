//libs
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box,styled } from '@mui/material';
import { InputBase } from '@mui/material';

const Component = styled(Box)`
    // background-color:#fff;
    
    color:'#ff0ff0',
    background:'#363636',
    height:45px;
    border:1.5px solid #858585;
    display:flex;
    align-items:center;
`
const Wrapper = styled(Box)`
    font-color: #363636;
    position:relative;
    margin:0 13px;
    width:100%;
    border:1.2px solid #363636;
    border-radius:10px;
`
const Icon = styled(Box)`
    position:absolute;
    height: 100%;
    padding: 8px 10px;
    color: ##363636;
`
const InputField = styled(InputBase)`
    width: 100%;
    padding:16px;
    font-color: ##363636;
    padding-left:65px;
    height: 15px;
    width:100%;
    font-size:14px;
`
const Search = ({setText}) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon 
                    fontSize='small'
                    />
                </Icon>
                <InputField
                    placeholder='Search or start new Chat'
                    onChange = {(e)=>{
                        setText(e.target.value)
                    }}
                />
            </Wrapper>
        </Component>
    )
}

export default Search