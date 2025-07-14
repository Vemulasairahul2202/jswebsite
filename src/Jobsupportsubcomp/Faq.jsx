import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const location = useLocation()
  const page = location.pathname.split("/").filter(Boolean).pop() || "default"

  const supportType = page === "etl_support" ? "ETL Testing" :
    page === "selenium_support" ? "Selenium" :
      page === "qa_support" ? "Quality Assurance" :
        page === "manual_support" ? "Manual Testing" :
          page === "angular_support" ? "Angular" :
            page === "angularjs_support" ? "AngularJS" :
              page === "react_support" ? "React" :
              page=== 'RPAblue_support'?"RPA Blue Prism":
              page==="Tibco_support"?"TIBCO Spotfire":
              page==="RestAPI_support"?"Rest API":
                page === "java_support" ? "Java" :
                  page === "dotnet_support" ? ".Net" :
                    page === "python_support" ? "Python" :
                      page === "PowerBi_support" ? "PowerBI" :
                        page === "Tableau_support" ? "Tableau" :
                          page === "RPAui_support" ? "RPA UiPath" :
                            page === "RPAauto_support" ? "RPA Automation Anywhere" :
                              page === "Pega_support" ? "PEGA" :
                                page === "WorkDay_support" ? "WorkDay" :
                                  page === "Uncork_support" ? "Unqork" :

                                    "Test";

  const faqs = [
    {
      question: `Do I have the option of selecting the timings for ${supportType} Support?`,
      answer: ` Your ${supportType} Online Job Support consultant and you can schedule a time that is convenient for both of you.`
    },
    {
      question: `Do you offer end-of-week services?`,
      answer: ` Generally, we don't provide support on weekends, but if you have a deadline, we may be able to help you on weekends under certain circumstances`
    },
    {
      question: `What is the most convenient time to pay for support?`,
      answer: `You will receive one free demo session with our consultant. You can pay before the second session after you've completed the demo and are comfortable with our ${supportType} consultant. `
    },
    {
      question: `How can I pay?`,
      answer: `You can use any service to pay for support or proxy interviews.`
    },
    {
      question: `What would be the most effective way to reach the ${supportType} consultant?`,
      answer: `For connecting, you can use Zoom Meeting, as it doesn't require any installation. If required you can also use Webex based on your comfort. `
    },
    {
      question: `What about privacy ? `,
      answer: `Any information is never shared with third parties outside the company. `
    }
  ];

  return (
    <div className=" ">

      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-md overflow-hidden mb-3">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-4 flex justify-between items-start hover:bg-gray-50"
          >
            <span className="pl-7">{faq.question}</span>
            <span className="text-blue-600 pr-3">{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="pl-11 pr-5 pb-4 text-sm bg-gray-50 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
