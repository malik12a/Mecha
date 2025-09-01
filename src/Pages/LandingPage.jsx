import React from "react";
import Crousal from "../components/Crousal";
import MainBanner from "../Components/MainBanner";
import FAQS from "../Components/FAQS";
import HowItWorks from "../Components/HowItWorks";
import HowToBuild from '../Components/HowToBuild'
import Specifications from '../Components/Specifications'
import ChatBotsWindow from '../Components/ChatBotsWindow'
import Integrate from "../Components/Integrate";
const LandingPage = () => {
  return (
    <div>
      <MainBanner />
      <Crousal />
      <HowToBuild/>
      <Specifications/>
      <ChatBotsWindow/>
      <Integrate/>
      <HowItWorks />
      <FAQS />
    </div>
  );
};

export default LandingPage;
