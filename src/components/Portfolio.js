import React from 'react'
import port1 from '../images/portfolio/port-1.jpg'
import port2 from '../images/portfolio/port-2.jpg'
import port3 from '../images/portfolio/port-3.jpg'
import port4 from '../images/portfolio/port-4.jpg'
import port5 from '../images/portfolio/port-5.jpg'


const Portfolio = () => {
    return(
        <div id='portfolio' className='text-slate-300 p-5 my-10 text-center'>
            <p className='text-base text-red-600 uppercase'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h2 className='text-6xl pb-3.5 font-semibold mb-2 text-slate-100'>My Portfolio</h2>
            <div className='flex justify justify-center mb-3'>
                <div className='basis-1/4 p-3 text-center'>
                    <img className='mb-2 hover:scale-110 transition cursor-pointer	' src={port1} />
                    <h3 className='mb-1 text-xs font-bold uppercase text-red-600'>Web Design</h3>
                    <p>I use animation as a third dimension</p>
                </div>
                <div className='basis-1/4 p-3 text-center'>
                    <img className='mb-2 hover:scale-110 transition cursor-pointer	' src={port2} />
                    <h3 className='mb-1 text-xs font-bold uppercase text-red-600 '>Web Development</h3>
                    <p>I use animation as a third dimension</p>
                </div>
                <div className='basis-1/4 p-3 text-center'>
                    <img className='mb-2 hover:scale-110 transition cursor-pointer	' src={port3} />
                    <h3 className='mb-1 text-xs font-bold uppercase text-red-600'>Database Managment</h3>
                    <p>I use animation as a third dimension</p>
                </div>
            </div>
            <div className='flex justify justify-center mb-3'>
                <div className='basis-1/4 p-3 text-center'>
                    <img className='mb-2 hover:scale-110 transition cursor-pointer	' src={port4} />
                    <h3 className='mb-1 text-xs font-bold uppercase text-red-600'>App Design</h3>
                    <p>I use animation as a third dimension</p>
                </div>
                <div className='basis-1/4 p-3 text-center'>
                    <img className='mb-2 hover:scale-110 transition cursor-pointer	' src={port5} />
                    <h3 className='mb-1 text-xs font-bold uppercase text-red-600 '>App Development</h3>
                    <p>I use animation as a third dimension</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

