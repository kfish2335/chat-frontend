import axios from 'axios';
import {useEffect} from 'react';
import {GET_CHAT, ADD_CHAT} from './types';

// GET CHAT

export const getChat = () => dispatch =>{
    axios.get('/api/chat/')
        .then(res => {
            dispatch({
                type: GET_CHAT,
                payload: res.data
            });
        }).catch( err => console.log(err)); 
}

export const addChat = (chat) => dispatch =>{
    axios.post('/api/chat/', chat)
        .then(res => {
            dispatch({
                type: ADD_CHAT,
                payload: res.data
            });
        }).catch( err => console.log(err));
}