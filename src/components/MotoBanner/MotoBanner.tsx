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
    <div
      className="testimonial-wrapper moto-banner testimonial-wrapper--style_2   "
      style={{
        position: "relative",
        padding: "60px 0",
        // backgroundImage: `url(${bg.src})`,
        // backgroundSize: "cover",
      }}
    >
      <div className="container wow fade-in-up ">
        <div className="row align-items-center">
          <Image
            className="image-right"
            data-aos="fade-left"
            style={{ position: "absolute", right: "20px", bottom: "0px" }}
            src={bg}
            alt="bg"
            height={300}
          />
          <Image
            className="image-left"
            data-aos="fade-left"
            style={{ position: "absolute", left: "-50px", top: "20px" }}
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
            <h2 className="h1 title" style={{ fontSize: "48px" }}>
              <TitleText
                title={`We are The <span>Innovation   </span> Corporate
             `}
              />
            </h2>
            <p className="my-4">
              With a steadfast commitment to excellence, We help organizations
              optimize their processes and achieve unparalleled success. By
              leveraging the latest technologies and industry best practices, we
              deliver reliable and user-friendly solutions that cater to the
              diverse needs of its clients.
            </p>
            <Link href="/contact" className="btn btn-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoBanner;
