import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { Redirect } from "react-router-dom";
import {addChat} from '../../actions/chat';
import {username} from '../../actions/user';


export default function Input() {
    
    const dispatch = useDispatch()


    const [login, setlogin] = useState(username.IsSet);
    const style1 ={ 
        position:"relative",
        width: "50%",
        display: "flex",
    }

    const style2 ={ 
        position:"relative",
        width: "80%",
    }

    const style3 ={ 
        position:"relative",
        width: "20%",
    }

    
    var message
    const setmessage = (temp) => {
        message = temp;
        console.log(message);
    }

    const postmessage = () =>{
        var temp = {
            name: username.User,
            message: message
        }
        dispatch(addChat(temp));
        document.getElementById("inputDefault").value = "";
    }

    return (
            <div className="form-group" style = {style1}>
                {!login ? <Redirect to="/" /> : null}
                <input type="text" className="form-control" placeholder="Default input" id="inputDefault" onChange={e => setmessage(e.target.value)} style={style2}></input>
                <button type="button" className="btn btn-primary" onClick={postmessage} style={style3}>Submit</button>
            </div>
            
    )
}
