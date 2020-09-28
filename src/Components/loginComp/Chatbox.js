import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {username} from '../../actions/user';
import PropTypes from 'prop-types';
import {getChat} from '../../actions/chat'
import chat from '../../reducers/chat';

export default function Chatbox() {
    
    const chats = useSelector(state => state.chat)
    
    const useFetching = () =>{
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getChat())
        })
    }

    useFetching();

    useEffect(()=>{
        const element = document.getElementById("chatboxid");
        element.scrollTop = element.scrollHeight;
    }, )

    const styleOfmess ={ 
        width: "50%",
        position:"relative",
        height: "75vh", 
        overflow: "auto",
        display: "inline-flex",
    }

    const styleOfbody ={ 
        display: "flex",
        position: "relative",
    }


    function message(temp){
        
        const style1 = {
            margin: "10px",
            display: "inline-flex",
            position: "relative",
            width: "200px",
            height: "auto",
            backgroundColor: "grey",
            right: "0"
        }

        const style2 = {
            padding: "5px",
            textAlign: "left",
            lineHeight: "1em",
        }
        const style3 = {
            fontSize: "12px"
        }
        const style4 = {
            fontSize: "8px",
            textAlign: "right"
        }

        return(
            (<div className = {temp.name==username.User ? "move": null} style = {style1}>
                <div style = {style2}>
                    <p style = {style3}>{temp.message}</p>
                    <p style = {style4}>~{temp.name} {temp.created_at.substr(5,5)}-{temp.created_at.substr(0,4)} {temp.created_at.substr(11,11)}</p>
                
                </div>
            </div>
        ))
    }

    return (
        <div  style = {styleOfbody}>
            < div className="card border-primary mb-3 test" id="chatboxid" style = {styleOfmess}>
                {chats.chat.map(chat => message(chat))}
            </div>
        </div>
    )
}
