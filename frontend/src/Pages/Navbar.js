import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo2.png";

const NavBar = () => {
  return (
    <div className="flex flex-row p-4 w-screen xs:text-xs sm:text-sm md:text-md lg:text-lg lg:h-[110px] md:h-[5rem] sm:h-[4rem] xs:h-[3rem] bg-white rounded-sm shadow-md shadow-gray-500">
      <div className="flex flex-row w-screen space-x-3 justify-between items-center lg:ml-7 lg:mr-5">
        <a href="/" className="lg:w-[300px] lg:h-6 lg:mb-8">
          <img className="hidden lg:flex w-[300px] h-[54px]" alt="" src={Logo} />
        </a>
        <NavItem itemName="about" title="About Us" />
        <NavItem itemName="research" title="Research" />
        <NavItem itemName="labteam" title="Lab Team" />
        <NavItem itemName="publications" title="Publications" />
        <NavItem itemName="news" title="News" />
        <NavItem itemName="resources" title="Resources" />
        <NavItem itemName="blogs" title="Blogs" />
      </div>
    </div>
  );
};

const NavItem = ({ itemName, title }) => {
  return (
    <NavLink
      to={`/${itemName}`}
      activeClassName="border-b-2 border-black" 
      className={"flex flex-row space-x-3 items-center lg:w-[162.64px]"}
    >
      <h1>{title}</h1>
    </NavLink>
  );
};

export default NavBar;
