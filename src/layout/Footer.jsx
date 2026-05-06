import React from "react";
import { IMAGES } from "../assets/images.js";
import DownloadBtn from "../pages/home/components/DownloadBtn";
// import {
//   FacebookIcon,
//   Instagram,
//   TwitterIcon,
//   Youtube,
//   MapPin,
//   Mail,
//   Phone
// } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white  pb-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-black p-2 rounded-lg text-white">
              <img src="/car-logo-white.svg" alt="Logo" className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Car Rental</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="">
              {/* <MapPin size={20} /> */}
              <img src={IMAGES.location} alt="" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Address
              </p>
              <p className="text-sm font-bold text-gray-900">
                Oxford Ave. Cary, NC 27511
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="">
              <img src={IMAGES.email} alt="" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Email
              </p>
              <p className="text-sm font-bold text-gray-900">
                nwiger@yahoo.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="">
              <img src={IMAGES.phone} alt="" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Phone
              </p>
              <p className="text-sm font-bold text-gray-900">+537 547-6401</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-100 pb-16">
          {/* About/Socials */}
          <div className="space-y-6">
            <p className=" leading-relaxed font-medium text-xl">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem t...
            </p>
            <div className="flex gap-4">
              <i className="fa-brands fa-facebook h-6 cursor-pointer text-2xl  transform transition-transform duration-300 ease-in-out hover:scale-125"></i>
              <i className="fa-brands fa-instagram h-6 cursor-pointer text-2xl   transform transition-transform duration-300 ease-in-out hover:scale-125"></i>
              <i className="fa-brands fa-square-x-twitter h-6 cursor-pointer text-2xl  transform transition-transform duration-300 ease-in-out  hover:scale-125 "></i>
              <i
                className="fa-brands fa-youtube h-6 cursor-pointer text-2xl   transform transition-transform duration-300 ease-in-out  hover:scale-125
              "
              ></i>
            </div>
          </div>

          {/*  Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Useful links
            </h4>
            <ul className="space-y-2 text-gray-500 font-medium ">
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>

          {/* Vehicles Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Vehicles</h4>
            <ul className="space-y-2 text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Sedan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Cabriolet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Pickup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  Minivan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5842E3] transition">
                  SUV
                </a>
              </li>
            </ul>
          </div>

          {/* App Store Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Download App
            </h4>
            <div className="space-y-4">
           
              <div className="flex flex-wrap gap-4 pt-2">
                <DownloadBtn
                  image={IMAGES.appleLogo}
                  text="Download on the"
                  app="App Store"
                />
                <DownloadBtn
                  image={IMAGES.playStoreIcon}
                  text="Get it on"
                  app="Google Play"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright c. */}
        <div className="text-center text-gray-400 text-xs font-medium">
          © Copyright Car Rental 2024. Design by Figma. guru
        </div>
      </div>
    </footer>
  );
};

// const SocialIcon = ({ icon }) => (
// <a href="#" className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-[#5842E3] transition-colors">
//     {icon}
// </a>
// );

export default Footer;
