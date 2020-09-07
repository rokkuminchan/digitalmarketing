import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Reason from "../blocks/Reason";
import Impression from "../blocks/Impression";
import JoinOwrTeam from "../blocks/JoinOwrTeam";
import GraduateMessage from "../blocks/GraduateMessage";
import GraduateSpec from "../blocks/GraduateSpec";
import GraduateEducation from "../blocks/GraduateEducation";
import GraduateProccess from "../blocks/GraduateProccess";

const GraduateRecruitPage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <GraduateMessage />
      <GraduateSpec />
      <Reason />
      <Impression />
      <GraduateEducation />
      <GraduateProccess />
      <JoinOwrTeam />
      <Footer />
    </React.Fragment>
  );
};

export default GraduateRecruitPage;
