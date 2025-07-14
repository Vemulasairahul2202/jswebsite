import { Link } from "react-router-dom"
import React, { useState } from 'react';
function UITechnologies() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md h-full w-full">
      <div className="bg-blue-950 text-white font-semibold text-lg p-3    w-full mx-auto rounded-t-lg  ">
        <button
          className="lg:hidden text-white w-full flex justify-between items-center rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        > <span>UI Technologies</span>
          <span >{isOpen ? "▲" : "▼"}</span>

        </button>
        <div className="hidden lg:block text-center">
           UI Technologies
        </div>
      </div>
     <ul className={`p-4 space-y-3 ${isOpen ? "block" : "hidden"} lg:block`}>
        {[
          { text: "Angular Job Support", path: "/angular_support" },
          { text: "AngularJs Job Support", path: "/angularjs_support" },
          { text: "React Job Support", path: "/react_support" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center gap-2 text-black hover:text-blue-700 text-sm"
               onClick={()=>setIsOpen(false)}
            >
              <img
                src="https://www.jobsupportguru.com/images/left-arrow.svg"
                alt="arrow"
                className="w-4 h-4"
              />
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UITechnologies
