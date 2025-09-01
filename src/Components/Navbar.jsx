import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1139.6px] bg-white/45 mx-auto h-auto sm:h-[76px] top-0 opacity-100 rounded-full backdrop-blur-[28.05px]  px-4 sm:px-[32.73px] py-[18.7px] relative z-50">
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 sm:gap-0">
        {/* Logo */}
        <h1 className="text-black font-bold text-base sm:text-lg flex-shrink-0">
          <img
          onClick={()=>navigate("/")}
            className="h-[50px] w-auto sm:w-[121.86px]"
            src={assets.logo2}
            alt="logo"
          />
        </h1>

        {/* Center Links (Desktop Only) */}
        <div className="font-montserrat hidden sm:flex gap-2 md:gap-6 text-md md:text-lg  flex-1 text-black justify-center flex-wrap">
          <NavLink to="#" className="cursor-pointer transition hover:scale-105">
            Feature
          </NavLink>
          <NavLink to="#" className="cursor-pointer transition hover:scale-105">
            Pricing
          </NavLink>
          <NavLink to="CustomizedChatbots" className="cursor-pointer transition hover:scale-105">
            Integrations
          </NavLink>
          <NavLink to="#" className="cursor-pointer transition hover:scale-105">
            <ul>
              <li>
                Resources
              </li>
            </ul>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Buttons */}
          <button
            onClick={() => navigate("/signin")}
            className="font-montserrat hidden sm:block w-[110px] md:w-[127px] h-[36px] md:h-[38.58px] border-2 border-[#D20003] text-black text-xs md:text-sm rounded-full cursor-pointer shadow-md hover:shadow-xl"
          >
            Sign in
          </button>

          <button
            onClick={() => navigate("/BuildChatbot")}
            className="cursor-pointer font-bold font-montserrat hidden sm:block w-[180px] md:w-[240px] h-[36px] md:h-[38.58px] bg-[#D20003] text-white text-xs md:text-sm rounded-full shadow-md hover:shadow-xl"
          >
            Build Your AI Chatbot
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="sm:hidden focus:outline-none"
          >
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="2" rx="1" fill="#ffffff" />
              <rect y="7" width="18" height="2" rx="1" fill="#ffffff" />
              <rect y="14" width="20" height="2" rx="1" fill="#ffffff" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-sm bg-white/5 backdrop-blur-md font-montserrat text-white py-4 px-4 rounded-xl border-t border-white/10">
          <NavLink to="#" className="hover:text-indigo-300">
            AI Agent
          </NavLink>
          <NavLink to="#" className="hover:text-indigo-300">
            Integration
          </NavLink>
          <NavLink to="#" className="hover:text-indigo-300">
            Pricing
          </NavLink>
          <NavLink to="#" className="hover:text-indigo-300">
            Book a Demo
          </NavLink>
          <button className="w-full h-[38.58px] bg-layered-gradient text-white text-sm rounded-[14.8px] p-[7.79px]">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
