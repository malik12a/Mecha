import React, { useState, useEffect } from "react";
import botOne from "../assets/botOne.png";
import botTwo from "../assets/botTwo.png";
import botThree from "../assets/botThree.png";
import botFour from "../assets/botFour.png";

const bots = [
  { id: 1, label: "Bot 1", image: botOne },
  { id: 2, label: "Bot 2", image: botTwo },
  { id: 3, label: "Bot 3", image: botThree },
  { id: 4, label: "Bot 4", image: botFour },
];

const Crousal = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bots.length) % bots.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bots.length);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getBoxStyle = (index) => {
    if (index === currentIndex) {
      return "scale-110 z-20 border-2 border-[#6d7aff] rounded-4xl overflow-hidden";
    } else if (
      index === (currentIndex - 1 + bots.length) % bots.length ||
      index === (currentIndex + 1) % bots.length
    ) {
      return "z-10 opacity-20";
    } else {
      return "hidden";
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col mb-12 items-center font-montserrat w-full px-4 py-10">
      {/* Heading */}
      <div className="text-center text-3xl sm:text-5xl font-bold mb-25 flex flex-wrap justify-center">
        <h2 className="text-gray-800">Customized</h2>
        <h2 className="text-[#6d7aff] ml-3">Chat-Bot</h2>
      </div>

      {/* 👉 Mobile View: Show all bots vertically (no carousel) */}
      <div className="flex flex-col sm:hidden w-full gap-6">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="w-full max-w-sm mx-auto border-2 border-[#6d7aff] rounded-4xl overflow-hidden"
          >
            <img
              src={bot.image}
              alt={bot.label}
              className="w-56 h-56 object-contain mx-auto"
            />
            <div className="flex flex-col text-white font-montserrat font-extrabold text-[1.1rem] bg-gradient-to-r from-indigo-500 via-black to-indigo-500 justify-center rounded-bl-[29px] rounded-br-[29px] items-center w-full h-[100px]">
              {bot.id === 1 && (
                <>
                  <p>24x7</p>
                  <p>Customer Support</p>
                </>
              )}
              {bot.id === 2 && (
                <>
                  <p>Automated</p>
                  <p>Employee Support</p>
                </>
              )}
              {bot.id === 3 && (
                <>
                  <p>Conversational</p>
                  <p>Commerce</p>
                </>
              )}
              {bot.id === 4 && (
                <>
                  <p>Ai Copilots</p>
                  <p>trained on your data</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 👉 Desktop View: Carousel */}
      <div className="hidden sm:flex flex-col sm:flex-row items-center w-full justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-400"
        >
          ◀
        </button>

        {/* Bots Container */}
        <div className="flex items-center gap-4 transition-all duration-300 w-full sm:w-auto justify-center">
          {bots.map((bot, index) => (
            <div
              key={bot.id}
              onClick={() => handleItemClick(index)}
              className={`min-w-[240px] sm:w-80 flex-shrink-0 h-auto flex flex-col items-center justify-center font-bold transition-transform duration-300 cursor-pointer ${getBoxStyle(index)}`}
            >
              <img
                src={bot.image}
                alt={bot.label}
                className="w-56 h-56 object-contain"
              />
              <div className="flex flex-col text-white font-montserrat font-extrabold text-[1.1rem] bg-gradient-to-r from-indigo-500 via-black to-indigo-500 justify-center rounded-bl-[29px] rounded-br-[29px] items-center w-full h-[100px]">
                {bot.id === 1 && (
                  <>
                    <p>24x7</p>
                    <p>Customer Support</p>
                  </>
                )}
                {bot.id === 2 && (
                  <>
                    <p>Automated</p>
                    <p>Employee Support</p>
                  </>
                )}
                {bot.id === 3 && (
                  <>
                    <p>Conversational</p>
                    <p>Commerce</p>
                  </>
                )}
                {bot.id === 4 && (
                  <>
                    <p>Ai Copilots</p>
                    <p>trained on your data</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-400"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Crousal;
