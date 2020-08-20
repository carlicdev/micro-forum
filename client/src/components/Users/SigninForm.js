import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/session-context';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { _signin } = useContext(SessionContext);

    const handleSubmit = e => {
        e.preventDefault();
        _signin(username, email, password);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className='bg-gray-100 border border-gray-500 max-w-sm mx-auto mt-2 rounded'>
            <div className='flex bg-gray-400 justify-center'>
                <p className='text-xl font-semibold'>Login</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap w-full py-2 px-5'>
                    <p className='w-full text-gray-900 font-semibold'>
                        Username:
                    </p>
                    <input className='w-full focus:outline-none focus:shadow-outline px-1 rounded border border-gray-400'
                        type='text'
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className='w-full text-gray-900 font-semibold mt-2'>
                        Email:
                    </p>
                    <input className='w-full focus:outline-none focus:shadow-outline px-1 rounded border border-gray-400'
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                                        <p className='w-full text-gray-900 font-semibold'>
                        Password:
                    </p>
                    <input className='w-full focus:outline-none focus:shadow-outline px-1 rounded border border-gray-400'
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='w-full text-gray-900 font-semibold mt-2'>
                        Confirm Password:
                    </p>
                    <input className='w-full focus:outline-none focus:shadow-outline px-1 rounded border border-gray-400'
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button 
                        type='submit'
                        className='mx-auto mt-2 font-semibold shadow rounded px-3 py-1 text-white  bg-blue-600'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
