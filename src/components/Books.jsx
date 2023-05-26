import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import Spinner from "./LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  if (navigation.state === true) {
    return <Spinner></Spinner>;
  }
  const booksData = useLoaderData();
  const { books } = booksData;
  return (
    <div className="my-24 w-3/4 mx-auto md:grid md:grid-cols-2 lg:grid-cols-4  gap-4">
      {books.map((book) => (
        <Book key={book.isbn13} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
