import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className='text-right mb-3 fixed '>
                <ul className='flex text-slate-400'>
                    <li className='p-3 cursor-pointer'>Home</li>
                    <li className='p-3 cursor-pointer'>FEATURES</li>
                    <li className='p-3 cursor-pointer'>PORTFOLIO</li>
                    <li className='p-3 cursor-pointer'><a href='#contact'>CONTACT</a></li>
                </ul>
            </div>

    );
};

export default Navbar;