import React from "react";
import Counter from "../../components/counterPopulation/counterPopulation";
import ReactWaterMark from "../../components/reactWaterMark/reactWaterMark";
import "./style.css";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Counter />
      <ReactWaterMark />
    </div>
  );
};

export default LandingPage;
