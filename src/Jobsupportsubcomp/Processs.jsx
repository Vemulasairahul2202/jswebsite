import { useLocation } from "react-router-dom"
function Processs(){
    const location = useLocation()
    const page = location.pathname.split("/").filter(Boolean).pop() || "default"

    const supportType = page === "etl_support" ? "ETL Testing" :
                      page === "selenium_support" ? "Selenium" :
                      page === "qa_support" ? "Quality Assurance" :
                      page ==="manual_support"?"Manual Testing":
                      page ==="angular_support"?"Angular":
                      page ==="angularjs_support"?"AngularJS":
                      page ==="react_support"?"React":
                      page ==="java_support"?"Java":
                      page ==="dotnet_support"?".Net":
                      page ==="Uncork_support"?"Unqork":
                      page ==="PowerBi_support"?"PowerBI":
                      page ==="Tableau_support"?"Tableau":
                      page ==="WorkDay_support"?"WorkDay":
                      page ==="Pega_support"?"PEGA":
                      page ==="RPAui_support"?"RPA UiPath":
                      page=== 'RPAblue_support'?"RPA Blue Prism":
                      page ==="RPAauto_support"?"RPA Automation Anywhere":
                      page ==="python_support"?"Python":
                      page==="Tibco_support"?"TIBCO Spotfire":
                      page==="RestAPI_support"?"Rest API":

                      "Test";
    return(
        <div className="text-center">
                        <h1 className="text-4xl  pt-5 pb-5">{supportType} <span className="text-blue-500">Job Support</span> Process</h1>
                        {[
                            "To get more information and job support from us please contact us on WhatsApp or make a call or email us.",
                            `Within a few hours, you'll be able to schedule a demo session with our expert team about Online ${supportType} Job Support.`,
                            "Please help us understand your requirements and give details of your projects along with timelines.",
                            "If our consultant is 100% sure to take your requirements to completion, only then will we accept your project and provide the service.",
                            "During the first week, you must request Online Job Support.",
                            `To take advantage of the Online ${supportType} Job Support Service, payment must be made within a specified time frame.`,
                        ].map((text, index) => (
                            <p key={index} className="flex items-start text-start gap-4 leading-7  pl-3 md:pl-8 pt-5">
                                <img
                                    src="https://www.jobsupportguru.com/images/left-arrow.svg"
                                    alt="arrow"
                                    className="w-4 h-4 mt-1 flex pt-2 "
                                />
                                <span className="text-gray-500 text-sm lg:text-lg">{text}</span>
                            </p>
                        ))}
                    </div>
    )
}
export default Processs