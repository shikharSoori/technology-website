"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TitleText = ({ title }: { title?: string }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      dangerouslySetInnerHTML={{ __html: title ? title : "" }}
    />
  );
};

export default TitleText;
