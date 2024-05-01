import React from 'react'
import projects from '../data/projects'


const Portfolio = () => {
    return (

        <div id='portfolio' className='text-slate-300 p-5 my-10 text-center'>
            <p className='text-base text-red-600 uppercase'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h2 className='text-6xl pb-3.5 font-semibold mb-2 text-slate-100'>My Portfolio</h2>
            <div className='flex flex-wrap justify-around gap-y-4 mb-3 flex-col lg:flex-row'>
                {
                    projects.map((project) => {
                        return (
                            <div className='basis-1/3 p-3 text-center'>
                                <img className='mb-2 hover:scale-110 transition cursor-pointer	' src={project.img} />
                                <h3 className='mb-1 text-xs font-bold uppercase text-red-600'>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        );
                    })
                }
            </div>
    
        </div>
    );
};

export default Portfolio;

