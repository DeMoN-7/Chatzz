import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data)=>{
    try{
        await axios.post(`${url}/add`,data);

    }catch(error){
        console.log('an error occured  api .js',error);
    }
}

export const getUsers = async()=>{
    try {
        let responce = await axios.get(`${url}/users`)
        return responce;
    } catch (error) {
        console.log('an error occured  api .js',error);
    }
}



export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const newMessage = async (data)=>{
    try {
        await axios.post(`${url}/message/add`,data);
    } catch (error) {
        console.log('Error while calling newMessage API api.js', error);
    }
}

export const getMessage = async (id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }catch(error){
        console.log('Error while calling getmessage API api.js', error);
    }
}

export const uploadFile = async (datas) => {
    try {
        return await axios.post(`${url}/file/upload`,datas);
    } catch (error) {
        console.log('Error while calling uploadfile API api.js', error);
    }
}