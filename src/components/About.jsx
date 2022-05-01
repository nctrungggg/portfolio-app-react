import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full md:h-screen px-8  mb-32 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 md:pl-4">
            <h1 className="text-3xl md:text-6xl font-semibold inline border-b-4 border-primary">
              About
            </h1>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 md:px-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium sm:text-right">
              Hi. I'm Trung, nice to meet you. Please take a look around.
            </h2>
          </div>
          <div>
            <p className="md:text-base">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
