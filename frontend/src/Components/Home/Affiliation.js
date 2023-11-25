import React from "react";
import Dropdown from "../../Pages/Dropdown";
import publichealth from "../../Assets/publichealth.png";
import Contacts from "../../Pages/Contacts";

const Affiliation = () => {
  const data = [
    {
      dept: "Biostats",
      desc: " The Department of Population Health Sciences aims to improve healthcare policy and overall public health in a rapidly changing environment through rigorous, collaborative, data-driven research, novel educational programs, innovative technology, and high-quality research design consultation services.",
    },
    {
      dept: "IU Public Health",
      desc: " The Department of Population Health Sciences aims to improve healthcare policy and overall public health in a rapidly changing environment through rigorous, collaborative, data-driven research, novel educational programs, innovative technology, and high-quality research design consultation services.",
    },
    {
      dept: "Dept3",
      desc: " The Department of Population Health Sciences aims to improve healthcare policy and overall public health in a rapidly changing environment through rigorous, collaborative, data-driven research, novel educational programs, innovative technology, and high-quality research design consultation services.",
    },
    {
      dept: "Dept4",
      desc: " The Department of Population Health Sciences aims to improve healthcare policy and overall public health in a rapidly changing environment through rigorous, collaborative, data-driven research, novel educational programs, innovative technology, and high-quality research design consultation services.",
    },
  ];
  return (
    <div className="w-screen ">
      <Dropdown value="Affiliation" />
      <img className="w-screen h-[600px]" alt="" src={publichealth} />
      <div className="flex flex-row mt-2 p-3 space-x-5">
        <div className="w-2/3 space-y-5 p-3">
          <h1 className="text-3xl font-black text-primary ">Affiliations</h1>
          {data.map((item) => (
            <div className="space-y-2">
              <button className="text-2xl text-primary font-xl underline hover:text-opacity-80">
                {item.dept}
              </button>
              <h1 className="text-lg">{item.desc}</h1>
            </div>
          ))}
        </div>
       <Contacts/>
      </div>
    </div>
  );
};

export default Affiliation;
