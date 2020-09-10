import React from "react";

import Header from "../sections/header/Header";
import Footer from "../sections/Footer";
import aboutUsData from "../data/AboutUsData";
import Philosophy from "../sections/Philosophy";
import UniversityList from '../sections/about us/UniversityList'

const AboutUsPage = () => {
  var { philosophy, university } = aboutUsData;

  return (
    <React.Fragment>
      <Header />
      <main>
        <Philosophy data={philosophy} />
        <UniversityList data={university} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUsPage;
