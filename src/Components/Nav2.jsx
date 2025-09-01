import React from 'react';
import { NavLink } from "react-router-dom";
import { useAppContext } from '../context/AppContext';

const Nav2 = ({ navItems = [], logo }) => {
  const {navigate} = useAppContext();
  return (
    <nav className="border w-full max-w-[1000px] bg-white/45 mx-auto h-auto sm:h-[60px] rounded-2xl backdrop-blur-[28.05px] px-4 sm:px-7 py-2.5 relative z-50">
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 sm:gap-0">

        {/* Logo */}
        <h1 className="text-black font-bold text-sm sm:text-base flex-shrink-0">
          <img onClick={()=>navigate("/")} className="h-[42px] w-auto sm:w-[60px]" src={logo} alt="logo" />
        </h1>

        {/* Navigation Links (only if navItems provided) */}
        {navItems.length > 0 && (
          <div className="font-montserrat hidden sm:flex gap-3 md:gap-5 text-sm sm:text-base flex-1 justify-center flex-wrap">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center cursor-pointer transition hover:scale-105 ${
                      isActive ? "text-blue-600 font-bold" : "text-black"
                    }`
                  }
                >
                  <span className="ml-1 w-fit">{item.label}</span>
                </NavLink>
              </div>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Nav2;
