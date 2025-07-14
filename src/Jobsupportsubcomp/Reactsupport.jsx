import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Reactsupport() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">React <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            React is a JavaScript library created by Facebook in 2013 to create dynamic user interfaces for the web. During interaction with the page, content can change dynamically. This means the page does not render just static HTML. React uses virtual copies of the DOM to reload only the elements that have changed. React uses something called JSX — an extension to JavaScript that looks like regular HTML with opening and closing tags and content between them. Your HTML is converted to JavaScript code that creates your HTML. We help you implement React concepts like Reactive, React Cosmos, React Sight, Storybook, CodeSandbox, React Developer Tools, Evergreen, Bit, etc. We offer the best online job support services from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">React <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/React_Job_Support.png"
                                alt="React Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Whether you are a complete newcomer to web development or already an experienced Web developer, our course provides comprehensive information. This web-based training focuses on industry best practices for React development. JobSupportGuru is a recognized industry pioneer in this field.
                                <br />
                                We provide full-time full-stack React job support, online training, React Support Services, React Interview Proxy Services from India, and React full-time remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, etc. We also provide React online preparation and job support in India, the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">React <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="React Job Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                If you are a React JS Designer, TV App React JS Developer, WMA-React JS Frontend Developer and find it difficult to complete your projects on time with ReactJS, we can help. We provide full-time and part-time React training and job support for students, employees, and experienced professionals. Having our proxy work on your behalf ensures that your projects are completed. With their technical skills and experience in React development, you'll get your work done on time. One of our experienced React developers will be assigned to lead, support, and complete your React projects. We provide online development help from India with certified expert professionals. We also provide React online preparation and job support in India, the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div> 
                    
                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">React <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9"> 
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        React Support <span className="text-blue-500">FAQ</span>
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

export default Reactsupport;
