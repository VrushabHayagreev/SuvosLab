import React from "react";
import Labsingle from "../Components/Labs/Labsingle";

const Lab = () => {


  const dataMasters = [

    {
      name: "Vrushab Hanumesh",
      role: "Research Assistant",
      desc: "Results-oriented Computer Science graduate with a Master's degree from Indiana University and a strong background in programming, web development, and data analysis. Proven ability to solve complex problems, optimize systems, and collaborate effectively in team environments. I am a Full stack Web Developer with a year's experience working on React, NodeJS, Mysql PERL, and Splunk.",
      github: "https://github.com/VrushabHayagreev",
      email: "vrushab1998@gmail.com",
      portfolio: "https://vrushabsportfolio.netlify.app/",
    },
    {
      name: "Siddhant Meshram",
      role: "Research Assistant",
      desc: "As a data science graduate student, I am passionate about utilizing my analytical and technical skills to solve complex problems and make data-driven decisions. My coursework and research have given me a solid foundation in Python, Machine learning, SQL, Tableau, and R. Along with this, I possess excellent communication and decision-making skills, and I am enthusiastic about applying my knowledge and skills to work.",
      github: "https://github.com/Sid-149",
      email: "siddhantmeshram149@gmail.com",
      portfolio: "https://sid-149.github.io/Portfolio/",
    },
  ];

  return (
    <div className="mb-16 ml-10">
      <div className="w-screen flex mx-auto pt-16">
        <div>
          <h1 className="text-primary text-3xl font-black pb-3">MEET THE TEAM</h1>
          <h1 className="xl:text-2xl text-2xl text-gray-800 font-semibold pb-6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>

      <h1 className="xl:text-2xl text-2xl text-gray-800 font-semibold pb-6 mx-auto">
        Current Lab Members
      </h1>
      <div className="space-y-10">

    
<Labsingle type = "Masters Student" data = {dataMasters}/>

<Labsingle type = "PHd Student" data = {dataMasters}/>  
<Labsingle type = "Others" data = {dataMasters}/>  
</div>
    </div>
  );
};

export default Lab;
