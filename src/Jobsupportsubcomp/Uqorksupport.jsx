import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";
import React from "react";

function Uqorksupport() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Unqork <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            Unqork is a no-code application development platform that enables organizations to create complex, custom software applications without writing traditional code. It is designed to streamline and accelerate the development process by allowing users to visually design, configure, and deploy software through a user-friendly interface. Features include a no-code platform, visual development, extensive component library, integrations, security and compliance, workflow automation, scalability, collaboration, and rapid development. It empowers organizations to build and deploy applications quickly and efficiently, reducing timelines and enabling digital transformation without needing deep coding expertise.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Unqork <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/Trizettofacet.png"
                                alt="Unqork Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                JobSupportGuru has knowledgeable and experienced experts who provide online job support. We offer training and job support for students, freshers, and experienced professionals. We assist in finding and securing full-time Unqork roles from Hyderabad. Additionally, we provide Unqork proxy support, configuration, optimization, maintenance, and testing support.
                                <br />
                                Our experts provide guidance and practical instruction. JobSupportGuru offers online Unqork training, job support, and full-time remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, and other locations. Our team provides the best online support for Unqork technology.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Unqork <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Unqork Proxy Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                If you're a Senior Solution Architect, Application Developer, Project Manager, or Associate, you may find it difficult to complete tasks on time due to limited experience or bandwidth. Proxy interview and development support ensures timely project delivery and proper Unqork configuration and design. We provide full-time Unqork job support with certified, experienced professionals. We also offer Unqork online preparation and job support globally, including in the USA, UK, Canada, Australia, UAE, and more. Our experts guide and support you throughout your projects.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Unqork <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Unqork Support <span className="text-blue-500">FAQ</span>
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

export default Uqorksupport;
