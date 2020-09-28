import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Chatbox from './loginComp/Chatbox.js';
import Input from './loginComp/Input.js';
import {getChat} from '../actions/chat';

export default function Login() {
    
    return (
        <div>
            <div>
                <div style = {{marginTop:"3%", position:"absolute", left:"30%", width:"70%"}}>
                    <Chatbox />
                    <Input />
                </div>
            </div>  
        </div>
    )
}
