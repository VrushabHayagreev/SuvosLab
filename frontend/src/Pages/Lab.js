import React from "react";
import sample from "../Assets/samplegates.png";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const Lab = () => {
const data = [
  {
    name : "Suvo Chaterjee",
    role : "Professor",
    desc : " The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    github : "https://github.com/schatterjee30",
    email : "suvchat@iu.edu",
    portfolio : "https://publichealth.indiana.edu/research/faculty-directory/profile.html?user=suvchat"
  },
  {
    name : "Vrushab Hanumesh",
    role : "Research Assistant",
    desc : " The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    github : "https://github.com/VrushabHayagreev",
    email : "vrushab1998@gmail.com",
    portfolio : "https://vrushabsportfolio.netlify.app/"
  },
  {
    name : "Siddhant Meshram",
    role : "Research Assistant",
    desc : " The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    github : "https://github.com/Sid-149",
    email : "siddhantmeshram149@gmail.com",
    portfolio : "https://sid-149.github.io/Portfolio/"
  }
]
  return (
    <div class="mb-16">
      <div class="w-screen flex justify-center mx-auto pt-16">
        <div>
          <h1 class="text-primary text-3xl text-center font-black pb-3">
            MEET THE TEAM
          </h1>
          <h1 class="xl:text-xl text-xl text-center text-gray-800 font-semibold pb-6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      
     
          <div class="w-full  p-10 container mx-auto lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          {data.map((item) => (
            <div
            
              class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
            
              <div class="rounded overflow-hidden shadow-md bg-white">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img
                      src={sample}
                    alt = ""
                      class="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-16">
                  <h1 class="font-bold text-3xl text-center mb-1">
                    <a href={item.portfolio}> {item.name}</a>
                  </h1>
                  <p class="text-gray-800 text-sm text-center">
                  {item.role}
                  </p>
                  <p class="text-center text-gray-600 text-base pt-3 font-normal">
                  {item.desc}
                  </p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <a href={item.github} class="mx-5">
                      <div aria-label="Github" role="img">
                        <GitHubIcon />
                      </div>
                    </a>
                    <a href={item.email} class="mx-5">
                      <div aria-label="Email" role="img">
                        <EmailIcon />
                      </div>
                    </a>
                    <a href={item.portfolio} class="mx-5">
                      <div aria-label="Portfolio" role="img">
                        <AssignmentIndIcon />
                      </div>
                    </a>
                  </div>
                </div>
                
              </div>
            
            </div>
               ))}
          </div>
        </div>

  
  );
};

export default Lab;
