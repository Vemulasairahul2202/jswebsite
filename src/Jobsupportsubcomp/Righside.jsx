import DevelopmentTech from "./DevelopmentTech";
import Form1 from "./Form1";
import Softwaretesting from "./Softwaretesting";
import Toolsupport from "./Toolsupport";
import UITechnologies from "./UITechnologies";

function Rightside() {
  return (
    <div className="w-full md:w-full lg:w-1/4 bg-teal-100 p-2 rounded-lg shadow-md ">
      <div>
        <Form1 />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2 text-center pt-5">
          Job <span className="text-blue-800">Support</span>
        </h1>
        <p className="text-black text-sm text-center">
          Will provide the below Technologies
        </p>
      </div>

      <div className="p-2 mt-4">
        <Softwaretesting />
      </div>
      <div className="p-2 mt-4">
        <UITechnologies />
      </div>
      <div className="p-2 mt-4">
        <DevelopmentTech />
      </div>
      <div className="p-1 mt-4  ">
        <Toolsupport columns={1} />
      </div>
    </div>
  );
}

export default Rightside;
