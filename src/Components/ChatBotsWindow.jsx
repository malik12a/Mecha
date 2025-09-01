import React from 'react';
import botImg1 from '../assets/ChatBot Description Images/Frame 1000005130.png';
import botImg2 from '../assets/ChatBot Description Images/Frame 1000005130 (1).png';
import botImg3 from '../assets/ChatBot Description Images/Frame 1000005130 (2).png';
import botImg4 from '../assets/ChatBot Description Images/Frame 1000005130 (3).png';

function ChatBotsWindow() {
  const chatBots = [
    {
      id: 'bot1',
      img: botImg1,
      botHeading: 'Support customers on multiple channels',
      botText:
        'Add an AI chatbot to your website, LiveChat, Messenger, or Slack to handle all support cases automatically, 24/7.',
      alignment_left: true,
    },
    {
      id: 'bot2',
      img: botImg2,
      botHeading: 'Show offers to boost sales',
      botText:
        'Proactively reach website visitors with product recommendations to increase engagement and conversions.',
      alignment_left: false,
    },
    {
      id: 'bot3',
      img: botImg3,
      botHeading: 'Deliver on-point answers with AI automation',
      botText:
        'Ensure continuous customer engagement and human-like support without expanding your team.',
      alignment_left: true,
    },
    {
      id: 'bot4',
      img: botImg4,
      botHeading: 'Show offers to boost sales',
      botText:
        'Proactively reach website visitors with product recommendations to increase engagement and conversions.',
      alignment_left: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold font-montserrat text-gray-800 tracking-tight">
          CHATBOT
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {chatBots.map((element) => {
          if (element.alignment_left === false) {
            return (
              <div
                className="bg-white rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 justify-start items-center gap-5"
                key={element.id}
              >
                <div className="text-left mb-5 sm:mb-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                    {element.botHeading}
                  </h2>
                  <p className="text-gray-600 sm:text-xl mb-4">
                    {element.botText}
                  </p>
                  <div className="py-2 sm:py-4">
                    <a
                      href="#"
                      className="bg-gray-800 py-3 px-4 text-lg text-white rounded-2xl hover:opacity-85"
                    >
                      Sign Up Here
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={element.img}
                    alt={element.botHeading}
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="bg-white rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 justify-start items-center gap-5"
                key={element.id}
              >
                <div className="flex items-center justify-center order-2 sm:order-1">
                  <img
                    src={element.img}
                    alt={element.botHeading}
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
                  />
                </div>
                <div className="text-left order-1 sm:order-2 mb-5 sm:mb-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                    {element.botHeading}
                  </h2>
                  <p className="text-gray-600 sm:text-xl mb-4">
                    {element.botText}
                  </p>
                  <div className="py-2 sm:py-4">
                    <a
                      href="#"
                      className="bg-gray-800 py-3 px-4 text-lg text-white rounded-2xl hover:opacity-85"
                    >
                      Sign Up Here
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ChatBotsWindow;
