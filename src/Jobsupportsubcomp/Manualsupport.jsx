import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Manualsupport() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Manual Testing <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Manual testing is a software testing process in which test cases are executed manually without the use of an automated device. Manual Testing is the process of verifying an application's functionality in keeping with the client’s needs without using any automation services. One of the most basic testing methods is Manual Testing since it can be found in both visible and invisible software issues. Before such newly developed software is given to automated testing, it requires knowledge of Manual Testing. But, knowledge of every automated testing tool is not mandatory for Manual Testing and we implement Manual Testing concepts like LoadRunner, Citrus, ZAP, NUnit, JIRA, SonarQube, JMeter, Bugzilla, Mantis, Tessy, TestLink, Trac, ALM (Application Lifecycle Management), Sikuli, Jenkins. They are classified into White box testing, Black box testing, Acceptance Testing, Unit Testing, System Testing, and Integration Testing. We provide the best online Manual Testing job support service from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Manual Testing <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5  pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/ManualTesting_Job_Support.png"
                                alt="Manual Job Support"
                                className="rounded-tl-3xl w-full mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                JobSupportGuru is composed of professionals who specialize in providing online job support for Manual Testing. For students, freshers, and experienced employees, we offer the best online training and job support. We provide full-time Manual Testing job training, Jira training, Trello on Manual Testing, Zephyr tool job training, Sauce Labs job training, Browser Stack job training, Bugzilla job training, and MantisBT job training in Hyderabad.
                                <br />
                                A professional software engineer would give practical instructions. The best web job and training support provider with expert Manual Testing job support, Manual Testing online technical training, full-time remote job support, and proxy interview support in Hyderabad, Chennai, Bangalore, Mumbai, Pune, etc. JobSupportGuru will provide the best online job support.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Manual Testing <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Manual Job Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                As a Manual Testing developer, Software tester, manual tester, QA manual tester, automation tester, test consultant, test analyst, QA analyst, test engineer, test architect, or software tester, due to limited time or if you're a beginner to project management, you may be unable to finish your projects. As a result, proxy interview support plays a major role in assisting you to create Manual Testing, organize it, and design it. We offer trained, experienced people who work full-time to support Manual Testing jobs. We provide full-time Manual Testing job support from certified, expert professionals. We also provide Manual Testing online preparation, and Manual Testing job support in the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div> 

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Manual Testing <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9"> 
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Manual Testing Support <span className="text-blue-500">FAQ</span>
                    </h2>

                    <div className="pt-4 pl-0 md:pl-9">
                        <FaqSection />
                    </div>
                </div>

                {/* Right Section */}
                <Rightside />
            </div>
        </>
    )
}

export default Manualsupport;
