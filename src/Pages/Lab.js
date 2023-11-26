import React,{useState} from "react";
import sample from "../Assets/samplegates.png";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const Lab = () => {
  const [copied, setCopied] = useState(false);

const handleCopy = () => {
  setCopied(true);

  // Reset the "Copied" state after 2 seconds
  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
const data = [
  {
    name : "Suvo Chaterjee",
    role : "Professor",
    desc : " My research work resides on developing and applying statistical methodologies in identifying molecular mechanisms associated to disease outcomes with a keen focus on high dimensional data emerging from genomics and electronic health care data. The practical goal of my research is to address various public health concerns and chronic diseases in diverse race/ethnic populations using existing or novel statistical methodologies.",
    github : "https://github.com/schatterjee30",
    email : "suvchat@iu.edu",
    portfolio : "https://publichealth.indiana.edu/research/faculty-directory/profile.html?user=suvchat"
  },
  {
    name : "Vrushab Hanumesh",
    role : "Research Assistant",
    desc : "Results-oriented Computer Science graduate with a Master's degree from Indiana University and a strong background in programming, web development, and data analysis. Proven ability to solve complex problems, optimize systems, and collaborate effectively in team environments. I am a Full stack Web Developer with a years experience working on React, NodeJS, Mysql PERL and Splunk.",
    github : "https://github.com/VrushabHayagreev",
    email : "vrushab1998@gmail.com",
    portfolio : "https://vrushabsportfolio.netlify.app/"
  },
  {
    name : "Siddhant Meshram",
    role : "Research Assistant",
    desc : " As a data science graduate student, I am passionate about utilizing my analytical and technical skills to solve complex problems and make data-driven decisions. My coursework and research have given me a solid foundation in Python, Machine learning, SQL, Tableau, and R. Along with this, I possess excellent communication and decision-making skills, and I am enthusiastic about applying my knowledge and skills to work.",
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
      
      {copied && <div className="text-primary flex justify-center font-semibold"> Email Copied!</div>}
          <div class="w-full  p-10 container mx-auto lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          {data.map((item) => (
            <div
            
              class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
            
              <div class="rounded overflow-hidden h-[500px] shadow-md bg-white">
                <div class="absolute -mt-20 w-full  flex justify-center">
                  <div class="h-32 w-32">
                    <img
                      src="https://publichealth.indiana.edu/images/profile/printVersion/suvchat.jpg"
                    alt = ""
                      class="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-16">
                  <h1 class="font-bold text-3xl text-center mb-1">
                    <a href={item.portfolio} target="_blank" rel="noreferrer"> {item.name}</a>
                  </h1>
                  <p class="text-gray-800 text-sm text-center">
                  {item.role}
                  </p>
                  <p class="text-center text-gray-600 h-[300px] text-base text-md pt-3 font-normal">
                  {item.desc}
                  </p>
                  <div class="w-full flex  justify-center pt-5 pb-5">
                    <a href={item.github} target="_blank" rel="noreferrer" class="mx-5">
                      <div aria-label="Github" role="img">
                        <GitHubIcon />
                      </div>
                    </a>
                   
                    <div>
      <CopyToClipboard text={item.email} onCopy={handleCopy}>
        <div aria-label="Email" role="img" className="cursor-pointer">
          <EmailIcon />
        </div>
      </CopyToClipboard>
     
    </div>
               
                    <a href={item.portfolio} target="_blank" rel="noreferrer" class="mx-5">
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
