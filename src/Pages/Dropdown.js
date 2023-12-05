import React from 'react'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from 'react-router-dom';
const Dropdown = ({value}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="w-screen h-12 bg-white p-2 text-white font-semibold text-lg flex flex-row space-x-2">
    <NavLink className="text-black" to="/">About</NavLink>
    <h1 className="text-black">{"|"}</h1>
    <button className="shadow-sm bg-primary shadow-secondary rounded-md w-[170px]"  onClick={handleClick}>{value}</button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <NavLink  className="w-full" to="/affiliation"> Affiliation</NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <NavLink className="w-full" to="/suvo"> Suvo Chaterjee</NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <NavLink className="w-full" to="/contact"> Contact Us</NavLink>
      </MenuItem>
    </Menu>
  </div>
 
 
  )
}

export default Dropdown