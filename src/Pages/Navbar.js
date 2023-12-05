import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo2.png";

const NavBar = () => {
  return (
    <div className="flex flex-row  justify-between text-white bg-primary p-4 w-screen xs:text-xs sm:text-sm md:text-md lg:text-lg lg:h-[110px] md:h-[5rem] sm:h-[4rem] xs:h-[3rem]  rounded-sm shadow-md shadow-gray-500">
   
   
        <NavItem itemName="about" title="About" />
        <NavItem itemName="research" title="Research" />
        <NavItem itemName="labteam" title="Lab Team" />
        <NavItem itemName="publications" title="Publications" />
        <NavItem itemName="blogs" title="Beyond Academics" />
      </div>
   
 
  );
};

const NavItem = ({ itemName, title }) => {
  return (
    <NavLink
      to={`/${itemName}`}
      className={"flex flex-row space-x-3 items-center  "}
      
    >
      <h1 className="hover:border-b-4 border-primary font-semibold">{title}</h1>
    </NavLink>
  );
};

export default NavBar;
