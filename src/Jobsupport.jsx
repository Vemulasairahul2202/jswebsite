import { Link } from "react-router-dom";
import DevelopmentTech from "./Jobsupportsubcomp/DevelopmentTech";
import UITechnologies from "./Jobsupportsubcomp/UITechnologies";
import Softwaretesting from "./Jobsupportsubcomp/Softwaretesting";
import Toolsupport from "./Jobsupportsubcomp/Toolsupport";

function Jobsupport() {
  return (
    <>
      <div className="bg-blue-50 px-4 py-8 md:px-8">
        {/* Toolsupport section */}
        <div className="w-full lg:w-3/4  mb-8 md:justify-start">
          <Toolsupport columns={2} />
        </div> 

        {/* Grid for support boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full  md:px-0">
          <Softwaretesting />
          <UITechnologies />
          <DevelopmentTech />
        </div>
      </div>

    </>
  );
}

export default Jobsupport;
