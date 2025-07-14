import React from 'react';
import hotr from './assets/hotr .jpg';
import rightarrow from './assets/rightarrow.png';

const Trainings = () => (
  <>
    <div className="bg-white flex justify-center text-center py-8">
      <h1 className="text-3xl sm:text-4xl font-medium text-black">
        Online IT <span className="text-cyan-400">Trainings</span>
      </h1>
    </div>

    <div className="bg-white flex flex-col lg:flex-row justify-evenly items-center px-4 md:px-8 gap-6 pb-8">
      {/* Image wrapper */}
      <div className="w-3/4 lg:w-1/2 pt-4 ">
        <img
          className="w-3/4  rounded-md"
          src={hotr}
          alt="training"
        />
      </div>

      {/* Text wrapper */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 md:ml-16">
        {[
          "JobSupportGuru is the best IT training institute for project-based, career-oriented training.",
          "We offer IT training services to individuals with non-IT backgrounds in order to improve their technical knowledge.",
          "We specialize in a variety of advanced technologies, including data engineering, cloud engineering, and a few tools.",
          "If you are averse to coding, you can enroll in IT courses that include some tools and less coding so that you can work in the field.",
          "The training will be done one-to-one and in small groups with a few people.",
          "Recorded videos are accessible 24*7.",
          "You will need to spend 2 to 4 hours, Monday through Friday, at your convenience.",
        ].map((text, idx) => (
          <p key={idx} className="flex lg:text-lg items-start gap-3 text-base leading-relaxed text-gray-700">
            <img className="w-3 h-3  md:h-4 md:w-4 mt-1 flex-shrink-0" src={rightarrow} alt="arrow" />
            <span>{text}</span>
          </p>
        ))}
      </div>
    </div>
  </>
);

export default Trainings;
