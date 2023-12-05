import React, { useState } from "react";

export default function HoverDropdown() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div onMouseLeave={() => setOpen(false)} className="relative ">
      <button onMouseOver={() => setOpen(true)} className="flex items-center p-2">
        <a href="/about" className="text-white hover:text-gray-300 hover:border-b-2 border-white px-3 py-2 font-semibold ">About</a>
      </button>
      <div
        className={`absolute right-[-10] top-8 bg-white text-black w-40 py-2 mt-2 rounded-lg shadow-xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* current cv,linkedin, github profile, google sch profile, research gate profile, contact */}
        <a className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          Current CV
        </a>
        <a
          href="https://www.linkedin.com/in/schatterjee30/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/schatterjee30"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
        >
          Github Profile
        </a>
        <a
          href="https://scholar.google.com/citations?user=TOeB3YMAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
        >
          Google Scholar
        </a>
        <a
          href="https://www.researchgate.net/profile/Suvo-Chatterjee-2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
        >
          Research Gate
        </a>
        <a
          href="/contact"
          className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
        >
          Contact From
        </a>
      </div>
    </div>
  );
}
