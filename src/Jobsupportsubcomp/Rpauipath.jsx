import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Rpauipath() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">RPA UiPath <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            RPA Collaboration and learning are made simple on the open platform known as UiPath. UiPath is one of the most popular RPA tools, allowing IT teams to set up software robots that gather and analyze data from various apps to automate repetitive tasks. 
                            <br />
                            RPA software mimics human actions as part of a process. There are specialized software tools for specific areas like accounting and finance, and subcategories like hybrid RPA, unattended automation, and attended automation. We implement tools like Blue Prism, Automation Anywhere, Kofax Kapow, NICE, and more. We provide the best online RPA UiPath job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">RPA UiPath <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    {/* Section with image on right on large screens */}
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/RPA%20UI%20Path%20Job%20support.png"
                                alt="RPA Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                JobSupportGuru has specialists with strong knowledge and hands-on RPA UiPath experience. We provide the best online training, full-time RPA UiPath job support, Blue Prism proxy support, Automation Anywhere support, UiPath tool support, and WorkFusion support in India.
                                <br />
                                We also offer professional RPA UiPath proxy job support, full-time remote support, and online technical training from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and more.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">RPA UiPath <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    {/* Section with image on left on large screens */}
                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="RPA Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                If your RPA UiPath developer, process architect, project manager, lead developer, business analyst, or data analyst is unavailable or facing challenges, our proxy support helps you complete projects on time. 
                                <br />
                                We help develop, set up, and build RPA UiPath workflows to meet deadlines. We offer full-time and part-time support and also provide online training and job support worldwide including the USA, UK, Canada, Australia, and UAE, with certified experts.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">RPA UiPath <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        RPA UiPath Support <span className="text-blue-500">FAQ</span>
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

export default Rpauipath;
