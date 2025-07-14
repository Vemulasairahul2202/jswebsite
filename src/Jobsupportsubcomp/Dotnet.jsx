import FaqSection from "./Faq";
import Processs from "./Processs";
import Rightside from "./Righside";
import Tab from "./Tab";
import React from "react";

function Dotnet() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">.Net <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            .NET is an open-source, cross-platform framework developed by Microsoft for building web, mobile, desktop, cloud, gaming, IoT, and more. It supports multiple languages such as C, C++, Java, ASP, and more. You can write .NET applications using C#, Classic ASP, Java, or Visual Basic. With strong practical .NET knowledge, you can work in high-quality organizations. We cover concepts including Web, Mobile, Cloud, Desktop, WPF, Windows Forms, Universal Windows apps, Xamarin, Machine Learning & Data (ML.NET), Apache Spark, and Entity Framework. You will get hands-on real-time project experience and the best online job support from India.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">.Net <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/Fullstack_.NET_Job_Support%20.png"
                                alt=".NET Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                Almost all IT industries work with strict deadlines. As a fresher, you might struggle to complete projects on time due to limited experience with .NET, and as an experienced developer, you may face technical challenges in real-time scenarios. That's when you need dedicated online job support for .NET from India.
                                <br />
                                We provide the best online job support from experts with deep .NET knowledge. Our services include .NET development support, .NET online training, job support, and full-time remote support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other cities.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">.Net <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt=".NET Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                We are one of the most reliable online training and job support companies, providing technical guidance for Fullstack .NET jobs and proxy interview calls. We offer .NET Support Services, .NET Proxy Interview Services, and Fullstack .NET Job Support from India.
                                <br />
                                As a .NET Core Developer, .NET Fullstack Developer, .NET Angular Developer, .NET Specialist, .NET Consultant, React Developer with .NET, or Backend Developer, you may face challenges meeting project deadlines. At such times, proxy support plays a crucial role in helping you complete tasks on time. We also provide online training and job support services in the USA, UK, Canada, Australia, UAE, and other countries with certified, professional experts.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-10 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">.Net <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We analyze your project and technologies used, and if we are 100% confident, we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        .Net Support <span className="text-blue-500">FAQ</span>
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

export default Dotnet;
