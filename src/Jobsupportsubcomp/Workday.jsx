import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Workday() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Workday <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start text-sm pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            The Workday platform offers integrated cloud solutions for finance, HR, and student/faculty lifecycle management. Workday provides an innovative approach to enterprise apps with relatively low ownership costs. Workday tools allow businesses to store all necessary company details in one location. We utilize tools such as Basecamp 3, Boomerang, Join.me, Mailchimp, Slack, Buffer, Any.do, Producteev, Snappa, Trello, Wunderlist, Google Drive, Roboform, Simplenote, Unroll.me, and Zapier. Workday covers Financial Management, Business Assets, Recruiting, PSA, Expenses, Procurement, Project & Work Management, Grant Management, HCM, and Insight Apps. JobSupportGuru provides the best online Workday training and job support.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Workday <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/Work%20Day%20Job%20Support.png"
                                alt="Workday Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-sm pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Whether you're a new student or an experienced developer, you may struggle to complete assignments and projects using Workday tools on time. Online help and guidance from experienced specialists can help you make key improvements and overcome challenges. We offer the best Workday job support and training in Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities. Our services include expert job support, online training, full-time remote support, and proxy interview support. JobSupportGuru ensures you get the best online job support services.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Workday <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Workday Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-sm pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Our experts provide specialized support for Workday tasks, ensuring assignments are completed by the required deadlines. We offer Workday solutions, courses, and services to businesses, helping overcome limitations and improve operational capabilities. JobSupportGuru handles all your Workday training and job support needs globally, including in the USA, UK, Canada, Australia, UAE, and other countries. We provide online support from certified professionals with extensive expertise.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Workday <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Workday Support <span className="text-blue-500">FAQ</span>
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

export default Workday;
