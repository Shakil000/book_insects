import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";


const BookDetails = () => {

    // const param = useParams()
    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const bookDetails =  data.find(bookDetails => bookDetails.bookId === id);
    // console.log(bookDetails);
    const {yearOfPublishing,
        publisher,
        tags,
        category,
        rating,
        totalPages,
        review,
        image,
        author,
        bookName,
        // same name bookId is not support that is why I change the name of below bookId as currentBookId
        bookId: currentBookId} = bookDetails;

    return (
        <div>
           <div className='grid grid-cols-2 col-span-5'>
            <div className='bg-gray-200 flex items-center justify-center'>
                <img className='w-60 h-80 skew-y-3' src={image} alt={bookName} />
            </div>
            <div className='ml-10'>
                <p className='text-2xl font-bold'>{bookName}</p>
                <p className="text-gray-500">By: {author}</p>
                <div className='divider'></div>
                <div className="flex justify-between items-center">
            <div>
              <p>Fiction</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <p>{rating}</p>
              </div>
              <div>
                <FaRegStar />
              </div>
            </div>
          </div>
          <div className='divider'></div>
          <p className='font-bold'>Review: <small className='text-gray-400'>{review}</small> </p>
          <div className="flex gap-8 text-[#23BE0A] mt-4"> <p className='text-black font-bold'>Tag</p>
            {
            tags.map((tag, index) => (<p key={index}>{tag}</p>))
            }
          </div>
            <div className='divider'></div>
            <div className='flex gap-8 text-gray-500'>
                <div>
                    <p>Num of Pages: </p>
                    <p>Publisher: </p>
                    <p>Year of Publishing: </p>
                    <p>Rating: </p>
                </div>
                <div>
                    <p>{totalPages}</p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                    <p>{rating}</p>
                </div>
            </div>
            <div className='space-x-5 mt-3'>
                <button className="btn text-white font-bold bg-[#23BE0A]">Read</button>
                <button className="btn btn-primary">WhiteList</button>
            </div>
            </div>
           </div>
        </div>
    );
};

export default BookDetails;