import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="md:text-16 text-primary ">Hi, my name is</p>
        <h1 className="text-3xl dark:text-[#d4ddfd] md:text-6xl font-semibold mb-1 lg:mb-4">
          Trung Nguyen
        </h1>
        <h2 className="text-2xl sm:text-5xl font-medium ">
          I'm a Front End Developer.
        </h2>
        <p className=" md:text-base  py-4 max-w-[700px]">
          I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive front-end web applications.
        </p>
        <div>
          <button className="rounded-md font-medium  group border-2 px-6 py-3 mt-4 flex items-center dark:hover:text-primary dark:hover:border-primary">
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
