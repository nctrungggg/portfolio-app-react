import React from "react";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const skillList = [
  { id: 1, img: HTML, title: "HTML", alt: "HTML image" },
  { id: 2, img: CSS, title: "CSS", alt: "CSS image" },
  { id: 3, img: JavaScript, title: "JAVASCRIPT", alt: "JAVASCRIPT image" },
  { id: 4, img: ReactImg, title: "REACT", alt: "REACT image" },
  { id: 5, img: GitHub, title: "GITHUB", alt: "GITHUB image" },
  { id: 6, img: Tailwind, title: "TAILWIND", alt: "TAILWIND image" },
];
const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen mb-32">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center ">
        <div>
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
              className="shadow-md shadow-slate-200 dark:shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={skill.img} alt={skill.alt} />
              <p className="font-medium my-4 md:text-base">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
