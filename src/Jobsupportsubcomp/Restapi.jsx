import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Restapi() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Rest API <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            REST or REpresentational State Transfer is an architectural style used to design network-based software architectures. In a REST-style application, the web application organizes business logic using object entities and CRUD operations (Create, Retrieve, Update, Delete). 
                            <br />
                            We implement Rest API tools like Katalon Studio, Postman, Apigee, JMeter, Rest-assured, Assertible, Soap UI, Karate DSL, API Fortress, Pyresttest, Hopscotch, Taurus, Citrus Framework, and more. We provide the best online job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Rest API <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Restapi.png"
                                alt="Restapi Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Our Rest API specialists can assist you through online training and job support sessions. We provide detailed guidance, Rest API interview proxy services, and remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities. Our team ensures you meet your professional goals with our flexible support options.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Rest API <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Rest API Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                It may be challenging for developers and engineers to keep up with project deadlines and evolving technologies. We provide part-time and full-time proxy and remote job support for Fullstack Rest API Developers, Senior Software Engineers, Core Java Developers, iOS Developers, Automation Testers with API experience, and more. Our global services cover the USA, UK, Canada, Australia, UAE, and beyond — all delivered by certified, experienced professionals.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Rest API <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used; if we are 100% confident, then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Rest API Support <span className="text-blue-500">FAQ</span>
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

export default Restapi;
