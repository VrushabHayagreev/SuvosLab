import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
const Labsingle = ({ type, data }) => {
  return (
    <div className="pr-10">
      <h1 className="xl:text-2xl text-2xl text-gray-800 font-semibold pb-6 mx-auto">
        {type}
      </h1>

      <table className="min-w-full border border-black shadow-md ">
        <thead className="h-20 border-2 border-gray-300">
          <tr className="bg-gray-200">
            <th className="border-2 border-gray-300 p-2">Name</th>
            <th className="border-2 border-gray-300 p-2">Role</th>
            <th className="border-2 border-gray-300 p-2">Description</th>
            <th className="border-2 border-gray-300 p-2">Photo</th>
            <th className="border p-2">GitHub</th>

            <th className="border p-2">Email</th>
            <th className="border p-2">Portfolio</th>
          </tr>
        </thead>
        <tbody className="border-2 border-gray-300">
          {data.map((master, index) => (
            <tr key={index}>
              <td className="border-2 border-gray-300 p-2">{master.name}</td>
              <td className="border-2 border-gray-300 p-2">{master.role}</td>
              <td className="border-2 border-gray-300 p-2">{master.desc}</td>
              <td className="border-2 border-gray-300 p-2">
                {" "}
                <img
                  src="https://publichealth.indiana.edu/images/profile/printVersion/suvchat.jpg"
                  alt=""
                  class="p-10  h-full w-full "
                />
              </td>
              <td className="border p-2">
                <a
                  href={master.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold hover:underline"
                >
                  <GitHubIcon />
                </a>
              </td>
              <td className="border p-2">
                <a
                  href={`mailto:${master.email}`}
                  className="text-black font-bold hover:underline"
                >
                  <EmailIcon />
                </a>
              </td>
              <td className="border p-2">
                <a
                  href={master.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold hover:underline"
                >
                  <AssignmentIndIcon />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Labsingle;
