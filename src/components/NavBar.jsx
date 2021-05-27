import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/CountriesList">
      Wiki Countries
      </NavLink>
      <NavLink exact to="/CountryDetails/:cca3">
      Countries Details
      </NavLink>
     
    </nav>
  );
};

export default NavBar;