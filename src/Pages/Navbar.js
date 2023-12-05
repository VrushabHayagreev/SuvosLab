// NavBar.js

import React from "react";
import { NavLink } from "react-router-dom";
import HoverDropdown from "./HoverDropdown";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-primary p-4">
       <NavItem itemName="about" title="About" />
      <NavItem itemName="research" title="Research" />
      <NavItem itemName="labteam" title="Lab Team" />
      <NavItem itemName="publications" title="Publications" />
      <NavItem itemName="software" title="Software" />
      <NavItem itemName="talks" title="Talks" />
    
      <NavItem itemName="blogs" title="Beyond Academics" />
    </div>
  );
};

const NavItem = ({ itemName, title }) => {
  return (
    <div className="mr-2">
      {itemName === "about" ? (
        <HoverDropdown />
      ) : (
        <NavLink
          to={`/${itemName}`}
          className="text-white hover:text-gray-300 hover:border-b-2 border-white px-3 py-2 font-semibold "
          activeClassName="border-b-2 border-white"
        >
          {title}
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
