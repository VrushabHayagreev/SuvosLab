import React from "react";
import Dropdown from "../../Pages/Dropdown";

import Contacts from "../../Pages/Contacts";

const Suvo = () => {

  return (
    <div className="w-screen ">
      <Dropdown value="Suvo Chaterjee" />

      <div className="flex flex-row mt-2 p-3 space-x-5">
        <div className="w-2/3 space-y-5 p-3">
          <h1 className="text-3xl font-black text-primary ">Suvo Chaterjee</h1>
        <div className="flex flex-row space-x-4">
            <div className="w-2/3">
<h1 className="font-bold">Assistant Professor of Population Health Sciences Adjunct Faculty of Statistics and Data Science</h1>
<br/>
           <h1>Dr. Himel Mallick is a tenure-track faculty and Principal Investigator in the Division of Biostatistics at the Department of Population Health Sciences at Weill Cornell Medicine. He is also an Adjunct Faculty of Statistics and Data Science at Cornell University.
<br/><br/>
The Mallick Lab at Cornell develops computational methods, software, and data products to generate and validate testable hypotheses that accelerate data-driven discovery. Much of the lab's research has focused on reverse translational efforts aiming to integrate vastly different kinds of biological data by leveraging a combination of machine learning, systems biology, and omics data science techniques to enable target identification and biomarker discovery across a range of indications.</h1>
            </div>
            <div className="w-1/3 h-[300px] bg-gray-400 text-white flex items-center justify-center">
                <h1>Image Goes Here</h1>
            </div>
        </div>
        </div>
       <Contacts/>
      </div>
    </div>
  );
};

export default Suvo;
