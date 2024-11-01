import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-bold py-8 text-center items-center justify-center'>Books</h1>
            <div className='grid lg:grid-cols-3'>
            {
                books.map( book => <Book book={book} key={book.bookId} ></Book>)
            }
            </div>
        </div>
    );
};

export default Books;