import Image from "next/image";
import React from "react";

import { getData } from "@/app/lib/getData";
import TitleText from "../Testimonials/TitleText";
import Slider from "@/components/Carousel/Carousel";
import "./services.css";
import Link from "next/link";
import Homeservices from "@/utils/Home.json";
const HomeServices = async () => {
  const data = await getData(`solution-app/solution`);
  const services = Homeservices?.solutions;
  var testimonialSlider = {
    arrow: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="policy-area-02 section-padding  fix">
      <div className="container">
        <div className="section-title mb-4 text-center">
          <h2 className="h1 title">
            <TitleText title="Our <span>Software</span> Products" />
          </h2>
        </div>
        <div className=" feature_row">
          <div className="feature_slider_inner ">
            <Slider {...testimonialSlider}>
              {services?.map((service: any, i: number) => {
                const maxLength = 100;
                const initialDelay = services.length * 200;
                const delay = initialDelay - i * 200;
                return (
                  <div
                    key={i + 1}
                    className="item "
                    data-aos="fade-right"
                    data-aos-delay={delay}
                    data-aos-easing="ease-in-sine"
                    style={{ position: "relative" }}
                  >
                    <div
                      className=" home-services-card "
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
                      <Link href={`${service.link}`}>
                        <h4>{service.name}</h4>
                      </Link>
                      <p>
                        {service.description?.length >= maxLength
                          ? `${service?.description
                              .substr(0, maxLength)
                              .trim()}...`
                          : service?.description}
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
