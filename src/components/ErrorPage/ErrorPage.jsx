import React from 'react';
import error from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
            <img className='w-full' src={error} alt="" />
        </div>
        <div className='flex items-center justify-center'>
            <p className='-mt-96 absolute text-4xl text-red-500'>You are in wrong place!! Please Go Back !!</p>
            <button className='btn btn-warning -mt-48 absolute'>Go Back</button>
        </div>
        </div>
    );
};

export default ErrorPage;