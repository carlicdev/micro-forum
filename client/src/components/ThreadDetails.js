import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allThreads as data } from '../data';
import Comment from './Comment';
import CommentForm from './CommentForm';
const singeThread = data[0]

const ThreadDetails = ({match}) => {
    const [isOpen, setIsOpen] = useState(false),

    toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className='text-center'>
                <h1>Hi from threadDetails</h1>
                <p>{match.params.slug}</p>
                <div className='mx-auto'>
                    {
                        singeThread.comments.map(comment => {
                            return <Comment key={comment.id} comment={comment}/>
                        })
                    }
                </div>
                <div className='flex py-2 max-w-4xl mx-auto'>
                <button 
                    onClick={() => setIsOpen(true)}
                    className='mr-2 ml-auto rounded px-2 py-1 text-white  bg-blue-600'>
                    Write a Comment
                </button>
                </div>
                {
                    isOpen && (
                        <CommentForm slug={match.params.slug} toggler={toggleIsOpen}/>
                    )
                }
                <button className='border border-red-600 bg-red-400 text-semibold rounded text-white px-4 py-1'>
                    <Link to='/'>
                        Back
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default ThreadDetails;