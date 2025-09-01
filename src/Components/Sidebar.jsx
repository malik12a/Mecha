import React, { useState } from "react";
import {
  HomeIcon,
  SearchIcon,
  CogIcon,
} from "@heroicons/react/outline";
import {
  BeakerIcon,
  ChatAlt2Icon,
  PlusCircleIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  const [active, setActive] = useState("ChatBot");

  const generalItems = [
    { label: "Search", icon: <SearchIcon className="w-5 h-5" />, shortcut: "⌘ S" },
    { label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { label: "API and Integration", icon: <BeakerIcon className="w-5 h-5" /> },
    { label: "Help Center", icon: <CogIcon className="w-5 h-5" /> },
    { label: "Contact", icon: <ChatAlt2Icon className="w-5 h-5" /> },
  ];

  const projectItems = [
    { label: "ChatBot", color: "border-green-400" },
    { label: "Digital Product Launch", color: "border-red-400" },
    { label: "Brand Refresh", color: "border-yellow-400" },
    { label: "Social Media Strategy", color: "border-blue-400" },
  ];

  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col justify-between p-4">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/OOjs_UI_icon_robot.svg"
            alt="logo"
            className="w-6 h-6"
          />
          <div>
            <p className="font-semibold">Mecha</p>
            <p className="text-green-400 text-xs">Private Workspace</p>
          </div>
        </div>

        {/* General */}
        <div>
          <p className="text-xs text-gray-400 mb-2">GENERAL</p>
          {generalItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              {item.shortcut && (
                <span className="text-xs text-gray-400">{item.shortcut}</span>
              )}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-6">
          <p className="text-xs text-gray-400 mb-2">PROJECTS</p>
          {projectItems.map((project) => (
            <div
              key={project.label}
              onClick={() => setActive(project.label)}
              className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-800 ${
                active === project.label ? "bg-gray-800" : ""
              }`}
            >
              <span
                className={`w-3 h-3 border-2 ${project.color} rounded`}
              ></span>
              <span className="text-sm">{project.label}</span>
            </div>
          ))}

          {/* Add New Project */}
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-800 cursor-pointer mt-2">
            <PlusCircleIcon className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400">Add new project</span>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-10 h-10 rounded-lg"
        />
        <div>
          <p className="text-sm font-semibold">Ryan Lee</p>
          <p className="text-xs text-green-400">Premium</p>
        </div>
        <CogIcon className="w-5 h-5 ml-auto text-gray-400" />
      </div>
    </div>
  );
};

export default Sidebar;
