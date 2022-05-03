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
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 z-30 ">
      <div className="flex items-center gap-4">
        <div className=" text-xl md:text-2xl font-semibold tracking-[4px] ">
          NCT
        </div>
        {isDarkMode ? (
          <BsSunFill
            className="text-xl text-primary cursor-pointer xl:text-2xl "
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            className="text-xl  text-primary cursor-pointer xl:text-2xl "
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {menuLink.map((item, idx) => (
          <li key={idx} className="hover:text-primary  transition-all">
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
            ? "hidden "
            : "  absolute top-0 left-0 w-full h-screen bg-slate-300 dark:bg-gray flex flex-col justify-center items-center"
        }
      >
        {menuLink.map((item, idx) => (
          <li
            key={idx}
            className=" py-6 text-xl hover:text-primary transition-all"
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
        <ul className="flex flex-col gap-1">
          <li className="social-item bg-blue-600">
            <a
              className="social-item__link"
              href="https://www.facebook.com/trungg.nguyen.3576/"
            >
              Facebook <FaFacebook size={24} />
            </a>
          </li>

          <li className="social-item bg-[#333333]">
            <a
              className="social-item__link"
              href="https://github.com/nctrungggg"
            >
              Github <FaGithub size={24} />
            </a>
          </li>

          <li className="social-item bg-[#6fc2b0]">
            <a className="social-item__link" href="/">
              Email <HiOutlineMail size={24} />
            </a>
          </li>

          <li className="social-item bg-[#565f69]">
            <a className="social-item__link" href="/">
              Resume <BsFillPersonLinesFill size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
