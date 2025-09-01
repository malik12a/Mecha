import React, { useState } from "react";

const AccordionItem = ({
  question,
  answer,
  index,
  isOpen,
  toggle,
  itemClass,
  useDefaultStyles,
}) => {
  const defaultItemClass = `lg:w-70 sm:w-20 max-w-md mx-auto bg-black p-4 rounded-3xl shadow-md border border-[#ceff0d] my-4 
      ${index % 2 === 0 ? "ml-45" : "mr-auto"}`;

  const textColor = useDefaultStyles ? "text-white" : "text-black";

  return (
    <div className={useDefaultStyles ? defaultItemClass : itemClass}>
      <div className="flex justify-between items-start">
        <h3 className={`font-semibold text-sm ${textColor}`}>{question}</h3>
        <button
          onClick={() => toggle(index)}
          className={`text-xl font-light ${textColor}`}
        >
          {isOpen ? "×" : "+"}
        </button>
      </div>
      {isOpen && <p className={`mt-2 text-sm ${textColor}`}>{answer}</p>}
    </div>
  );
};

const Accordion = ({
  questions = [],
  wrapperClass = "flex flex-col w-full max-w-md",
  itemClass = "",
  useDefaultStyles = true,
}) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
  };

  return (
    <div className={wrapperClass}>
      {questions.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          index={i}
          isOpen={openIndexes.includes(i)}
          toggle={toggleAccordion}
          itemClass={itemClass}
          useDefaultStyles={useDefaultStyles}
        />
      ))}
    </div>
  );
};

export default Accordion;
