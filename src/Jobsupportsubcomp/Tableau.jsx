import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Tableau() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Tableau <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start text-sm pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Tableau is a powerful data analytics and visualization tool developed in 2003 by Stanford students. It is designed to make databases more accessible and intuitive. Development is done using Tableau Desktop, which can connect to various data sources and perform all calculations internally. The tool was designed to be straightforward and user-friendly. We also implement Tableau concepts including Tableau Desktop, Tableau Public, Tableau Online, Tableau Server, and Tableau Reader. We provide the best online Tableau job support service from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Tableau <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/TABLEAU%20JOB%20SUPPORT.png"
                                alt="Tableau Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-sm pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                JobSupportGuru has a highly skilled team of IT specialists with real-time experience in Tableau. Our experts provide online Tableau Desktop proxy support, Tableau Public support, Tableau Online support, Tableau Server support, Tableau Reader support, and Tableau job support from Hyderabad. We also provide the best online job and training support services, including Tableau proxy support, technical training, and full-time remote support from cities like Hyderabad, Chennai, Bangalore, Mumbai, and Pune.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Tableau <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Tableau Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start text-sm pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                As a Tableau software developer, BI engineer, reporting analyst, data visualization architect, or data scientist, you might face challenges completing your projects on time. We provide proxy interview assistance, helping you build, configure, and design Tableau projects efficiently. Our certified professionals in India provide full-time job support, and we also offer Tableau online training and job support services globally in the USA, UK, Canada, Australia, UAE, and other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-10 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Tableau <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">
                            We see your project and technologies used, if we are 100% confident then we agree to support you.
                        </h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Tableau Support <span className="text-blue-500">FAQ</span>
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

export default Tableau;
