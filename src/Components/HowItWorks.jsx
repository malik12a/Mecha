import React, { useState } from "react";
import { assets } from "../assets/assets";

const data = [
  {
    title: "1. Upload Your Data & Train Your AI Agent",
    content:
      "Botsonic acts as an always-on virtual campus guide, helping students navigate course options, registration processes, and campus resources, dramatically improving the student experience.",
  },
  {
    title: "2. Customize Personality & Appearance",
    content:
      "Botsonic enables real estate agencies to provide instant property details, schedule viewings, and offer personalized buying advice, enhancing customer engagement and sales efficiency.",
  },
  {
    title: "3. Embed on Your Website",
    content:
      "AI agents powered by Botsonic provide patients with information on treatments, schedule appointments, and help with prescription management, thereby elevating patient care.",
  },
  {
    title: "4. Connect to Your Tools",
    content:
      "Botsonic revolutionizes online shopping experiences by providing personalized product recommendations, handling transactions, and offering post-purchase support.",
  },
  {
    title: "5. Track & Optimize",
    content:
      "Botsonic revolutionizes online shopping experiences by providing personalized product recommendations, handling transactions, and offering post-purchase support.",
  },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-main px-4 mt-4 mb-15">
      <div className="relative max-w-[1280px] mx-auto p-2">
        {/* Top Badge and Titles */}
        <div className="relative text-center">
          <h1 className="font-montserrat  font-extrabold text-4xl md:text-5xl text-black">
            How it <span className="text-color">
                   Works
              </span> 
          </h1>
          <h2 className="font-montserrat text-black mt-4  text-base md:text-lg">
            Upload your data, train your MECHA AI AGENT, tailor its style to match
            your brand,
            <br className="hidden md:block" />
             and have it live on your website in minutes-no coding required.
          </h2>

          {/* Buttons */}
          <div className="font-montserrat flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="px-2 font-bold text-md w-full sm:w-80 bg-button text-white rounded-full shadow hover:shadow-md transition">
              Build Your AI Chatbot For Free
            </button>
            <button className="px-3 py-2 border-2 font-bold text-sm w-full sm:w-40 text-color rounded-full border-[#6d7aff] shadow hover:shadow-md transition">
              Request A Demo
            </button>
          </div>
        </div>

        {/* Gradient Box Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-16">
          {/* Left Column: Accordion */}
          <div className="relative lg:w-[60%] sm:w-[100%] p-8 rounded-2xl ">
            {/* Accordion */}
            {data.map((item, index) => (
              <div
                key={index}
                className="py-6 border-b cursor-pointer transition-all duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-montserrat text-2xl md:text-2xl font-extrabold text-black">
                    {item.title}
                  </h3>
                  <span className="text-2xl text-black font-light">
                    {activeIndex === index ? "×" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="font-montserrat mt-3 text-black leading-relaxed text-base">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Gradient Box */}
          <div className="relative lg:w-[430px] sm:block hidden mt-5 bg-button sm:w-[80%] h-[480px] rounded-2xl mr-20">
            <h1></h1>
          </div>

          <div className="absolute lg:w-[430px] sm:block hidden mt-15 bg-gray-200 sm:w-[80%] h-[480px] rounded-2xl ml-190">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
