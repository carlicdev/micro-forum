import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../context/session-context'

const Navbar = () => {
    const { user, _logout} = useContext(SessionContext);

    return (
        <div className='w-full bg-gray-400 py-2'>
            <div className='flex'>
                <p className='ml-2 mr-auto inline'>Logo</p>
                <p className='ml-2 mr-auto inline'>
                    <Link to='/forum'>
                        Forum
                    </Link>
                </p>
                {
                    user && (
                        <div>
                            <p className='mr-2 ml-auto inline'>Logged as {user.username}</p>
                            <button className='mr-2 px-1 bg-red-600 inline text-white rounded focus:outline-none'
                                onClick={_logout}
                            >
                                logout
                            </button>
                        </div>
                    )
                }
                {
                    !user && (
                        <div>
                            <p className='mr-2 ml-auto inline'>
                                <Link to='/signin'>
                                    Register
                                </Link>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
