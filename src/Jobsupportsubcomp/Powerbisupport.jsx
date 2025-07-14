import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";

function Powerbisupport() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">
                            PowerBI <span className="text-blue-500">Online Job Support</span> From INDIA
                        </h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Business intelligence administration PowerBI is provided by Microsoft. The PowerBI interface is designed to provide end users with intuitive data visualizations and business intelligence. Different PowerBI renditions include Desktop, SaaS, and mobile apps for various business uses. It is an inexpensive alternative to many other BI tools. In recent years, many tools have emerged that simplify data analysis.
                            <br />
                            We will implement PowerBI tools like DATAPINE, SAS BUSINESS INTELLIGENCE, INFOR BIRST, SAP BusinessObjects, PENTAHO, DOMO, ORACLE BUSINESS INTELLIGENCE, INETSOFT STYLE INTELLIGENCE, ZOHO ANALYTICS, DUNDAS BI, GOOD DATA, IBM COGNOS ANALYTICS, METABASE, QLIKSENSE, BOARD. It does not require coding knowledge. We provide the best PowerBI online training and job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            PowerBI <span className="text-blue-500">Full Time Job Support</span> From INDIA
                        </h1>
                    </div>

                    {/* Section with image on right on large screens */}
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/PowerBI_Job_Support.png"
                                alt="PowerBI Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Many PowerBI courses and services are available to organizations that require advanced data analysis. We provide specialized training with highly experienced instructors as well as hands-on workplace support. We also offer proxy interview support and project support.
                                <br />
                                We provide part-time and full-time remote job support for PowerBI from India to help consolidate your vision and improve your technical skills through experienced guidance. We also offer online training and job support in Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            PowerBI <span className="text-blue-500">Proxy Support</span>
                        </h1>
                    </div>

                    {/* Section with image on left on large screens */}
                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="PowerBI Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                As a PowerBI Developer, Senior Consultant, Data Analyst, PowerBI Architect, Team Lead, Developer MIS/PowerBI Expert, R Programming Specialist, Tester Assistant Manager, PowerBI Lead, or Supervising Associate, you may face challenges in completing your projects on time. Our PowerBI experts are available to support you via conference calls and remote sessions.
                                <br />
                                We also provide PowerBI online training and job support in the USA, UK, Canada, Australia, UAE, and many other countries. JobSupportGuru offers certified, expert-led support to help you succeed.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">
                            PowerBI <span className="text-blue-500">Support Services</span>
                        </h1>
                        <h1 className="text-sm text-white py-4">
                            We see your project and technologies used, if we are 100% confident then we agree to support you.
                        </h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        PowerBI Support <span className="text-blue-500">FAQ</span>
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

export default Powerbisupport;
