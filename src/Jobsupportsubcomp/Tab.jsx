import React, { use, useState } from "react"
import { useLocation } from "react-router-dom"
function Tab() {
    const [activeTab, setActiveTab] = useState("monthly")
    const location = useLocation()
    const page = location.pathname.split("/").filter(Boolean).pop() || "default"

    const supportType = page === "etl_support" ? "ETL Testing" :
        page === "selenium_support" ? "Selenium" :
            page === "qa_support" ? "Quality Assurance" :
                page === "manual_support" ? "Manual Testing" :
                    page === "angular_support" ? "Angular" :
                        page === "angularjs_support" ? "AngularJS" :
                            page === "react_support" ? "React" :
                                page === "java_support" ? "Java" :
                                    page === "dotnet_support" ? ".Net" :
                                        page === "Uncork_support" ? "Unqork" :
                                            page === "PowerBi_support" ? "PowerBI" :
                                                page === 'RPAblue_support' ? "RPA Blue Prism" :
                                                    page === "Tibco_support" ? "TIBCO Spotfire" :
                                                        page === "RestAPI_support" ? "Rest API" :
                                                            page === "Tableau_support" ? "Tableau" :
                                                                page === "WorkDay_support" ? "WorkDay" :
                                                                    page === "Pega_support" ? "PEGA" :
                                                                        page === "RPAui_support" ? "RPA UiPath" :
                                                                            page === "python_support" ? "Python" :
                                                                                page === "RPAauto_support" ? "RPA Automation Anywhere" :

                                                                                    "Test";

    const content = {
        monthly: (
            <p >
                <span className=" block text-start text-xl mb-1 pb-1- text-blue-500">Monthly Job Support</span>
                <p className="text-start text-base">Monday through Friday (Monday through Friday) are our office hours.
                    The amount of free time you receive each day will be
                    determined by the needs of the individual.
                    The meeting will take place via Zoom or Webex.</p>
            </p>
        ),
        hourly: (
            <p>
                <span className="block text-start text-xl mb-1 pb-1 text-blue-500">Hourly Job Support</span>
                <p className="text-start text-base"> With {supportType} Job Support, a small task can be completed in a few hours.
                    You can choose a support plan like this if you only need a few hours of support per week.
                    From Monday through Friday, you will receive support.</p>
            </p>
        ),
        task: (
            <p>
                <span className="block text-start text-xl mb-1 pb-1 text-blue-500">Task Based Job Support</span>
                <p className="text-start text-base"> There may be a delay of a few days or two, depending on the task. We will communicate using Webex or Zoom.
                    Depending on the workload and complexity of the project, there will be a range of charges.
                    We will provide you with assistance for a couple of hours based on what tasks you need help with.
                </p>
            </p>
        )
    }
    return (
        <div className="bg-blue-950 text-center pt-10   p-5">

            <div className="flex flex-col md:flex-row space-x-2 justify-around bg-blue-950 ">
                <button
                    onClick={() => setActiveTab("monthly")}
                    className={`px-4 py-3    rounded-t-xl ${activeTab === "monthly" ? "bg-cyan-500 text-white" : "bg-blue-950 text-white"
                        }`}
                >
                    Monthly Job Support
                </button>
                <button
                    onClick={() => setActiveTab("hourly")}
                    className={`px-4 py-2 rounded-t-xl ${activeTab === "hourly" ? "bg-cyan-500 text-white" : "bg-blue-950 text-white"
                        }`}
                >
                    Hourly Job Support
                </button>
                <button
                    onClick={() => setActiveTab("task")}
                    className={`px-4 py-2 rounded-t-xl ${activeTab === "task" ? "bg-cyan-500 text-white" : "bg-blue-950 text-white"
                        }`}
                >
                    Task Based Job Support
                </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white text-black p-6 rounded-lg ">
                {content[activeTab]}
            </div>
        </div>

    )
}
export default Tab