import React, { useState } from 'react'

const CommentForm = (props) => {
    const [comment, setComment] = useState('');

    return (
        <div className='bg-gray-100 border border-gray-500 max-w-4xl mx-auto mt-2 rounded'>
            <div className='flex bg-gray-400 p-1'>
                <p className='text-left'>Comment as: John</p>
            </div>
            <div className='w-full p-1'>
                <form>
                    <textarea rows='8' className='w-full focus:outline-none'
                            name='comment'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                    />
                </form>
            </div>
            <div className='flex bg-gray-400 p-2'>
                <button 
                    onClick={props.toggler}
                    className='mr-2 ml-auto rounded px-2 py-1 text-white  bg-blue-600'>
                    Comment
                </button>
            </div>
        </div>
    )
}

export default CommentForm
