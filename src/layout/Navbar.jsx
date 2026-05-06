import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const linkStyles = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "font-bold text-[#5842E3] border-b-2 border-[#5842E3]"
        : "font-medium text-gray-700 hover:text-[#5842E3]"
    }`;
  return (
    <nav className="flex items-center justify-between px-12 py-6">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="w-8 h-8">
          <img src="" alt="" />
        </span>
        <span>Car Rental</span>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/vehicle" className={linkStyles}>
          Vehicles
        </NavLink>
        <NavLink to="/details" className={linkStyles}>
          Details
        </NavLink>
        <NavLink to="/about" className={linkStyles}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={linkStyles}>
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-purple-600 p-2 rounded-full text-white">
          <span>
            <img src="#" alt="..." />
          </span>
        </div>
        <div className="text-xs">
          <p className="text-gray-500">Need help?</p>
          <p className="font-bold">+996 247-1680</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
