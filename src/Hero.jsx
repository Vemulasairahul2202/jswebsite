import React from 'react';
import firstImg from './assets/first.png';
import work_together from './assets/work_together.jpg';
import rightarrow from './assets/rightarrow.png';

const Hero = () => (
  <>
    <div>
      <img src={firstImg} alt="photo" className="w-full" />
    </div>

    <div className="bg-white flex justify-center text-center py-8">
      <h1 className="text-3xl sm:text-4xl font-medium text-black">
        Our <span className="text-cyan-400">Mission</span>
      </h1>
    </div>

    <main className="bg-white flex  flex-col content-center lg:flex-row justify-evenly   px-4 mx-6 md:px-8 gap-6">
      {/* Image wrapper div */}
      <div className="w-3/4   lg:w-1/2 pt-4  flex items-center justify-center ">
        <img
          className="w-full mx-6 "
          src={work_together}
          alt="work together"
        />
      </div>

      {/* Text content */}
      <div className="w-full lg:flex-1 p-4 md:p-6">
        <p className="flex items-start gap-3 mb-4 text-sm md:text-base lg:text-lg leading-snug">
          <img className="w-4 h-3 md:h-4 md:w-4" src={rightarrow} alt="arrow" />
          <span className="text-gray-500" >The mission of our IT on-the-job support is to provide the ability to solve complex project requirements in Real-Time for beginners in IT.</span>
        </p>
        <p className="flex items-start gap-3 mb-4 text-sm md:text-base lg:text-lg leading-snug">
          <img className="w-4 h-3 md:h-4 md:w-4" src={rightarrow} alt="arrow" />
          <span className="text-gray-500" >Our team at JobSupportGuru provides job support, training, and consulting for more than 50+ IT courses.</span>
        </p>
        <p className="flex items-start gap-3 mb-4 text-sm md:text-base lg:text-lg leading-snug">
          <img className="w-4 h-3 md:h-4 md:w-4" src={rightarrow} alt="arrow" />
          <span className="text-gray-500" >Our company can help those who are struggling to survive on the job due to a lack of technical skills.</span>
        </p>
        <p className="flex items-start gap-3 mb-4 text-sm md:text-base lg:text-lg leading-snug">
          <img className="w-4 h-3 md:h-4 md:w-4" src={rightarrow} alt="arrow" />
          <span className="text-gray-500" >If you're averse to coding, we offer IT courses with tools and minimal coding.</span>
        </p>
        <p className="flex items-start gap-3 mb-4 text-sm md:text-base lg:text-lg leading-snug">
          <img className="w-4 h-3 md:h-4 md:w-4" src={rightarrow} alt="arrow" />
          <span className="text-gray-500" >We can also offer assistance to those who have been assigned a new project and are stressed about the work.</span>
        </p>
        <p className="flex items-start gap-3 mb-4 text-sm md:text-base lg:text-lg leading-snug">
          <img className="w-4 h-3 md:h-4 md:w-4" src={rightarrow} alt="arrow" />
          <span className="text-gray-500" >To help you get the most successful outcome from your work and complete your deliverables, we present our most qualified consultants.</span>
        </p>
      </div>
    </main>


  </>
);

export default Hero;
