import React from "react";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Figma from "../assets/figma.png";
import Sass from "../assets/sass.svg";

const skillList = [
  { id: 1, img: HTML, title: "HTML", alt: "HTML image" },
  { id: 2, img: CSS, title: "CSS", alt: "CSS image" },
  { id: 3, img: JavaScript, title: "JAVASCRIPT", alt: "JAVASCRIPT image" },
  { id: 4, img: ReactImg, title: "REACT", alt: "REACT image" },
  { id: 5, img: GitHub, title: "GITHUB", alt: "GITHUB image" },
  { id: 6, img: Tailwind, title: "TAILWIND", alt: "TAILWIND image" },
  { id: 7, img: Sass, title: "SASS", alt: "SASS image" },
  { id: 8, img: Figma, title: "FIGMA", alt: "FIGMA image" },
];
const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen mb-32">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  w-full h-full ">
        <div className="wow fadeInLeft">
          <h1 className=" text-3xl md:text-6xl font-semibold inline border-b-4 border-primary ">
            Skills
          </h1>
          <p className="pt-8 md:text-base">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillList.map((skill) => (
            <div
              key={skill.id}
              className=" p-4 rounded-md shadow-md bg-gray text-white  dark:shadow-[#040c16] hover:scale-110 duration-500 flex flex-col gap-3"
            >
              <img
                className="w-20 mx-auto h-[80px]"
                src={skill.img}
                alt={skill.alt}
              />
              <p className="font-medium md:text-base mt-auto">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
