import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const book = useLoaderData();
  const [fold, setFold] = useState(true);

  return (
    <div className="w-3/4 mx-auto my-20 p-5 border border-gray-500 rounded-lg md:grid grid-cols-2 gap-5">
      <div>
        <img src={book.image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mt-5 mb-5">
          {book.title}
        </h1>
        <h3 className="text-xl font-bold mb-5">{book.subtitle}</h3>
        {fold ? (
          <>
            <span>{book.desc.substring(0, 100)}...</span>
            <span
              className="cursor-pointer text-blue-500 mb-5"
              onClick={() => setFold(!fold)}
            >
              Read More
            </span>
          </>
        ) : (
          <>
            <span className="mb-3">{book.desc}...</span>
            <span
              className="cursor-pointer text-blue-500"
              onClick={() => setFold(!fold)}
            >
              Read Less
            </span>
          </>
        )}
        <p className="mt-10 mb-3">Author: {book.authors}</p>
        <p className="mb-3">Publisher: {book.publisher}</p>
        <p className="mb-3">Language: {book.language}</p>
        <p className="mb-3">Total Pages: {book.pages}</p>
        <p className="mb-10 font-bold">Price: {book.price}</p>
        <Link
          className="bg-blue-700 text-white font-bold px-4 py-3 rounded-md inline-flex items-center"
          to={book.url}
        >
          <span>Buy Now </span>
          <ArrowLongRightIcon className="h-6 w-6 ms-2"></ArrowLongRightIcon>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
