import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const userData = await axios.get('/users/user');
            if(userData.data.msg) {
                setUser(null)
            }
            if(userData.data.user){
                setUser(userData.data.user)
            }
        }
        getUser()
    }, [])

    const _login = (username, password) => {
        axios.post('/users/login', {
            username,
            password,
        })
    }

    console.log(user)
    return (
        <SessionContext.Provider value={{
            user,
            _login
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;
