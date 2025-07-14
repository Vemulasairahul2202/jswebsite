import { Link } from "react-router-dom";
import { useState } from "react";
function Softwaretesting() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="bg-white rounded-lg shadow-md  h-full mx-auto w-full">
      <div className="bg-blue-950 text-white font-semibold text-lg p-3  w-full mx-auto rounded-t-lg  ">
        <button
          className="lg:hidden text-white w-full flex justify-between items-center rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        > <span>Software Testing</span>
          <span >{isOpen ? "▲" : "▼"}</span>

        </button>
        <div className="hidden lg:block text-center">
          Software Testing
        </div>
      </div>
      <ul className={`p-4 space-y-3 ${isOpen ? "block" : "hidden"} lg:block`}>
        {[
          { text: "ETL Testing Job Support", path: "/etl_support" },
          { text: "Selenium Job Support", path: "/selenium_support" },
          { text: "QA Job Support", path: "/qa_support" },
          { text: "Manual Testing Job Support", path: "/manual_support" },
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
                className="w-4 h-4 "
              />
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

}
export default Softwaretesting