import React from "react";
import sample from "../Assets/samplegates.png";
import Dropdown from "./Dropdown";


const About = () => {


  return (
    <div className="w-screen ">
     <Dropdown value="Explore +"/>
      <img src={sample} alt="" className="w-screen h-[800px] " />

    </div>
  );
};

export default About;
