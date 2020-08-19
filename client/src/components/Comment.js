import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className='bg-gray-100 border border-gray-500 max-w-4xl  mx-auto'>
            <div className='flex bg-gray-400 p-1'>
                <p className='text-left text-sm'>Comment by: {comment.author}</p>
                <p className='ml-auto mr-2 text-sm'>{comment.date}</p>
            </div>
            <div className='w-full p-4'>
                <p className='text-left text-jusitify'>{comment.content}</p>
            </div>
            <div className='flex bg-gray-400'>
                <p className='text-sm  ml-auto mr-2'>{comment.likes}</p>
            </div>
        </div>
    )
}

export default Comment;
