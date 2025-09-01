import React from "react";
import Accordion from "./Accordion";
import { assets } from "../assets/assets";

const leftQuestions = [
  { question: "Can I test ChatBot for free?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "Does installing ChatBot on a wensite require coding?", answer: "useState is a React hook that lets you add state to functional components." },
  { question: "Are technical skills required to create an advanced chatbot?", answer: "JSX stands for JavaScript XML. It allows you to write HTML in React." },
  { question: "What is a generative AI chatbot?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "How can AI chatbots improve customer service?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "How do AI chatbots benefit customer support?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "What is the most advanced AI chatbot for customer service?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "What is the best AI chatbot for customer service?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "What role do chatbots play in sales processes?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "How do chatbots assists in qualifying and converting leads?", answer: "Props are inputs to components. They are passed down from parent to child." },
];

const rightQuestions = [
  { question: "Can ChatBot be integrated with LiveChat?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "Can one chatbot be connected with multiple channels?", answer: "useState is a React hook that lets you add state to functional components." },
  { question: "What is a chatbot?", answer: "JSX stands for JavaScript XML. It allows you to write HTML in React." },
  { question: "How does a generative AI chatbot work?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "I've made changes to my chatbot,but the old version is still showing in the widget.What's happening?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "How do AI chatbots handle customer interactions?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "What are AI-powered customer service bots?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "How do chatbots contribute to marketing efforts?", answer: "Props are inputs to components. They are passed down from parent to child." },
  { question: "How can chatbots help in engaging potential customers?", answer: "Props are inputs to components. They are passed down from parent to child." },
  {
    question: "How can I configure my ChatBot to obtain user?",
    answer: "Props are inputs to components. They are passed down from parent to child. Props are inputs to components. They are passed down from parent to child.",
  },
];

const FAQS = () => {
  return (
    <div className="relative h-auto overflow-hidden py-12 px-4 sm:px-6 lg:px-12">
      {/* Section Content with Background */}
      <div className="relative w-full max-w-[1900px] bg-gray-200 rounded-2xl p-6 sm:p-10">
        {/* Heading */}
        <h1 className="font-montserrat text-center sm:text-left text-2xl sm:text-3xl font-extrabold text-black mt-15 mb-5">
          Frequently Asked Questions
        </h1>

        {/* Accordion Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          {/* Left Accordion */}
          <div className="w-full lg:w-1/2">
            <Accordion
              questions={leftQuestions}
              wrapperClass="flex flex-wrap gap-4"
              itemClass="w-full font-montserrat bg-white rounded-2xl p-6"
              useDefaultStyles={false}
            />
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-1/2">
            <Accordion
              questions={rightQuestions}
              wrapperClass="flex flex-wrap gap-4"
              itemClass="w-full font-montserrat bg-white rounded-2xl p-6"
              useDefaultStyles={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
