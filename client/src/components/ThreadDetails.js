import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import CommentForm from './CommentForm';

const ThreadDetails = ({match}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [thread, setThread] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/forum/${match.params.slug}`);
            setThread(res.data[0]);
        }
        getPost();
    }, [isOpen])


    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    console.log(thread)
    return (
        <div>
        {
            !thread && (
                <p>Loading...</p>
            )
        }
        {
            thread && (
                <div className='text-center'>
                    <h1>Hi from threadDetails</h1>
                    <p>{match.params.slug}</p>
                    <div className='mx-auto'>
                        {
                            thread.comments.map(comment => {
                                return <Comment key={comment._id} comment={comment}/>
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
            )
        }
        </div>
    )
}

export default ThreadDetails;