import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Tibco() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">
                            TIBCO Spotfire <span className="text-blue-500">Online Job Support</span> From INDIA
                        </h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            TIBCO Software's TIBCO Spotfire is a very powerful enterprise-grade analytics platform for gaining business insights. You can use it to quickly create presentations, generate dynamic reports, and instantly filter data. It can read from files, relational & NoSQL databases, OLAP, Hadoop, web services, and cloud apps (e.g., Google Analytics). It is widely used by data scientists for analytics and AI.
                            <br />
                            TIBCO Spotfire allows users to combine different types of data in one analysis. It is used by many top industries globally and has rich features that make it one of the best products in the market. We offer the best online job support for TIBCO Spotfire from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            TIBCO Spotfire <span className="text-blue-500">Full Time Job Support</span> From INDIA
                        </h1>
                    </div>

                    {/* Section with image on right on large screens */}
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/Tibco_Spotfire_Job_Support.png"
                                alt="TIBCO Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                The specialists at JobSupportGuru have expertise and hands-on experience with TIBCO Spotfire, making them skilled at providing online job support. We provide the best online training, full-time TIBCO Spotfire job support to students, new hires, and experienced employees, as well as training on system analysis proxy, upgrades, implementation, support features, managed services, and testing.
                                <br />
                                We also offer professional TIBCO Spotfire proxy job support, full-time remote support, and more. We are one of the best companies offering online TIBCO Spotfire training and job support in Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            TIBCO Spotfire <span className="text-blue-500">Proxy Support</span>
                        </h1>
                    </div>

                    {/* Section with image on left on large screens */}
                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="TIBCO Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                You might face difficulties completing tasks as a TIBCO Spotfire Developer, Junior Developer, Process Developer, SSE / LEAD, Application Lead, TIBCO Admin, Spotfire Analyst, Consultant, Support Engineer, or Quality Engineer. You may need to develop, configure, and design Spotfire with the help of proxy interview support to meet deadlines. Our certified experts provide full-time job support and online training worldwide, including the USA, UK, Canada, Australia, UAE, and more.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">
                            TIBCO Spotfire <span className="text-blue-500">Support Services</span>
                        </h1>
                        <h1 className="text-sm text-white py-4">
                            We see your project and technologies used, if we are 100% confident then we agree to support you.
                        </h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        TIBCO Spotfire Support <span className="text-blue-500">FAQ</span>
                    </h2>

                    <div className="pt-4 pl-0 md:pl-9">
                        <FaqSection />
                    </div>
                </div>

                {/* Right Section */}
                <Rightside />
            </div>
        </>
    );
}

export default Tibco;
