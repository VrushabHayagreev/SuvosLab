import React from "react";

const Talks = () => {
  const Talk = [
    {
      title: "Invited Talks",
      detail: [
        {
          name: "Joint Statistical Meetings",
          desc: "Bayesian functional data analysis over dependent regions and its application for identification of differentially methylated regions ",
          place: "(Virtual), USA, August 2020",
          link: "https://ww2.amstat.org/meetings/jsm/2020/onlineprogram/ActivityDetails.cfm?sessionid=219622",
        },
      ],
    },
    {
      title: "Contributed Talks",
      detail: [
        {
          name: "The Society for Pediatric and Perinatal Epidemiologic Research",
          desc: "Sex-specific placental gene expression signatures of small for gestational age at birth",
          place: "(Virtual), USA, June, 2021",
          link: "https://sper.org/",
        },
      ],
    },
    {
      title: "Poster Sessions",
      detail: [
        {
          name: "American society of Human Genetics",
          desc: "Placental gene co-expression network reveals inflammation response enrichment in maternal dyslipidemia ",
          place: "(Virtual), USA, Octber, 2020",
          link: "https://www.ashg.org/meetings/",
        },
      ],
    },
  ];
  return (
    <div className=" mx-10 mt-8">
      {Talk.map((talk, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{talk.title}</h2>
          <div>
            {talk.detail.map((detail, detailIndex) => (
              <div key={detailIndex} className="mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={detail.link}
                  className="text-lg text-primary underline hover:opacity-70  mb-2 "
                >
                  {detail.name}
                </a>
                <p className="text-gray-700 mb-2 font-bold">{detail.desc}</p>
                <p className="text-gray-600">{detail.place}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Talks;
