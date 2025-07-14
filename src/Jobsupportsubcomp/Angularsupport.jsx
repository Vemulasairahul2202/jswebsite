import DevelopmentTech from "./DevelopmentTech";
import FaqSection from "./Faq";
import Form1 from "./Form1";
import Processs from "./Processs";
import Rightside from "./Righside";
import Softwaretesting from "./Softwaretesting";
import Tab from "./Tab";
import UITechnologies from "./UITechnologies";

function Angularsupport() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-around gap-6 p-6 pt-14">
                {/* Left Section */}
                <div className="lg:w-3/4 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl">Angular <span className="text-blue-500">Online Job Support</span> From INDIA</h1>
                        <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                            A Google-developed open-source framework called Angular, while Google Material is a UI framework that implements the Material design for the web. A web-based application can be easily created with Angular. For the creation of challenging applications, this framework combines declarative templates, dependency injection, and end-to-end tooling. In developing web, mobile, or desktop apps, developers can leverage Angular. Angular is a framework and platform for creating HTML-based, typed JavaScript-based single-page client applications. It consists of TypeScript libraries that you may import to create core and optional functionality. We implement Angular concepts like Karma, Angular UI, Ment.io, Jasmine, Protractor, Angular-get text, Mocha Js, ng-inspector, Djangular, Angular seed, Angular Fire, Generator Angular, Angular Deck grid, Videogular, Angular Kickstart, Visual Studio, Mean stack, Aptana Studio, Sublime Text, Code Orchestra, Angular IDE, Webstorm.
                        </p>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Angular <span className="text-blue-500">Full Time Job Support</span> From INDIA</h1>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-2/5 pt-5 md:pt-10">
                            <img
                                src="https://www.jobsupportguru.com/images/Angular_Job_Support.png"
                                alt="Angular Job Support"
                                className="rounded-tl-3xl mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                We offer industry-recognized Angular training courses and work environments along with Angular essentials. Whether you're a total newcomer or an experienced web developer, our course will give you comprehensive knowledge. This web-based training course focuses on industry standards and best practices. JobSupportGuru is a recognized industry pioneer in this field.
                                <br />
                                We provide full-stack Angular job support, online training, job support, Angular Support Services, and Angular Interview Proxy Services. We also offer Angular full-time remote job support from Hyderabad, Chennai, Bangalore, Mumbai, Pune, etc. We provide Angular online job support in India, the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-4xl">Angular <span className="text-blue-500">Proxy Support</span></h1>
                    </div>

                    <div className="flex flex-col md:flex-row pt-5">
                        <div className="md:w-2/5 pt-5 md:pt-10 flex items-center justify-center">
                            <img
                                src="https://www.jobsupportguru.com/images/Work_Together_Win_TogetherJob_Support.png"
                                alt="Angular Job Support"
                                className="mx-auto"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-start sm:text-xs text-base lg:text-lg pt-8 px-4 md:px-14 leading-7 text-gray-500">
                                If you're an Angular developer, full stack Angular developer, junior Angular developer, or senior Angular developer struggling to complete projects, we can help. Our team specializes in both rapid and precise development, providing the best training and support. Through our proxy services, we offer part-time and full-time remote job support in Hyderabad. With our help, you can complete your projects on time and on budget. We provide online assistance with certified, expert professionals. The best online job support service will be provided by JobSupportGuru. We also provide Angular online training and job support in India, the USA, the UK, Canada, Australia, UAE, and all other countries.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Processs />
                    </div>

                    <div className="bg-blue-950 text-center pt-8 ml-0 md:ml-9 mt-4">
                        <h1 className="text-4xl text-white">Angular <span className="text-blue-500">Support Services</span></h1>
                        <h1 className="text-sm text-white py-4">We see your project and technologies used, if we are 100% confident then we agree to support you.</h1>
                    </div>

                    <div className="pl-0 md:pl-9">
                        <Tab />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 mt-4">
                        Angular Support <span className="text-blue-500">FAQ</span>
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

export default Angularsupport;
