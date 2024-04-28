import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div id='features' className='text-slate-300 p-5 my-10'>
            <p className='text-base text-red-600 uppercase'>Features</p>
            <h2 className='text-6xl pb-3.5 font-semibold mb-2 text-slate-100'>What I Do</h2>
            <div className='flex justify justify-center'>
                <div className='basis-1/4 p-3 text-center'>
                    <FontAwesomeIcon className='mb-3 text-5xl text-red-600' icon={faCode} />
                    <h3 className='mb-3 text-2xl font-bold'>Web Development</h3>
                    <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction</p>
                </div>
                <div className='basis-1/4 p-3 text-center'>
                    <FontAwesomeIcon className='mb-3 text-5xl text-red-600' icon={faCode} />
                    <h3 className='mb-3 text-2xl font-bold'>Web Development</h3>
                    <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction</p>
                </div>
                <div className='basis-1/4 p-3 text-center'>
                    <FontAwesomeIcon className='mb-3 text-5xl text-red-600' icon={faCode} />
                    <h3 className='mb-3 text-2xl font-bold'>Web Development</h3>
                    <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction</p>
                </div>
            </div>
        </div>
    );
};

export default Features;