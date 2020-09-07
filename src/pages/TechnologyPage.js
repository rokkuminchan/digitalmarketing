import React from "react";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Introduction from "../sections/Introduction";
import TechnologyList from "../sections/TechnologyList";

const TechnologyPage = ({ data }) => {
  const { introduction, technologyList } = data;
  return (
    <React.Fragment>
      <Header />
      <main>
        <Introduction data={introduction} />
        <TechnologyList data={technologyList} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default TechnologyPage;
