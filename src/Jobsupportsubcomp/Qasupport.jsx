import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Qasupport() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="md:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">
                            QA <span className="text-blue-500">Online Job Support</span> From INDIA
                        </h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            The Quality Analyst is someone who ensures that the product being made meets the quality requirements. QA is done by ensuring all processes are well documented and done as specified. The quality controller is someone who only looks at the final product and either accepts or rejects it. However, these terms are used interchangeably, and sometimes can be quite misleading. Quality analysts are the first to discover any bugs that may crash the software or cause a substandard user experience. These professionals are tasked with methodically reporting the problems to developers and programmers who created professional testing tools, such as Selenium, Appium, Katalon Studio, Cucumber, HPE Unified Functional Testing (UFT), SoapUI, TestComplete, Worksoft, IBM Rational Functional Tester (RFT), Telerik Test Studio. JobSupportGuru provides the best online job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            QA <span className="text-blue-500">Full Time Job Support</span> From INDIA
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/QA_Job_Support.png"
                                alt="QA Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                JobSupportGuru's team of experienced IT professionals and QA specialists provides QA job support. This is based on their knowledge and experience. For students, freshers, and experienced employees, we provide the best online training and job support in India.
                                <br />
                                In Hyderabad, we provide full-time QA job training as well as manual testing job support, QTP job support, UFT job support, ETL Testing Job Support, Mobile App Testing Job Support, Selenium, and Loadrunner testing tools. Step-by-step instructions will be provided by a professional software engineer. Expert QA job support, QA online technical training, part-time and full-time remote job support, and proxy interview support in Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities. We provide the best online job support from India.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            QA <span className="text-blue-500">Proxy Support</span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Selenium Job Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Due to time constraints or inexperience, you may be unable to complete your projects as a Quality Analyst, Quality Manager, Quality Assurance Engineer, Sampling-Quality Assurance, Testing Manager - Automation, Consulting - Emerging ERP - Analyst, Test Manager, QA Test Analyst, Business/QA Analyst, or Backend QA Analyst. As a result, proxy interview assistance is critical in assisting you with the creation, organization, and design of manual testing. We provide full-time, trained, and experienced individuals to support QA jobs. Full-time QA job support is provided by experienced professionals who are certified. We also provide QA online training and job support in the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">
                            QA <span className="text-blue-500">Support Services</span>
                        </h1>
                        <h1 className="text-sm text-white py-4">
                            We see your project and technologies used, if we are 100% confident then we agree to support you.
                        </h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        QA Support <span className="text-blue-500">FAQ</span>
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

export default Qasupport;
