import React from "react";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import aboutUsData from "../data/AboutUsData";
import Philosophy from "../sections/Philosophy";

import MemberIntroduction from "../sections/MemberIntroduction";

const AboutUsPage = () => {
  var { philosophy } = aboutUsData;
  var { memberintroduction } = aboutUsData;
  return (
    <React.Fragment>
      <Header />
      <main>
        <Philosophy data={philosophy} />
        <MemberIntroduction data={memberintroduction} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUsPage;
