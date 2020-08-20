import React, { useState, useContext } from 'react';
import axios from 'axios';
import { SessionContext } from '../context/session-context';

const CommentForm = (props) => {
    const [comment, setComment] = useState('');
    const { user } = useContext(SessionContext);


    const handleSubmit = e => {
        e.preventDefault();
        axios.patch(`/forum/${props.slug}`, { comment:comment, author: user.username });
        setComment('');
        props.toggler();
    }

    return (
        <div className='bg-gray-100 border border-gray-500 max-w-4xl mx-auto mt-2 rounded'>
            <div className='flex bg-gray-400 p-1'>
                <p className='text-left'>Comment as: {user ? user.username : 'Guest'}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='w-full p-1'>
                        <textarea rows='8' className='w-full focus:outline-none'
                                name='comment'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                        />
                </div>
                <div className='flex bg-gray-400 p-2'>
                    <button 
                        type='submit'
                        className='mr-2 ml-auto rounded px-2 py-1 text-white  bg-blue-600'>
                        Comment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm
