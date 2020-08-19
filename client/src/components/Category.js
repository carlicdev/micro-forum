import React from 'react';
import { allThreads as data } from '../data';
import Thread from './Thread';
import ThreadForm from './ThreadForm';

const Category = () => {
    return (
        <div>
            {
                data.map(thread => {
                    return <Thread thread={thread} key={thread.id} />
                })
            }
            <ThreadForm />
        </div>
    )
}

export default Category;
