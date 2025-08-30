import { useState, useRef, useEffect } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        // Measure the content height for smooth transition
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen, children]);

  return (
    <div className="border border-gray-300 shadow-lg rounded-md mb-4 overflow-hidden">
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition cursor-pointer"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <span className="text-black lg:text-[32px] text-[26px] leading-none">{title}</span>
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

      {/* Content with smooth transition */}
      <div
        id="accordion-content"
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: height,
        }}
      >
        <div className="px-4 py-10 bg-white/40" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
