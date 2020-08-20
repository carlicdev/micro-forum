import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);

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
    },[])


    const _login = (username, password) => {
        axios.post('/users/login', {
            username,
            password,
        });
    };

    const _logout = () => {
        axios.post('/users/logout');
        setUser(null);
    }

    const _signin = (username, email, password) => {
         axios.post('/users/signin', {
            username, 
            email,
            password
        });
    };

    console.log(user)
    console.log(logged)
    return (
        <SessionContext.Provider value={{
            user,
            _login,
            _logout,
            _signin
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;
