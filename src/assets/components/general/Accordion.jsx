import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md mb-4 overflow-hidden">
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {/* Icon indicating open/close state */}
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <div
        id="accordion-content"
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? "1000px" : "0px",
        }}
      >
        <div className="px-4 py-3 bg-white">{children}</div>
      </div>
    </div>
  );
}

export default Accordion