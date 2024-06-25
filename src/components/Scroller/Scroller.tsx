"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Scroller = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`scroll-top d-flex justify-content-center align-items-center  ${
        isVisible ? "" : "not-visible"
      }`}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp size={36} color="white" />
    </div>
  );
};

export default Scroller;
