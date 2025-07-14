import { Link } from "react-router-dom";
import React, { useState } from 'react';
function Toolsupport({ columns = 1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { text: 'Unqork Job Support', path: '/Uncork_support' },
    { text: 'PowerBI Job Support', path: '/PowerBi_support' },
    { text: 'Tableau Job Support', path: '/Tableau_support' },
    { text: 'WorkDay Job Support', path: '/WorkDay_support' },
    { text: 'Pega Job Support', path: '/Pega_support' },
    { text: 'RPA UiPath Job Support', path: '/RPAui_support' },
    { text: 'RPA Automation Anywhere Job Support', path: '/RPAauto_support' },
    { text: 'RPA Blue Prism Job Support', path: '/RPAblue_support' },
    { text: 'TIBCO Spotfire Job Support', path: '/Tibco_support' },
    { text: 'RestAPI Job Support', path: '/RestAPI_support' },
    { text: 'JBoss Job Support', path: '/JBoss_support' },
    { text: 'Mulesoft Job Support', path: '/Mulesoft_support' },
    { text: 'SAP Job Support', path: '/SAP_support' },
    { text: 'Shellscripting Job Support', path: '/Shell_support' },
    { text: 'OutSystem Job Support', path: '/OutSystem_support' },
    { text: 'SAS Programming Job Support', path: '/SAS_support' },
    { text: 'PHP Job Support', path: '/PHP_support' },
    { text: 'DataStage Job Support', path: '/DataStage_support' },
    { text: 'QlikView Job Support', path: '/QlikView_support' },
    { text: 'QlikSense Job Support', path: '/QlikSense_support' },
    { text: 'VMware Job Support', path: '/VMware_support' },
    { text: 'MicroStrategy Job Support', path: '/MicroStrategy_support' },
    { text: 'Informatica Job Support', path: '/Informatica_support' },
    { text: 'SOA Admin Job Support', path: '/SOAAdmin_support' },
    { text: 'Abinitio Job Support', path: '/Abinitio_support' },
    { text: 'IBM Job Support', path: '/IBM_support' },
    { text: 'ApacheTomcat Server Job Support', path: '/Tomcat_support' },
    { text: 'TrizetoFacets Job Support', path: '/Trizeto_support' },
  ];

  // Conditional classes
  const gridClass =
    columns === 2
      ? "grid  grid-cols-1 md:grid-cols-2   gap-x-6 gap-y-3"
      : "grid grid-cols-1 gap-y-5";

  return (
    <div className="w-full  lg:max-w-lg bg-white rounded-lg shadow-md mx-auto ">
      <div className="bg-blue-950 text-white font-semibold text-lg p-3    w-full mx-auto rounded-t-lg  ">
        <button
          className="lg:hidden text-white w-full flex justify-between items-center rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        > <span>Tool Job Support</span>
          <span >{isOpen ? "▲" : "▼"}</span>

        </button>
        <div className="hidden lg:block text-center">
          Tool Job Support
        </div>
      </div>

      <div className={`p-6 ${gridClass} ${isOpen ? "block" : "hidden"} lg:block`}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex   items-center gap-2 text-black hover:text-blue-700 text-sm focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
            onClick={()=>setIsOpen(false)}
          >
            <img
              src="https://www.jobsupportguru.com/images/left-arrow.svg"
              alt="arrow icon"
              className="w-4 h-4 justify-center content-center shrink-0"
            />
            <span className="pl-1 pb-1" >{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Toolsupport;
