import React from "react";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import aboutUsData from "../data/AboutUsData";
import Philosophy from "../sections/Philosophy";

const AboutUsPage = () => {
  var { philosophy } = aboutUsData;

  return (
    <React.Fragment>
      <Header />
      <main>
        <Philosophy data={philosophy} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUsPage;
