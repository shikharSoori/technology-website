"use client";
import React from "react";

import "./features.css";
import Image from "next/image";
import icon from "@/assets/icon-1.png";
import download1 from "@/assets/wrriterwarehouse.jpg";
import download2 from "@/assets/laptopwarehouse.jpg";
import TitleText from "../Testimonials/TitleText";
const Features = (solution: any) => {
  const features = solution.solution;
  const features1 = features?.slice(0, 3);
  return (
    <>
      <div className="section-padding">
        <h3 className="h1 title pb-5">
          <TitleText title={`Features`} />
        </h3>
        <div className="row m-0 mt-4">
          {features1?.map((item: any, index: number) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-6 col-xl-4 p-0 features-list"
                key={index}
              >
                <div
                  className={`d-flex ${
                    index % 3 === 0 || index % 3 === 2
                      ? "flex-column"
                      : "flex-column-reverse"
                  } feature-column-mobile`}
                >
                  <div
                    className="features-bg"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="features-desc">
                    <div className="features-logo-bg">
                      <Image
                        className="w-100"
                        src={"https://i.imgur.com/7GtQDAI.png"}
                        width={370}
                        height={250}
                        alt="blog-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h3 className="features-title text-center">{item.title}</h3>
                    <p className="features-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
