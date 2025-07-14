import React from 'react';
import rightarrow from './assets/rightarrow.png';

const Services = () => (
  <>
    <div className="bg-white flex justify-center text-center py-8">
      <h1 className="text-3xl sm:text-4xl font-medium text-black">
        Job Support <span className="text-blue-400">Services</span>
      </h1>
    </div>

    <div className="bg-white flex flex-col gap-6 px-6 md:px-20 pb-8">
      <p className="flex items-start gap-3 text-base lg:text-lg leading-relaxed text-gray-700">
        <img className="md:w-4 md:h-4 w-3 h-3 mt-1 " src={rightarrow} alt="arrow" />
        We see your project and technologies used, if we are 100% confident then we agree to support you.
      </p>
      <p className="flex items-start gap-3 text-base lg:text-lg leading-relaxed text-gray-700">
        <img className="md:w-4 md:h-4 w-3 h-3 mt-1 " src={rightarrow} alt="arrow" />
        We work on the Monthly basis or Half-Month basis or Hourly basis
      </p>
      <p className="flex items-start gap-3 text-base lg:text-lg leading-relaxed text-gray-700">
        <img className="md:w-4 md:h-4 w-3 h-3 mt-1 " src={rightarrow} alt="arrow" />
        Based on your requirement we will work for 2 or 3 or 4 hours or full time on every day Monday to Friday
      </p>
      <p className="flex items-start gap-3 text-base lg:text-lg leading-relaxed text-gray-700">
        <img className="md:w-4 md:h-4 w-3 h-3 mt-1 " src={rightarrow} alt="arrow" />
        We provide the job support in the USA, the UK, Canada, Australia, UAE, and all other countries.
      </p>
      <p className="flex items-start gap-3 text-base lg:text-lg leading-relaxed text-gray-700">
        <img className="md:w-4 md:h-4 w-3 h-3 mt-1 " src={rightarrow} alt="arrow" />
        Usually we don't work for weekends. But however if you have a deadline to finish your task, no worries. We are here to support you on weekends too.
      </p>
      <p className="flex items-start gap-3 text-base lg:text-lg leading-relaxed text-gray-700">
        <img className="md:w-4 md:h-4 w-3 h-3 mt-1 " src={rightarrow} alt="arrow" />
        We are here to support you on weekends too.
      </p>
    </div>
  </>
);

export default Services;
