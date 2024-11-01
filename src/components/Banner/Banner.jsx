import React from 'react';
import banner from '../../assets/books.png'

const Banner = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-2 bg-red-50 mx-3'>
                <div className='lg:py-40 lg:ml-44'>
                    <h1 className='lg:text-4xl font-bold justify-center items-center'>Books to freshen up your book shelf</h1>
                    <div className='py-7'>
                    <button className='btn font-bold p-3 text-white border bg-[#23BE0A] rounded'>View The List</button>
                    </div>
                </div>
                <div>
                    <img className='lg:px-20 lg:py-8' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;