import React from "react";
import "./styles.css";

const BookListItem = (props) => {
  return (
    <article className="shadow-lg rounded bg-white flex items-between py-4 px-3">
      <img
        className="shadow-md w-40 mr-4"
        src="http://placehold.it/80x120"
        alt="placeholder"
        tittle="placeholder"
      />
      <div className="flex flex-col justify-between w-full">
        <header>
          <h4 className="text-sm font-medium">Book Title</h4>
          <h6 className="text-normal text-pink">Book Title</h6>
        </header>
        <div className="text-gray-400">
          <p className="text-gray-400">150 páginas</p>
          <p className="text-gray-400">Editora Loyola</p>
          <p className="text-gray-400">Publicado em 2020</p>
        </div>
      </div>
    </article>
  );
};

export default BookListItem;
