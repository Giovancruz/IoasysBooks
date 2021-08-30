import React from "react";
import "./styles.css";

import Header from "components/Header";
import BookListItem from "components/Books";

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
