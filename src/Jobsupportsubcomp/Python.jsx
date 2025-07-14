import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Python() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Python <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start text-base md:text-lg  pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Python is a high-level, object-oriented programming language. Compared to other languages, Python is simple, easy to learn, and widely used for mobile app development, web, data science, automation, and more. As an open-source language, it is constantly evolving with new libraries and add-ons. 
                            <br />
                            Our team offers quality online training and job support. We help implement Python concepts including Scikit-Learn, Keras, Theano, SciPy, Selenium, Robot Framework, TestComplete, Beautiful Soup, LXML, and Scrapy. We provide the best online Python job support service from India with expert Python developers.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Python <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Full_Stack_Python_Job_Support.png"
                                alt="Python Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base md:text-lg  pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Python is used for data science, game development, mobile development, automation, and machine learning. Many students and employees face difficulties in completing their projects on time with full accuracy. This is where our online training and job support services help.
                                <br />
                                We offer Python online technical training and full-time remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other locations. Our experts ensure smooth project delivery and help students and employees gain practical skills.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Python <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Python Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base md:text-lg  pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                As a Python Web Developer, Software Engineer, Automation Tester, Data Analyst, Data Scientist, or Machine Learning Engineer, if you get stuck, JobSupportGuru can help. We offer proxy support to help complete your projects, provide in-depth guidance, and even assist with interviews.
                                <br />
                                Our experienced consultants will ensure your work is completed on time. We provide full-time Python job support with certified, expert professionals, and also offer services worldwide — including the USA, UK, Canada, Australia, UAE, and more.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Python <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used; if we are 100% confident, then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Python Support <span className="text-blue-500">FAQ</span>
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

export default Python;
