import React, { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import "../sass/ScrollButton.scss";

ScollButton.propTypes = {};

function ScollButton(props) {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <div
      onClick={handleScrollToTop}
      className={isShow ? "scroll-btn show" : "scroll-btn"}
    >
      <div className="scroll-btn__icon ">
        <HiArrowNarrowUp className="text-gray dark:text-white" />
      </div>
    </div>
  );
}

export default ScollButton;
