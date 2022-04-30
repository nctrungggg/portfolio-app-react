import React, { useState } from "react";
import { BsFillPersonLinesFill, BsSunFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaMoon } from "react-icons/fa";
import { HiOutlineMail, HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";
import useDarkMode from "../hooks/useDarkMode";

const menuLink = [
  { id: 1, title: "Home", to: "home" },
  { id: 2, title: "About", to: "about" },
  { id: 3, title: "Skills", to: "skills" },
  { id: 4, title: "Work", to: "work" },
  { id: 5, title: "Contact", to: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 ">
      <div className="flex items-center gap-4">
        <div className=" text-xl md:text-2xl font-semibold tracking-[5px] ">
          NCT
        </div>
        {isDarkMode ? (
          <BsSunFill
            fontSize="22px"
            className="text-yellow cursor-pointer xl:text-3xl "
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            fontSize="22px"
            className=" text-yellow cursor-pointer xl:text-3xl "
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {menuLink.map((item, idx) => (
          <li key={idx} className="hover:text-pink-600  transition-all">
            <Link to={item.to} smooth={true} duration={500}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <HiOutlineMenu className="text-24 cursor-pointer" />
        ) : (
          <MdOutlineClose className="text-24 cursor-pointer" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-300 dark:bg-gray flex flex-col justify-center items-center"
        }
      >
        {menuLink.map((item, idx) => (
          <li
            key={idx}
            className=" py-6 text-xl hover:text-yellow transition-all"
          >
            <Link
              onClick={handleClick}
              to={item.to}
              smooth={true}
              duration={500}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/trungg.nguyen.3576/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nctrungggg"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
