import React, {useState} from 'react';
// import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx';
import {GrFormClose} from "react-icons/gr";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
            <ul className='hidden md:flex'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'  >About</a></li>
            <li><a href='#'  >Support</a></li>
            <li><a href='#'  >Platforms</a></li>
            <li><a href='#' >Pricing</a></li>
            </ul>
            </div>
            <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'>
                Sign In
            </button>
            <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <RxHamburgerMenu className='w-5' /> : <GrFormClose className='w-5' />}
            
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><a href='#'>Home</a></li>
            <li className='border-b-2 border-zinc-300 w-full'><a href='#'>About</a></li>
            <li className='border-b-2 border-zinc-300 w-full'><a href='#'>Support</a></li>
            <li className='border-b-2 border-zinc-300 w-full'><a href='#'>Platforms</a></li>
            <li className='border-b-2 border-zinc-300 w-full'><a href='#'>Pricing</a></li>

            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
        </div>
    );
};

export default Navbar;