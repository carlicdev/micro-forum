import React, { useState } from 'react';
import axios from 'axios';

const ThreadForm = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/forum/new-thread', {
            category, 
            title, 
            comment
        });
        setCategory('');
        setTitle('');
        setComment('');
    }

    return (
        <div className='bg-gray-100 border border-gray-500 max-w-4xl mx-auto mt-2 rounded'>
            <div className='flex bg-gray-400 p-1'>
                <p className='text-left'>Create new thread as: John</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap w-full bg-gray-400'>
                    <div className='md:w-1/2 w-full px-2'>
                        <div className='w-full bg-gray-400'>
                            <p className='w-1/2'>Category:</p>
                        </div>
                        <input className='w-full focus:outline-none px-1 rounded' 
                            name='category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className='md:w-1/2 w-full px-2'>
                        <div className='w-full bg-gray-400'>
                            <p className='w-1/2'>Title:</p>
                        </div>
                        <input className='w-full focus:outline-none px-1 rounded' 
                            name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full bg-gray-400'>Thread Content</div>
                        <textarea rows='8' className='w-full focus:outline-none px-1'
                                name='comment'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                        />
                </div>
                <div className='flex bg-gray-400 p-2'>
                    <button 
                    type='submit'
                    className='mr-2 ml-auto rounded px-2 py-1 text-white  bg-blue-600'>
                        Create thread
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ThreadForm;
