"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import TitleText from "../Testimonials/TitleText";
import Link from "next/link";
import bg from "../../assets/redbulb-1.png";
import bg2 from "../../assets/redbulb-2.png";
import AOS from "aos";
import "./MotoBanner.css";
const MotoBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="testimonial-wrapper moto-banner testimonial-wrapper--style_2  ">
      <div className="container wow fade-in-up ">
        <div className="row align-items-center">
          <Image
            className="image-right dd"
            data-aos="fade-left"
            src={bg}
            style={{
              position: "absolute",
              right: "20px",
              bottom: "0px",
              zIndex: "-1",
            }}
            alt="bg"
            height={300}
          />
          <Image
            className="image-left"
            data-aos="fade-left"
            style={{
              position: "absolute",
              left: "-70px",
              top: "20px",
              zIndex: "-1",
            }}
            src={bg2}
            alt="bg"
            height={250}
          />
          <div
            className="col-lg-9 col-md-12 wow fade-in-up"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h2 className="motobanner-title h1 title">
              <TitleText
                title={`We are The <span>Innovation   </span> Corporate
             `}
              />
            </h2>

            <Link href="/contact" className="btn btn-all mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoBanner;
