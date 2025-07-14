import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Fjava() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">FullStack Java <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Java is an object-oriented programming language that allows developers to write code once and run it anywhere. Java can be compiled and run on any platform supporting Java without recompilation. From laptops to data centers, game consoles, scientific supercomputers, and mobile phones to the Internet, Java is everywhere!
                            <br />
                            Our knowledgeable and experienced experts help you work with Java concepts like SonarQube, NetBeans, IntelliJ IDEA, Android Studio, Jcreator, JDK, and Oracle JDeveloper. We provide the best online job support services from India for students and employees facing difficulties with Java projects.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Java <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Full%20Stack%20Java%20Job%20Support.png"
                                alt="Java Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                We provide extensive Java knowledge and support with object-oriented programming, Full-stack Java, and advanced frameworks like Spring Boot, Java with React, and Java with Angular. Our expert team offers full-time or part-time job support from India.
                                <br />
                                A dedicated Java developer will guide you and provide complete support. Our experts are always available for questions and continuous guidance. JobSupportGuru offers reliable remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Java <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/JoinNow_Make_Your_Job_Easier.png"
                                alt="Java Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                We provide proxy support for Java programmers, developers, webmasters, and software engineers when they are unavailable. Our expert team completes work on their behalf to meet deadlines.
                                <br />
                                We offer Java online help, job support, and full-stack Java support services to students, freshers, and employees in India and worldwide. Our services include Java Support Services, Java Interview Proxy Services, and Full-stack Java Job Support from India, the USA, UK, Canada, Australia, UAE, and more.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Java <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used; if we are 100% confident, then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Java Support <span className="text-blue-500">FAQ</span>
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

export default Fjava;
