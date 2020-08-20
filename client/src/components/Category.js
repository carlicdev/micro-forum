import React, { useContext } from 'react';
import Thread from './Thread';
import ThreadForm from './ThreadForm';
import { ForumContext } from '../context/posts-context';
import LoginForm from './Users/LoginForm';
import { SessionContext } from '../context/session-context';

const Category = () => {
    const { threads } = useContext(ForumContext);
    const { user } = useContext(SessionContext);

    return (
        <div>
            {
                threads.map(thread => {
                    return <Thread thread={thread} key={thread._id} />
                })
            }
            {
                user && (
                    <ThreadForm />
                )
            }
            {
                !user && (
                    <LoginForm />
                )
            }
        </div>
    )
}

export default Category;
