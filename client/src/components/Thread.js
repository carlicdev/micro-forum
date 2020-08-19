import React from 'react';
import { Link } from 'react-router-dom';

const Thread = ({thread}) => {
    return (
        <div className='bg-gray-100 border max-w-4xl border-gray-400 p-2 mx-auto'>
            <div className='grid grid-cols-5'>
                <div className='col-span-4'>
                    <p className='text-xl font-semibold text-blue-800'>
                        <Link to={`/${thread.slug}`}>
                            {thread.title}
                        </Link>
                    </p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm italic'>{thread.date}</p>
                </div>
            </div>
            <div className='grid grid-cols-3 text-center'>
                <div className='col-span-1'>
                    <p className='text-sm italic text-left'>Started by: <span className='not-italic'>{thread.author}</span></p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-gray-700'>Visitas: {thread.views}</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-sm text-gray-700'>Respuestas: {thread.comments.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Thread;
