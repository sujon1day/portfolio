import React from 'react';
import bannerImage from '../images/bannerImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from "react-typed";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div id='home' className='flex p-5 flex-col lg:flex-row'>
            <div className='basis-3/6 text-slate-300 p-1 flex flex-col justify-center items-start'>
                <p className='text-base	pb-3.5'>WELCOME TO MY WORLD</p>
                <h2 className='text-6xl pb-3.5 font-semibold text-slate-100'>Hi, I’m <span className='text-red-600	'>Sujon</span></h2>
                <h3 className='text-5xl pb-3.5 font-semibold text-slate-100'>
                    <ReactTyped
                        strings={[
                            "a Front End Developer",
                            "a React Developer",
                            "a javascript Developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    ></ReactTyped>
                </h3>
                <p className='text-base pb-3.5'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                <button className='mb-3.5 text-red-600 hover:scale-105 transition'>Download Resume <FontAwesomeIcon icon={faDownload} /></button>

                <br></br>

                <ul className='flex'>
                    <li className='mr-5 cursor-pointer hover:text-red-600 transition hover:scale-125'><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li className='mr-5 cursor-pointer hover:text-red-600 transition hover:scale-125'> <FontAwesomeIcon icon={faLinkedinIn} /></li>
                    <li className='mr-5 cursor-pointer hover:text-red-600 transition hover:scale-125'><FontAwesomeIcon icon={faGithub} /></li>
                </ul>




            </div>
            <div className='basis-3/6 p-1'>
                <img src={bannerImage} />
            </div>
        </div>
    );
};

export default Banner;