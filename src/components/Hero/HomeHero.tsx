import Image from "next/image";
import React from "react";
import Slider from "@/components/Carousel/Carousel";
import { getData } from "@/app/lib/getData";
import "./homeHero.css";
import hero from "@/utils/Home.json";
import parse from "html-react-parser";
const HomeHero = async () => {
  const data = await getData(`core-app/banner-images`);
  const heroContent = data?.results;
  const heroData = hero?.hero;

  var settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

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
                          {hero?.logo !== "" ? (
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
                          ) : (
                            <>
                              {
                                <div
                                  className="logo-text moving-vertical"
                                  data-aos="fade-right"
                                  data-aos-duration="1000"
                                >
                                  {hero?.logoText && parse(hero.logoText)}
                                </div>
                              }
                            </>
                          )}
                          <h1
                            className="home slide-title"
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
