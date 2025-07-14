import DevelopmentTech from "./DevelopmentTech"
import FaqSection from "./Faq"
import Form1 from "./Form1"
import Processs from "./Processs"
import Rightside from "./Righside"
import Softwaretesting from "./Softwaretesting"
import Tab from "./Tab"
import UITechnologies from "./UITechnologies"
import React, { use, useState } from "react"
function Seleniumsupport() {

    return (
        <>
            <div className="flex flex-col-reverse  lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full ">
                    <div className="text-center">
                        <h1 className="text-4xl">Selenium <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Selenium is a free and open-source tool for automating web browser testing (Web applications are
                            tested using any web browser). Selenium was created as an automation testing tool to address the shortcomings/limitations of manual testing. Selenium is primarily a set of tools
                            that includes the Selenium IDE, Selenium RC (Now Deprecated), Selenium WebDriver, and Selenium Grid. Apart from Selenium tools, we also use Appium, Katalon Studio, Cucumber, HPE Unified Functional Testing
                            (UFT), SoapUI, TestComplete, Worksoft, IBM Rational Functional Tester (RFT), Telerik Test Studio, and other automation tools. Selenium is the best automation framework for web applications. Selenium is the first
                            solution that comes to mind when there is a need for test automation for a website. We provide the best online manual testing job support service from India.
                        </p>

                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Selenium<span className="text-blue-500"> Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row">

                        <div className="md:w-3/5 ">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">

                                JobSupportGuru is made up of experienced IT professionals as well as professionals who specialize in providing online Selenium job support. We offer the best online training and job support for students, freshers, and experienced employees. We offer full-time Selenium job training in Hyderabad, as well as Jira and Trello training on manual testing, Selenium tool and automation job support with Selenium IDE, RC, WebDriver, and Grid.
                                <br></br>
                                The best web testing job and training support provider in Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities, offering expert Selenium job support, Selenium online technical training, full-time remote job support, and proxy interview support. JobSupportGuru will provide the best online job support
                            </p>

                        </div >
                        <div className="md:w-2/5 pt-5 md:pt-10 ">
                            <img
                                src="https://www.jobsupportguru.com/images/Selinium.png"
                                alt="selinium Testing Job Support"
                                className="rounded-tl-3xl"
                            />
                        </div>



                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Selinium<span className="text-blue-500"> Proxy Support</span></h1>
                    </div>



                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center    ">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="selinium Job Support"
                                className="pl-7"

                            />
                        </div>
                        <div className="md:w-3/5 ">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                You may be unable to complete your projects as an Automation Tester - Selenium, Automation Tester - Selenium, and Python, Automation Test Engineer, Automation Test Lead, Java Selenium automation tester, Java, Selenium, Automation Tester due to time constraints or if you are inexperienced to project management. As a result, proxy interview support is critical in assisting you to create, organize, and designing manual testing. This is done so that you can complete your work within the time frame established by manual testing proxy support from India. We provide trained and experienced individuals who work full-time to support Selenium jobs. Full-time Selenium job support is provided by experienced professionals that are certified. We also provide Selenium online training, and job support in the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>

                        </div>

                    </div>

                    <div className="text-center">
                        <Processs/>
                    </div>

                              <div className="bg-blue-950 text-center pt-8 ml-9 mt-4  ">
                        <h1 className="text-4xl text-white">Selenium <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-s text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>
                    <div className=" pl-9"> <Tab /></div>
                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Selenium Support <span className="text-blue-500">FAQ</span>
                    </h2>

                    <div className="pt-4 pl-9" ><FaqSection /></div>








                </div>

                {/* Right Section */}
                <Rightside/>
            </div >
        </>
    )
}
export default Seleniumsupport