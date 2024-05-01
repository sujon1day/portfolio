import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Basic = (props) => {
    console.log(props.prc)

    return (
        <>
            <div className='flex mb-10'>
                <div className='basis-3/4'>
                    <h3 className='text-4xl font-semibold text-slate-100'>{props.prc[0].title}</h3>
                    <p>{props.prc[0].tech}</p>
                </div>
                <div className='basis-1/4'>
                    <h3 className='text-4xl font-semibold text-red-600'>${props.prc[0].price}</h3>
                </div>
            </div>
            <p className='mb-8'>{props.prc[0].desc}</p>
            <div className='flex flex-wrap'>
                {props.prc[0].facility.map((fac) => {
                    return (
                        <h5 className='text-xl basis-1/2'><FontAwesomeIcon className='pr-3' icon={faCheck} />{fac}</h5>
                    )
                })}
            </div>
        </>
    );
};

export default Basic;