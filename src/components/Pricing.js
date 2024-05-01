import React from 'react';
import pricing from '../data/pricing'
import Basic from './Basic';
import Standard from './Standard';
import Premium from './Premium';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Pricing = () => {
    console.log(pricing)
    return (

        <div className='text-slate-300 flex p-5'>
            <div className='basis-1/2 p-5'>
                <p className='text-base text-red-600 uppercase'>pricing</p>
                <h2 className='text-6xl font-semibold text-slate-100'>My Pricing</h2>
            </div>
            <div className='basis-1/2 p-5'>

                <BrowserRouter>

                    <ul className='text-slate-100 flex justify-around mb-12'>
                        <li><Link to="/">Basic</Link></li>
                        <li><Link to="/pricing/standard">Standard</Link></li>
                        <li><Link to="/pricing/premium">Premium</Link></li>
                    </ul>

                    <Routes>
                        <Route path="/" element={<Basic prc={pricing} />} />
                        <Route path="/pricing/standard" element={<Standard prc={pricing} />} />
                        <Route path="/pricing/premium" element={<Premium prc={pricing} />} />
                    </Routes>

                </BrowserRouter>

                

            </div>
        </div>
    );
};

export default Pricing;