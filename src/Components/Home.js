import React, { useState } from 'react';
import {setUser, username} from '../actions/user.js';
import { Redirect } from "react-router-dom";

export default function Home() {
    const styleOfuser ={
        position: "absolute",
        top: "50%",
        width: "80%",
        marginLeft: "10%"
    }
    const [login, setlogin] = useState(false);

    var user;
    const typehandler = (e)=>{
        user = e.target.value;
        console.log(user);
    }
    const submithandler = (e)=>{
        if(e.key === 'Enter' && user != ''){
            setUser(user);
            setlogin(true);
        }
    }

    return (
        <div>
            {login ? <Redirect to="/login" /> : null}
            <div className="form-group" style = {styleOfuser}>
            <label className="col-form-label col-form-label-lg" for="inputLarge">UserName Here:</label>
            <input className="form-control form-control-lg" type="text" id="inputLarge" onChange={typehandler} onKeyDown={submithandler}></input>
            </div>
            
        </div>
    )
}
