import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function RpaBlue() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">RPA Blue Prism <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Blue Prism is an RPA tool offering a virtual workforce powered by software robots, helping companies automate business operations in an agile and cost-effective way. It is based on Java and offers a visual designer with drag-and-drop functionality. 
                            <br />
                            RPA automates regular tasks so users can focus on complex work, reducing human errors. We implement RPA tools like ZAPTEST, HelpSystems, KOFAX, Power Automate, Automation Anywhere, UiPath, Blue Prism, Pega, and many more. We provide the best RPA Blue Prism online job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">RPA Blue Prism <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    {/* Section with image on right on large screens */}
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/RPA_Blue_Prism_Job_Support.png"
                                alt="RPA Blue Prism Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                JobSupportGuru experts are highly skilled in providing online job support due to their practical RPA Blue Prism experience. We offer full-time RPA Blue Prism support in Hyderabad, including system analysis proxy, implementation, upgrades, maintenance, testing, and managed services for students, new hires, and experienced employees.
                                <br />
                                Our knowledgeable technical experts provide guidance and hands-on support. We also provide online training and professional proxy job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other major cities.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">RPA Blue Prism <span className="text-blue-500">Proxy Support</span></h1>
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
                                You may struggle to complete tasks as a Systems Developer, Lead RPA Developer, Business Analyst, Consultant, or Blue Prism Administrator due to time constraints or limited project management experience. Our proxy support helps you develop, configure, and design RPA Blue Prism solutions to meet deadlines.
                                <br />
                                We also provide Microsoft Exchange job support. Additionally, we offer online RPA Blue Prism job support and training globally — including in the USA, UK, Canada, Australia, UAE, and beyond — delivered by certified expert professionals.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">RPA Blue Prism <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        RPA Blue Prism Support <span className="text-blue-500">FAQ</span>
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

export default RpaBlue;
