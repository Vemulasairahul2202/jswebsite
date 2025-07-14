import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Pega() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">PEGA <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            PEGA stands for "Programs in Extra-Galactic Astronomy" and it provides Business Process Management (BPM) and Customer Relationship Management (CRM) solutions to improve efficiency and workflows. PEGA is a powerful platform with many integrated tools, especially useful for students, freshers, and professionals. 
                            <br />
                            We cover concepts like Connector SQL, Service Package creation, SOAP, REST, manual SOAP & REST setup, differences between them, correspondence, email listeners, and more. We provide the best online job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">PEGA <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Pega_Job_Support.png"
                                alt="PEGA Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Among the leading platforms for online training and job support in Hyderabad is JobSupportGuru. Our expert team helps students, freshers, and professionals complete complex projects on time, providing full-time or part-time remote support from India.
                                <br />
                                We offer PEGA project support, PEGA Mobile Engagement job support, PEGA Robotic Process Automation job support, and more. You will receive the best assistance from our technically experienced and dedicated team of professionals.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">PEGA <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="PEGA Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-base pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                If you are a project manager, business analyst, architect, designer, developer, tester, or QA struggling with complex PEGA implementation, we can help. We assign a dedicated consultant who can even support you through proxy interviews.
                                <br />
                                We provide full-time PEGA job support with certified, experienced professionals. Our services cover PEGA implementation, cloud services, and job assistance for students, freshers, and experienced employees. We also support clients in India, the USA, UK, Canada, Australia, UAE, and worldwide.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">PEGA <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used; if we are 100% confident, then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        PEGA Support <span className="text-blue-500">FAQ</span>
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

export default Pega;
