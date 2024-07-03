"use client";
import React, { useEffect, useState } from "react";
import AnimateCircle from "@/components/AnimateCircle/AnimateCircle";
import Script from "next/script";

// Ensure that circle.js is in the public directory
const About = () => {
  return (
    <>
      <AnimateCircle />
    </>
  );
};

export default About;
