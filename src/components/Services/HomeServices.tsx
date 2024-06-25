import Image from "next/image";
import React from "react";

import { getData } from "@/app/lib/getData";
import TitleText from "../Testimonials/TitleText";
import Slider from "@/components/Carousel/Carousel";

import Link from "next/link";
const HomeServices = async () => {
  const data = await getData(`solution-app/solution`);
  const services = data?.results;
  var testimonialSlider = {
    // dots: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // infinite: true,
    // speed: 500,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,

    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
  };

  return (
    <section className="policy-area-02 section-padding  fix">
      <div className="container">
        <div className="section-title mb-4 text-center">
          <h2 className="h1 title">
            <TitleText title="Our <span>Software</span> Products" />
          </h2>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Our software products empower businesses with creative solutions
            that boost productivity and ensure smooth operations.
          </p>
        </div>
        <div className=" feature_row" style={{ paddingTop: "60px" }}>
          <div className="feature_slider_inner ">
            <Slider {...testimonialSlider}>
              {services?.map((service: any, i: number) => {
                const maxLength = 100;
                const initialDelay = services.length * 200;
                const delay = initialDelay - i * 200; // Decrease by 100ms per item
                return (
                  <div
                    key={i + 1}
                    className="item "
                    data-aos="fade-right"
                    data-aos-delay={delay}
                    data-aos-easing="ease-in-sine"
                  >
                    <div
                      className="feature_s_item"
                      style={{
                        background: `linear-gradient(0deg, #742d34 0%, rgba(0, 0, 0, 0) 45.5%), url(${service?.image}) center / cover no-repeat`,
                      }}
                    >
                      <Image
                        alt=""
                        className="svg social-link"
                        src={service?.logo}
                        width={200}
                        height={200}
                      />
                      <Link href="#">
                        <h4>{service.name}</h4>
                      </Link>
                      <p>
                        {service.description.length >= maxLength
                          ? `${service.description
                              .substr(0, maxLength)
                              .trim()}...`
                          : service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
