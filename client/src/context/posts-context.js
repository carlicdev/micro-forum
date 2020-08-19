import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ForumContext = createContext();

const ForumContextProvider = (props) => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const getThreads = async () => {
            const res = await axios.get('/forum');
            setThreads(res.data)
        }
        getThreads();
    }, [])

    return (
        <ForumContext.Provider value={{threads}}>
            {props.children}
        </ForumContext.Provider>
    )
}

export default ForumContextProvider;
