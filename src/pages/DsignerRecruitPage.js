import React from "react";
import Header from "../blocks/Header";
import Reason from "../blocks/Reason";
import Impression from "../blocks/Impression";
import JoinOwrTeam from "../blocks/JoinOwrTeam";
import DsignerMessage from "../blocks/DsignerMessage";
import DsignerSpec from "../blocks/DsignerSpec";
import DsignerJobImage from "../blocks/DsignerJobImage";
import Footer from "../sections/Footer";

const DsignerRecruitPage = () => {
  return (
    <React.Fragment>
      <Header />
      <DsignerMessage />
      <DsignerSpec />
      <DsignerJobImage />
      <Reason />
      <Impression />
      <JoinOwrTeam />
      <Footer />
    </React.Fragment>
  );
};

export default DsignerRecruitPage;
