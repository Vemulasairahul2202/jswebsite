import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function AngularJSsupport() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Angular JS <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            AngularJS is a JavaScript-based open-source front-end web application framework developed by Google. It's designed to create dynamic web applications that are robust and easy to maintain. The framework is based on the Model-View-Controller (MVC) pattern, which separates data, view, and logic into distinct components — making it easier to manage large and complex apps. AngularJS provides powerful directives, custom HTML attributes that extend standard HTML functionality. These allow developers to create reusable components like forms, tables, and menus easily. We implement AngularJS concepts like Protractor, Karma, Angular UI, Mocha.js, Sublime Text, Djangular, Jasmine, Aptana. We provide the best online AngularJS job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Angular JS <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/AngularJS.png"
                                alt="Angular JS Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Our previous experience with AngularJS has made us experts in the field. We provide full-time online job support and services for AngularJS jobs from Hyderabad and worldwide. Our specialty includes AngularJS implementations, proxy job support, project management, QA development, system optimization, and more — available in Hyderabad, Chennai, Bangalore, Mumbai, Pune, and globally.
                                <br />
                                Our expert-led team provides full online AngularJS support and services. Even after sessions, our experts are available to assist further if needed.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Angular JS <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Angular JS Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                If you're an AngularJS developer, Junior Software Engineer, UI Engineer, JavaScript Developer, AngularJS Trainer, Frontend Developer, Fullstack Developer, Senior Frontend Developer, or Ionic Developer struggling to complete projects, JobSupportGuru can help. We provide support tailored to your time zone, with extensive training and rapid, precise development assistance. We offer part-time and full-time remote job support handled via proxy from Hyderabad. Our certified, expert professionals also offer AngularJS online preparation and job support in India, the USA, the UK, Canada, Australia, the UAE, and other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Angular JS <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Angular JS Support <span className="text-blue-500">FAQ</span>
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

export default AngularJSsupport;
