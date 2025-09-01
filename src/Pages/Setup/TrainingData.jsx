import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Nav2 from "../../Components/Nav2";
import { useAppContext } from "../../context/AppContext";

const TrainingData = () => {
  const navItems = [
    { label: "1.Basic setup", to: "/basic-setup" },
    { label: "2.Add training data", to: "/training-data" },
    { label: "3.Customize widget", to: "/customize-widget" },
  ];

  const {navigate} = useAppContext();
  const [website, setWebsite] = useState("");

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <Nav2 navItems={navItems} logo={assets.blacklogo} />

      {/* --- Top Right Shapes --- */}
      <img
        src={assets.ThorusKnot}
        alt="Green Blob"
        className="absolute top-0 right-0 h-[200px] z-10"
      />
      <img
        src={assets.Cube1}
        alt="Blue Cube"
        className="absolute top-[80px] right-0 h-[200px] z-10"
      />

      {/* --- Bottom Right Shapes --- */}
      <img
        src={assets.Helix}
        alt="Orange Torus"
        className="absolute bottom-0 right-0 h-[260px] z-10"
      />
      <img
        src={assets.Thorus2}
        alt="Purple Ring"
        className="absolute bottom-0 right-[60px] h-[180px] z-0"
      />

      {/* Main Content */}
      <div className="relative lg:w-[580px] sm:w-[80%] rounded-2xl ml-[135px] mt-[120px]">
        {/* Step info */}
        <h3 className="font-montserrat text-sm">Step 2 of 3</h3>
        <h1 className="font-montserrat font-bold text-2xl mt-2">
          Provide Information to Train Your Bot
        </h1>
        <p className="font-montserrat text-md mt-3 leading-relaxed">
          Start by giving your bot a webpage or some files to <br /> kickstart your
          bot's learning. You can add more content <br /> later.
        </p>

        {/* Website input */}
        <div className="flex flex-col mt-10">
          <label className="font-montserrat text-sm font-semibold mb-2">
            Enter your company website
          </label>
          <input
            type="url"
            placeholder="www.xyz26.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="border-2 border-[#6d7aff] rounded-md px-3 py-2 w-full max-w-md
                       focus:outline-none focus:border-[#6d7aff]"

          />
        
        </div>

        {/* Next Button */}
        <button
        onClick={()=>navigate("/customize-widget")}
          className="border-2 border-[#979ffa] mt-14 w-30 h-10 rounded-full hover:scale-105 transition-transform"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrainingData;
