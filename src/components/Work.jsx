import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const works = [
  {
    id: 1,
    img: WorkImg,
    title: "E-commerce",
    link: "",
    source: "",
  },
  {
    id: 2,
    img: realEstate,
    title: "Omnifood",
    link: "",
    source: "",
  },
  {
    id: 3,
    img: WorkImg,
    title: "FreshFood",
    link: "",
    source: "",
  },
  {
    id: 4,
    img: realEstate,
    title: "Bankist-app",
    link: "",
    source: "",
  },
  {
    id: 5,
    img: WorkImg,
    title: "LaslesVPN",
    link: "",
    source: "",
  },
  {
    id: 6,
    img: realEstate,
    title: "FreshFood",
    link: "",
    source: "",
  },
];
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen mb-32">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="">
          <h1 className="text-4xl  md:text-6xl font-semibold inline border-b-4 text-gray-300 border-primary">
            Work
          </h1>

          <p className="md:text-base pt-8">
            // Check out some of my recent work
          </p>
        </div>

        {/* Grid Container */}
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {/* Grid Item */}
          {works.map((work) => (
            <div
              key={work.id}
              style={{ backgroundImage: `url(${work.img})` }}
              className="shadow-lg shadow-indigo-500/30 group container  flex justify-center items-center mx-auto content-div rounded-md z-10 "
            >
              {/* Hover Effects */}
              <div className="transition-all  opacity-0  group-hover:opacity-100 text-center">
                <span className="text-2xl md:text-3xl font-medium  tracking-wider ">
                  {work.title}
                </span>

                <div className="pt-8 text-center">
                  <a href={work.link}>
                    <button className="text-14 text-center rounded-md w-[80px] py-2 m-2  text-gray bg-white text-base">
                      Demo
                    </button>
                  </a>

                  <a href={work.source}>
                    <button className="text-14 text-center rounded-md w-[80px] py-2 m-2  text-gray bg-white text-base">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
