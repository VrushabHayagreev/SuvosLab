import React from "react";

const Software = () => {
  const software = [
    {
      name: "Robseq",
      link: "https://github.com/schatterjee30/Robseq",
      desc: " A Robust Statistical Model for Differential Gene Expression Analysis in RNA-Seq Studies",
    },
    {
      name: "BFDAMs",
      link: "https://github.com/schatterjee30/BFDAMs",
      desc: " Bayesian functional data analysis model BFDAM2 for identifying differentially methylated regions in 450K array DNA methylation data. ",
    },
  ];
  return (
    <div  className="space-y-3">
      <h1 className="text-primary text-3xl font-black pb-3">SOFTWARES</h1>
      {software.map((s, index) => (
        <div className="flex flex-row space-x-2">
          <a
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold  underline "
          >
            {s.name}
          </a>
          <h1>|</h1>
          <h1 className="text-black font-semibold ">{s.desc} </h1>
        </div>
      ))}
    </div>
  );
};

export default Software;
