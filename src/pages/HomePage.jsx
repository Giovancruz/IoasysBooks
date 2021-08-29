import React from "react";
import "./HomePage.css";

import Header from "../components/Header";
import BookListItem from "../components/BookListItem";

const HomePage = (props) => {
  return (
    <div className="container mx-auto">
      <Header />
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <BookListItem />
      </section>
    </div>
  );
};

export default HomePage;
