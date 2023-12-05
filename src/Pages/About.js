import React from "react";
import sample from "../Assets/samplegates.png";

import Suvo from "../Assets/suvo.png"
const About = () => {
  return (
    <div className="w-screen ">
      <div className="flex flex-row">
      <img src={sample} alt="" className="  w-3/5 h-[840px] " />
      <div className="flex flex-col ">
      <img
        src={Suvo}
        alt=""
        class="w-full h-[300px]"
      />
      <h1 className="flex text-primary text-3xl font-semibold p-4 justify-center">Assistant Professor of Biostatistics <br/> Indiana University, Bloomington</h1>
        <h1 className="text-3xl font-xl p-5  ml-10">I am an applied statistician who specializes in the convergence of genomics and biomedical data science. My work primarily focuses on tackling statistical and computational obstacles encountered in the realms of single-cell genomics, epigenomics, and spatial transcriptomics, contributing significantly to a deeper comprehension of human health and illness.</h1>
      </div>
      

      </div>
     
    </div>
  );
};

export default About;
