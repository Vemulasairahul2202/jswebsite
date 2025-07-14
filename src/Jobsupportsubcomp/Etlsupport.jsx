import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Etlsupport() {
    return (
        <>
            <div className="flex flex-col-reverse   lg:flex-row justify-around gap-6 p-6 pt-14  ">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">
                            ETL Testing <span className="text-blue-500">Online Job Support</span> From INDIA
                        </h1>
                        <p className="text-start sm:text-sm  lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            <strong>ETL</strong> stands for <strong>Extract-Transform-Load</strong> and refers to the process of loading data from the source system to the target system.
                            ETL testing is a process that validates data in both the source and target systems in accordance with business requirements.
                            Identifying data sources and requirements, Data acquisition, Implementing business logic and dimensional modeling, Building and populating data, and Building Reports are the five stages of ETL testing.
                            To prepare data marts or data warehouses, ETL is used to transfer or migrate data from one database to another.
                            Some popular ETL tools include: Right Data, Integrate.io, iCEDQ, BiG EVAL, Informatica Data Validation, QuerySurge, DataGaps ETL Validator, QualiDI, Talend Open Studio for Data Integration, Codoid's ETL Testing Services, Data-Centric Testing, SSISTester, and TestBench.
                            We provide the best <strong>ETL Testing online job support from India</strong>.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            ETL Testing <span className="text-blue-500">Full Time Job Support</span> From INDIA
                        </h1>
                    </div>

                    {/* Section with image on right on large screens */}
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/ETL_Testing_Job_Support.png"
                                alt="ETL Testing Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-sm  lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Along with qualified professional IT experts, JobSupportGuru also has experts who have real-world experience with
                                ETL testing and are skilled at providing online job support. For students and experienced and new employees we provide the best online training and job support from India. We provide full-time ETL testing job training, Integrate.io proxy support, IBM DataStage job support,
                                Data Integrator tool support, Fivetran job support, SAS Data Management job support, Talend Open Studio job support, Pentaho Data Integration tool support in Hyderabad.
                                <br />
                                One of the top online job and training service organizations that provides professional ETL testing job support, ETL testing online technical support, and ETL testing full-time remote job training from Hyderabad, Chennai,
                                Bangalore, Mumbai, Pune, etc. The best online job support will be provided by JobSupportGuru.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">
                            ETL Testing <span className="text-blue-500">Proxy Support</span>
                        </h1>
                    </div>

                    {/* Section with image on left on large screens */}
                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="ETL Testing Job Support"
                                className="mx-auto "
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-sm  lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                As an ETL Tester, Data Warehouse, ETL Testing, ETL Lead Tester, Sr ETL Tester, ETL Tester with big data, ETL & EDI Tester, Guidewire ETL QA Tester,
                                you may be unable to complete your projects due to time constraints or inexperience with project management. As a result, proxy interview assistance is critical at this time in assisting you in building ETL testing as well as configuring and designing ETL testing.
                                This enables you to complete your tasks within the timeframes established by ETL testing proxy support from India. We provide full-time ETL testing support from certified experts. We also provide ETL testing online training and ETL testing job support
                                in the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">
                            ETL Testing <span className="text-blue-500">Support Services</span>
                        </h1>
                        <h1 className="text-sm text-white py-4">
                            We see your project and technologies used, if we are 100% confident then we agree to support you.
                        </h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        ETL Support <span className="text-blue-500">FAQ</span>
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

export default Etlsupport;
