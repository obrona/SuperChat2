import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaReact } from 'react-icons/fa6'
import _ from 'lodash'
import socketIOClient from 'socket.io-client'

import './style.css'


function UserLogin({setUser, setMod}) {
    const [username, setUsername] = useState('')
    const [module, setModule] = useState('')
    //const socketio = socketIOClient('https://chatbackend.adaptable.app/')
    const history = useHistory()
    
    function handleUser() {
        if (!username || !module) return;
        //localStorage.setItem('user', userName)
        setUser(username)
        setMod(module)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1,1000)}/200/300`)
        console.log("going now")
        history.push('/chat')
        
    }
    
    return (
        <div className='login_container'>
            <div className='login_title'>
                <FaReact className='login_icon'/>
                <h1>Chat App</h1>
            </div>
            <div className='login_form'>
                <input type='text' placeholder='Enter a Unique Name' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='text' placeholder='Enter the module you want to join' value={module} onChange={(e) => setModule(e.target.value)} />
                <button onClick={handleUser}>Login</button>

            </div>
        </div>
    )
}

export default UserLogin