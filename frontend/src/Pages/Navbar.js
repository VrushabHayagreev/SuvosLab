import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo2.png";

const NavBar = () => {
  return (
    <div className="flex flex-row p-4 w-screen xs:text-xs sm:text-sm md:text-md lg:text-lg lg:h-[110px] md:h-[5rem] sm:h-[4rem] xs:h-[3rem] bg-white rounded-sm shadow-md shadow-gray-500">
      <div className="flex flex-row w-screen space-x-3  items-center ">
      <a href="/" >
          <img className="hidden lg:flex w-[300px] h-[54px] mr-10" alt="" src={Logo} />
        </a>
        <div className="flex w-4/5 flex-row justify-between">
        <NavItem itemName="about" title="About" />
        <NavItem itemName="research" title="Research" />
        <NavItem itemName="labteam" title="Lab Team" />
        <NavItem itemName="publications" title="Publications" />
        <NavItem itemName="news" title="News" />
        <NavItem itemName="resources" title="Resources" />
        <NavItem itemName="blogs" title="Blogs" />
      </div>
      </div>
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
