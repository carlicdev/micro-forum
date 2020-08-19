import React, { useContext } from 'react';
import Thread from './Thread';
import ThreadForm from './ThreadForm';
import { ForumContext } from '../context/posts-context';

const Category = () => {
    const { threads } = useContext(ForumContext);
    return (
        <div>
            {
                threads.map(thread => {
                    return <Thread thread={thread} key={thread._id} />
                })
            }
            <ThreadForm />
        </div>
    )
}

export default Category;
