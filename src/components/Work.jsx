import React from "react";
import bankistApp from "../assets/bankist-app.png";
import freshFood from "../assets/freshfood.png";
import laslesVPN from "../assets/laslesVPN.png";
import nctShop from "../assets/nct-shop.png";
import Omnifood from "../assets/omnifood.png";

const works = [
  {
    id: 1,
    img: nctShop,
    title: "E-commerce",
    link: "https://nct-shop.vercel.app/",
    source: "https://github.com/nctrungggg/nct-shop",
  },
  {
    id: 2,
    img: laslesVPN,
    title: "LaslesVPN",
    link: "https://nctrungggg.github.io/LaslesVPN/",
    source: "https://github.com/nctrungggg/LaslesVPN",
  },
  {
    id: 3,
    img: freshFood,
    title: "FreshFood",
    link: "https://nctrungggg.github.io/FreshFood/",
    source: "https://github.com/nctrungggg/FreshFood",
  },
  {
    id: 4,
    img: bankistApp,
    title: "Bankist-app",
    link: "https://nctrungggg.github.io/Bankist-app/",
    source: "https://github.com/nctrungggg/Bankist-app",
  },
  {
    id: 5,
    img: Omnifood,
    title: "Omnifood",
    link: "https://omnifood-orcin.vercel.app/",
    source: "https://github.com/nctrungggg/Omnifood",
  },
  {
    id: 6,
    img: laslesVPN,
    title: "FreshFood",
    link: "",
    source: "",
  },
];
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen mb-32">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="wow fadeInLeft">
          <h1 className="text-4xl  md:text-6xl font-semibold inline border-b-4 text-gray-300 border-purple dark:border-primary">
            Work
          </h1>

          <p className="md:text-base pt-8">
            // Check out some of my recent work
          </p>
        </div>

        {/* Grid Container */}
        <div className="transition-all duration-1000  mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {/* Grid Item */}
          {works.map((work) => (
            <div
              key={work.id}
              style={{ backgroundImage: `url(${work.img})` }}
              className=" content-div shadow-lg shadow-indigo-500/30 group container  flex justify-center items-center mx-auto rounded-md z-10 "
            >
              {/* Hover Effects */}
              <div className="hidden group-hover:block text-center  ">
                <span className="text-2xl md:text-3xl font-medium  tracking-wider ">
                  {work.title}
                </span>

                <div className="pt-8 text-center">
                  <a href={work.link} target="_blank">
                    <button className="text-14 text-center rounded-md w-[80px] py-2 m-2  text-gray bg-white text-base">
                      Demo
                    </button>
                  </a>

                  <a href={work.source} target="_blank">
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
