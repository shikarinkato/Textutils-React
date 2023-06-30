import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = ({ darkTheme, setdarkTheme }) => {
    const [input, setInput] = useState("");
    // const [darkTheme, sedarkTheme] = useState(darkTheme)
    // const changedarkTheme = () => {
    //     setdarkTheme(!darkTheme)
    // }

    return (
        <nav className=' flex justify-start items-center min-w-screen bg-gray-300 p-2  relative dark:bg-gradient-to-tr from-orange-500 via-red-500 to-orange-700 '>
            <div >
                <Link to='/'>
                    <h1 className='text-3xl cursor-pointer Ftext-black dark:text-gray-200' >Textutils</h1>
                </Link>
            </div>
            <div className="extratags ml-3 mr-3">
                <ul className=' flex justify-between items-center text-xl flex-wrap' >
                    <li className='m-3 cursor-pointer text-black dark:text-gray-200'><Link to='/Projects'>Projects</Link></li>
                    <li className='m-3 cursor-pointer text-black dark:text-gray-200'><Link to='/'>Services</Link></li>
                    <li className='m-3 cursor-pointer text-black dark:text-gray-200'><Link to='/Contactus'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='flex justify-between items-center' >
                <input type="text" className='rounded-full p-2 outline-none' placeholder='search here' value={input} onChange={(e) => (setInput(e.target.value))} />
                <i className='material-symbols-outlined m-2 p-2 bg-gradient-to-tr  from-cyan-300  to-cyan-600 rounded-full cursor-pointer  hover:shadow-lg dark:bg-gradient-to-tr from-sky-500 to-blue-600 dark:text-gray-200'>search</i>
            </div>
            <div className='flex justify-center items-center absolute mode'>
                <button className='cursor-pointer  text-black bg-white   hover:shadow-lg pt-2 pb-2 pl-3 pr-3  rounded-full  dark:bg-gray-950 dark:text-white' onClick={() => setdarkTheme(!darkTheme)} >
                    {darkTheme ? 'Light' : 'Dark'}
                </button>
            </div>
        </nav >
    );
};

