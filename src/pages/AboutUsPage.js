import React from "react";

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";
import aboutUsData from "../data/AboutUsData";
import Philosophy from "../sections/Philosophy";
import UniversityHeader from "../sections/about us/UniversityHeader"
import UniversityIntroduction from "../sections/about us/UniversityIntroduction"
import UniversityList from "../sections/about us/UniversityList"
import MemberIntroduction from "../sections/MemberIntroduction";


const AboutUsPage = () => {
  var { philosophy, university } = aboutUsData;
  var {introduction} = university
  var { memberintroduction } = aboutUsData;
  return (
    <React.Fragment>
      <Header />
      <main>
        <Philosophy data={philosophy} />
        <UniversityHeader data={introduction} />
        <UniversityIntroduction data={introduction} />
        <UniversityList data = {university} />
        <MemberIntroduction data={memberintroduction} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUsPage;
