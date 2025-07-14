import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Rpaauto() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">RPA Automation Anywhere <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            RPA stands for Robotic Process Automation. Automation Anywhere is a leading RPA tool that allows you to automate time-consuming business processes such as inventory checks, supply reorders, report generation, data entry, and formatting. 
                            <br />
                            Use Automation Anywhere to import/export data, monitor websites, and automate repetitive tasks. We implement tools such as Keysight's Eggplant, Inflectra Rapise, Blue Prism, UiPath, Automation Anywhere, Pega, and many more. We provide the best online job support service from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">RPA Automation Anywhere <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/RPA%20_Automation_Any_Where_Job%20support.png"
                                alt="RPA Automation Anywhere Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Our specialists have extensive real-world experience with Automation Anywhere and other RPA tools. We provide full-time and part-time job support in Hyderabad and other cities, including Blue Prism proxy support, Automation Anywhere tool support, WorkFusion, and Pega Systems.
                                <br />
                                JobSupportGuru is one of the top providers of professional RPA Automation Anywhere online training and remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and beyond. We provide the best online job support to help you succeed.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">RPA Automation Anywhere <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

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
                                If your RPA Developer, Technical Support, Senior Developer, Consultant, or Lead Developer is unavailable, our proxy experts help ensure your projects are completed on time. We provide flexible support — part-time or full-time — to meet your deadlines.
                                <br />
                                We also offer global support (USA, UK, Canada, Australia, UAE, and more) delivered by certified, expert professionals. Our proxy interview and remote job support services ensure your project success.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">RPA Automation Anywhere <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used; if we are 100% confident, then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        RPA Automation Anywhere Support <span className="text-blue-500">FAQ</span>
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

export default Rpaauto;
