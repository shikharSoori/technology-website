import Image from "next/image";
import React from "react";
import Slider from "@/components/Carousel/Carousel";
import solution from "../../assets/Solution.png";
import { getData } from "@/app/lib/getData";
import Link from "next/link";
import hero1 from "../../assets/onservice.png";
import hero3 from "../../assets/ACCESSCONTROL.png";
import hero4 from "../../assets/CARDPRINTER.png";
import hero5 from "../../assets/HR.png";
import hero6 from "../../assets/SIGNATURE.png";
import logo1 from "../../assets/tracklinelogo.png";
import logo2 from "../../assets/onservicelogo.png";
const HomeHero = async () => {
  const data = await getData(`core-app/banner-images`);
  const heroContent = data?.results;

  var settings = {
    dots: false,
    arrows: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  const data1 = [
    {
      id: 1,
      image: hero1,
      mainText: "Manage your Business and Grow It.",
      logo: logo1,
      bg: false,
    },
    {
      bg: false,
      id: 2,
      logo: logo2,
      image: hero1,
      mainText: "Build More Business with Our Solutions.",
    },
    {
      bg: false,
      id: 2,
      logo: logo2,
      image: hero3,
      mainText: "Build More Business with Our Solutions.",
    },
    {
      bg: false,
      id: 2,
      logo: logo2,
      image: hero4,
      mainText: "Build More Business with Our Solutions.",
    },
    {
      bg: false,
      id: 2,
      logo: logo2,
      image: hero5,
      mainText: "Build More Business with Our Solutions.",
    },
    {
      bg: false,
      id: 2,
      logo: logo2,
      image: hero6,
      mainText: "Build More Business with Our Solutions.",
    },
  ];
  return (
    <section className="hero-slider">
      {/* <section className="hero-slider hero-transparent-bg bg-img fix"> */}
      <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
        <Slider {...settings}>
          {data1?.map((hero: any) => {
            const { image } = hero;
            return (
              <div key={hero.id} className="hero-single-slide">
                <div
                  className="hero-slider-item w-100"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-5 col-sm-6">
                        <div className="hero-slider-content">
                          <div
                            className={`${
                              hero.bg ? "bg-white p-4" : ""
                            } moving-vertical`}
                            style={{ width: "max-content" }}
                          >
                            <Image
                              priority={true}
                              src={hero.logo}
                              alt="policy banner"
                              className="moving-vertical "
                              width={200} // Adjust as needed
                              height={200} // Adjust as needed
                            />
                          </div>
                          <h1
                            className=" slide-title"
                            style={{ marginTop: "60px" }}
                          >
                            {hero.mainText}
                          </h1>
                          {/* <Link href="/about" className="btn btn-hero">
                            Read More
                          </Link> */}
                          <div
                            style={{
                              wordSpacing: "10px",
                              fontSize: "24px",
                              marginTop: "60px",
                            }}
                          >
                            RFID | BARCODE | QR CODE
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-sm-6">
                        <div className="slider-thumb moving-vertical"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default HomeHero;
