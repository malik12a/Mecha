import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import chatVideo from "../assets/chat10.mp4";
import { useAppContext } from "../context/AppContext";

const MainBanner = () => {
  const { navigate } = useAppContext();
  return (
    <div>
      <section className="w-full relative flex flex-col items-center border-b border-white text-white pb-4 bg-center bg-cover bg-white">
        
        {/* Navbar */}
        <Navbar />
        
        <div className="absolute mt-20 font-montserrat font-extrabold">
          <h1 className="text-[#6d7aff] text-8xl opacity-30 ">
          AGENTIC AI CHATBOTS
         </h1>
        </div>

        {/* Content */}
        <div className="min-h-[60vh] flex flex-col mt-10 items-center justify-center w-full px-4">
          {/* Heading */}
          <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold leading-tight max-w-5xl text-black">
            AUTOMATE, QUALIFY, AND SUPPORT <br /> WITH{" "}
            <span className="text-color px-2 py-1 rounded-md inline-block">
              AGENTIC AI
            </span>{" "}
            CHATBOTS
          </h1>

          {/* Subheading */}
          <h3 className="font-montserrat text-sm sm:text-base md:text-lg text-center text-black w-full max-w-5xl mt-4 px-2 sm:px-4">
            Mecha helps you onboard, engage, and resolve faster using AI-powered
            chatbots trained on your data <br /> available 24/7 on Slack, WhatsApp,
            Jira, Trello, and CRMs.
          </h3>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="font-montserrat text-black w-[260px] font-semibold py-3 rounded-3xl shadow-md hover:shadow-xl border-2 border-[#D20003]">
              Enter your business email
            </button>
            <button  onClick={() => navigate("/signup")} className="font-montserrat text-white w-[180px] font-semibold py-3 px-4 bg-[#D20003] rounded-3xl shadow-md hover:shadow-xl">
              Sign up Free
            </button>
          </div>
        </div>

        {/* Animation */}
        <div className="mt-20 w-full h-[300px] sm:h-[450px] md:h-[550px]  overflow-hidden rounded-lg">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={chatVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      </section>
    </div>
  );
};

export default MainBanner;
