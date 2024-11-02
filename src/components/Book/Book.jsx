import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    image,
    author,
    bookName,
    bookId,
  } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="border p-5 m-5 rounded">
          <div className=" bg-red-50 rounded-xl">
            <div className="flex p-5 items-center justify-center">
              <img className="w-40 h-52 skew-y-6" src={image} alt="" />
            </div>
          </div>
          <div className="flex gap-8 text-[#23BE0A] mt-4">
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <p className="text-2xl font-bold">{bookName}</p>
          <p className="text-gray-500">By: {author}</p>
          <div className="divider divider-dotted"></div>
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
        </div>
      </div>
    </Link>
  );
};

export default Book;
