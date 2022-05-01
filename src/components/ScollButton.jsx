import React, { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import "../sass/ScrollButton.scss";
import { Link } from "react-scroll";

ScollButton.propTypes = {};

function ScollButton(props) {
  const [isShow, setIsShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link to="home" smooth={true} duration={500}>
      <div className={isShow ? "scroll-btn show" : "scroll-btn"}>
        <div className="scroll-btn__icon ">
          <HiArrowNarrowUp className="text-gray dark:text-white" />
        </div>
      </div>
    </Link>
  );
}

export default ScollButton;
