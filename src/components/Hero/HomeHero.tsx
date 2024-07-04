import Image from "next/image";
import React from "react";
import Slider from "@/components/Carousel/Carousel";
import { getData } from "@/app/lib/getData";
import hero1 from "../../assets/onservice.png";
import hero2 from "../../assets/HR.jpg";
import hero3 from "../../assets/ACCESSCONTROL.png";
import hero4 from "../../assets/CARDPRINTER.png";
import logo1 from "../../assets/tracklinelogo.png";
import logo2 from "../../assets/onservicelogo.png";
import "./homeHero.css";
import hero from "@/utils/Home.json";
const HomeHero = async () => {
  const data = await getData(`core-app/banner-images`);
  const heroContent = data?.results;
  const heroData = hero?.hero;

  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
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
  // const data1 = [
  //   {
  //     id: 1,
  //     name: "Track line",
  //     image: hero1,
  //     logo: logo1,
  //     mainText: "Manage your Assets with ease",
  //     keyWords: "RFID | Hello | QR CODE",
  //   },
  //   {
  //     id: 2,
  //     name: "On Service",

  //     bg: false,
  //     logo: logo2,
  //     image: hero2,
  //     mainText: "Monitor, Maintain, Maximize your services",
  //     keyWords: "RFID | BARCODE | QR CODE",
  //   },
  //   {
  //     id: 3,
  //     name: "Activ",

  //     bg: false,
  //     logo: logo2,
  //     image: hero3,
  //     mainText: "Effortless payrolll everytime",
  //     keyWords: "RFID | BARCODE | QR CODE",
  //   },
  //   {
  //     id: 4,
  //     name: "Cubix",

  //     bg: false,
  //     logo: logo2,
  //     image: hero4,
  //     mainText: "Simply your ERP, Amplify your Growth",
  //     keyWords: "RFID | BARCODE | QR CODE",
  //   },
  //   {
  //     id: 5,
  //     name: "ID Card",

  //     bg: false,
  //     logo: logo2,
  //     image: hero4,
  //     mainText: "Print High Quality & Durable Colors",
  //     keyWords: "RFID | BARCODE | QR CODE",
  //   },
  //   {
  //     id: 6,
  //     name: "Access Control",

  //     bg: false,
  //     logo: logo2,
  //     image: hero4,
  //     mainText: "Control your Assets, Control your Security",
  //     keyWords: "RFID | BARCODE | QR CODE",
  //   },
  // ];
  return (
    <section className="hero-slider">
      <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
        <Slider {...settings}>
          {heroData?.map((hero: any) => {
            const { image } = hero;
            return (
              <div key={hero.id} className="hero-single-slide">
                <div
                  className="hero-slider-item w-100"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-5 col-sm-6">
                        <div className="hero-slider-content">
                          {hero?.logo !== "" && (
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
                                width={200}
                                height={200}
                              />
                            </div>
                          )}
                          <h1
                            className=" slide-title"
                            style={{ marginTop: "60px" }}
                          >
                            {hero.mainText}
                          </h1>
                          {/* <Link href="/about" className="btn btn-hero">
                            Read More
                          </Link> */}
                          {hero.keyWords !== "" && (
                            <div
                              className="keywords"
                              style={{
                                wordSpacing: "10px",
                                fontSize: "24px",
                                marginTop: "60px",
                              }}
                            >
                              {hero.keyWords}
                            </div>
                          )}
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
