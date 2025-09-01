import React, { useState } from "react";

const HowToBuild = () => {
  const tabs = ["Scan", "Tune", "Resolve", "Analyze"];
  const [activeTab, setActiveTab] = useState("Scan");

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-montserrat font-extrabold mb-15 text-xl md:text-5xl text-black py-4">
        HOW TO BUILD AND DEPLOY
      </h1>

      <section
        className="w-full relative"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(53.66deg, #6D7AFF -1.08%, #2D1A6E 41.11%, #5A39A9 119.14%)",
          border: "1px solid rgba(0,0,0,0.02)",
        }}
      >
        {/* Tab Bar */}
      <div className="absolute top-10 right-1/2 translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-[100%] sm:max-w-100 z-50">
  <div className="flex justify-center flex-wrap">
    <div className="flex flex-wrap bg-[#E9E9E9] h-12 rounded-xl shadow items-center px-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 py-1 rounded-md text-gray-600 font-medium transition ${
            activeTab === tab
              ? "bg-white text-black shadow-sm"
              : "hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
</div>



        <div className="font-montserrat max-w-[1440px] mx-auto px-8 py-16 mt-16 flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="flex-1 text-white">
            <p className="uppercase tracking-widest text-sm opacity-70 mb-2">
              No-Code Solutions
            </p>
            <h2 className="text-4xl font-bold leading-snug">
              Build and Deploy AI Agents <br /> With No-Coding
            </h2>
            <p className="mt-4 font-semibold text-lg">
              Empower Your Team. Accelerate Innovation.
            </p>
            <p className="mt-4 text-[#ADADAD] leading-relaxed max-w-lg">
              Empower your team to innovate and respond swiftly to your business
              needs. Our intuitive <strong className="text-white">No-Code AI Agent Builder</strong>{" "}
              lets you create, customize, and deploy AI agents in minutes.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <img src="./market_icon.png" alt="" className="h-16" />
                <div>
                  <h3 className="font-bold text-lg">Speed to Market</h3>
                  <p className="text-[#ADADAD]">
                    Launch AI solutions quickly to stay ahead of the
                    competition.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="./flexibility_icon.png" alt="" className="h-16" />
                <div>
                  <h3 className="font-bold text-lg">Flexibility</h3>
                  <p className="">
                    Easily adapt AI agents to evolving customer needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/dashboard.png"
              alt="No Code Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10 pb-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4C9EF3] to-[#AB35D6] text-white rounded-full font-semibold hover:opacity-90 transition">
            <img src="./icon in white.png" alt="" className="h-4 w-6" />
            Ask MECHA
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowToBuild;
