import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Theme from './Theme'
import { AuthContext } from '@/context/AuthContext';

const Header = () => {
    const location = useLocation();
    const { user , logoutUser} = useContext(AuthContext);
    // console.log("AuthContext Value: ", authContextValue);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this state

    const isCurrentPath = (path) => {
        return location.pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Update the state on button click
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="shield.svg" className="h-8" alt="Auth System Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Auth System</span>
                </Link>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokelinewidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className={`block py-2 px-3 rounded md:p-0 ${isCurrentPath('/') ? 'text-white bg-blue-700 md:text-blue-700 md:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700'}`} aria-current="page">Home</Link>
                        </li>

                        <li>
                            <Link to="/register" className={`block py-2 px-3 rounded md:p-0 ${isCurrentPath('/register') ? 'text-white bg-blue-700 md:text-blue-700 md:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700'}`}>Register</Link>
                        </li>

                        <li>
                            <Theme />
                        </li>

                        {user ? (
                            <li>
                                <p className={`block py-2 px-3 rounded md:p-0 ${isCurrentPath('/login') ? 'text-white bg-blue-700 md:text-blue-700 md:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700'} cursor-pointer`} onClick={logoutUser}>Logout</p>
                            </li>

                        ) : (
                            <li>
                                <Link to="/login" className={`block py-2 px-3 rounded md:p-0 ${isCurrentPath('/login') ? 'text-white bg-blue-700 md:text-blue-700 md:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700'}`}>Login</Link>
                            </li>
                        )}


                        {/* {user && (
                            <li>
                                <span className='text-black dark:text-white bg-blue-700  md:bg-transparent'>
                                    Hello {user.username}
                                </span>
                            </li>
                        )} */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
