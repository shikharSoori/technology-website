import AboutHero from "@/components/Hero/AboutHero";
import React, { useEffect } from "react";
import "./about.scss";
import "./about.css";
import Image from "next/image";
import solution from "../../assets/Solution.png";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonials/Testimonials";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import Link from "next/link";
import TitleText from "@/components/Testimonials/TitleText";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import ParticleSlider from "./ParticleComponent";
import { CgQuote } from "react-icons/cg";
import suren from "../../assets/suren.png";
import Slider from "@/components/Carousel/Carousel";
import { FaQuoteLeft } from "react-icons/fa6";
import Partners from "@/components/Partners/Partners";
import HomeServices from "@/utils/Home.json";
import "../solutions/[solutionDetail]/solutionDetail.css";
import "@/components/FeaturesModule/featuremodule.css";

// import AnimateCircle from "@/components/AnimateCircle/animateCircle";
const About = () => {
  var brandSlider = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 3000,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const pictures = [suren, suren];
  const messages = [
    {
      image: suren,
      name: "Roberto Carlox",
      desig: "CEO, Selorex",
      quote:
        "As the Managing Director, I am committed to ensuring that our clients receive the highest level of service and support. Our team is dedicated to continuous improvement and excellence in all our offerings, providing you with reliable, cutting-edge solutions.",
    },
    {
      image: suren,

      name: "Roberto Carlox",
      desig: "CEO, Selorex",
      quote:
        "labore et dolore magnam aliquam quaerat voluptatem. ad minima veniam, quis nostrum exercitationem ullam uscipit laboriosam, nisi ex ea commodi consequatur",
    },
  ];
  const services = HomeServices.solutions;

  const whatWeDo = [
    {
      title: "Software",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Hardware",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Consumables",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam quaerat voluptatem. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <>
      {/* <AnimateCircle /> */}
      {/* <AboutHero title="About Us" /> */}
      <section className="about-wrapper-area section-padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 order-1 order-lg-1">
              <div className="about-inner">
                <h2 className="h1 title">
                  <span>Provide</span> the Best <br /> Solutions{" "}
                  <span>to Improve</span> <br />
                  your Business
                  {/* <TitleText title={`Who we Are`}/> */}
                </h2>
                <h3 className="subtitle">
                  Create some exclusive way to solve our customer problems
                </h3>

                {/* <p>
                  At Soori Technology, we are dedicated to delivering innovative
                  and comprehensive tech solutions tailored to meet the unique
                  needs of businesses and organizations. Our commitment to
                  excellence and customer satisfaction drives us to provide a
                  single-source complete solution through our core business
                  units in Hardware, Software, Consumables, and Support.
                </p> */}
                <Link href="#" className="btn btn-all">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-5  order-2 order-lg-2 dfdf">
              <ParticleSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding gray-bg">
        <div className="container text-center">
          <h3 className="subtitle">
            <span style={{ color: "#bf202f", fontSize: "26px" }}>&quot;</span>{" "}
            At Soori Technology, we are dedicated to delivering innovative and
            comprehensive tech solutions tailored to meet the unique needs of
            businesses and organizations. Our commitment to excellence and
            customer satisfaction drives us to provide a single-source complete
            solution through our core business units in Hardware, Software,
            Consumables, and Support.
            <span style={{ color: "#bf202f", fontSize: "26px" }}>
              &quot;
            </span>{" "}
          </h3>{" "}
        </div>
      </section>
      <section className="mission-vision-wrapper section-padding ">
        <div className=" container">
          <div className="row">
            <div className="col-md-6 col-12 mission-wrapper flex-column d-flex align-items-start">
              <div
                className="d-flex align-items-end"
                style={{ gap: "20px", height: "max-content" }}
              >
                <h3 className="h1 title">
                  <TitleText title={`Our<span> Vision</span>`} />
                </h3>
                <Image src={vision} alt="mission" width={80} height={80} />
              </div>
              <h3 className="subtitle text-left">
                To to be a leading provider of Software Solutions to enhance
                operational efficiency and streamline processes for our clients.{" "}
              </h3>
            </div>
            <div className="col-md-6 col-12 mission-wrapper flex-column d-flex align-items-end">
              <div
                className="d-flex align-items-end"
                style={{ gap: "20px", height: "max-content" }}
              >
                <Image src={mission} alt="mission" width={80} height={80} />
                <h3 className="h1 title">
                  <TitleText title={`Our<span> Mission</span>`} />
                </h3>
              </div>
              <h3 className="subtitle text-right">
                Empowering businesses with immediate access to cutting-edge
                technology and exceptional support.{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-wrapper testimonial-wrapper--style_2 section-padding  fix gray-bg">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 order-1 order-lg-1 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="testimonial-inner mt-0">
                <h2 className="h1 title">
                  Message From <span>Founder’s</span>
                </h2>
                <Slider {...brandSlider}>
                  {messages?.map((member: any, index: number) => {
                    return (
                      <>
                        <div
                          key={index}
                          className="testimonial-item section-padding row d-flex align-items-center m-0"
                        >
                          <div
                            className="col-12 col-md-5 wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".5s"
                          >
                            <div className="testimonial-thumb testimonial-thumb--style_2">
                              <Image
                                src={suren}
                                // key={index}
                                alt="policy banner"
                                // className="moving-vertical"
                                width={600} // Adjust as needed
                                height={524} // Adjust as needed
                              />
                            </div>
                          </div>
                          <div className="testimonial-content col-md-6 col-12 offset-md-1">
                            <h3
                              className="subtitle"
                              style={{ textAlign: "justify" }}
                            >
                              <FaQuoteLeft color="#bf202f" size={46} />
                              {member?.quote}{" "}
                            </h3>
                            <h5 className="client-name">{member?.name}</h5>
                            <h6 className="client-desig">{member?.desig}</h6>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-padding">
        <div className="container">
          <h3 className="h1 title pb-5">
            <TitleText title={`What <span>We</span> Do`} />
          </h3>
          <div className="row m-0 mt-4 justify-content-between">
            <div className="col-12 ">
              <div className="row gap-4">
                {services?.map((modules: any, index: number) => {
                  return (
                    <div key={index} className="col-12  module-item">
                      <Image
                        src={modules.logo}
                        alt="mission"
                        width={150}
                        height={150}
                      />

                      <div className="flex-grow-1 description">
                        <h4>{modules.title}</h4>
                        <p>{modules.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-padding gray-bg">
        <h2 className="h1 title " style={{ textAlign: "center" }}>
          <TitleText title={`Our<span> Commitment</span>`} />
        </h2>
        <div className="container text-center">
          <h3 className="subtitle">
            <span style={{ color: "#bf202f", fontSize: "26px" }}>&quot;</span>{" "}
            At Soori Technology, we are dedicated to delivering innovative and
            comprehensive tech solutions tailored to meet the unique needs of
            businesses and organizations. Our commitment to excellence and
            customer satisfaction drives us to provide a single-source complete
            solution through our core business units in Hardware, Software,
            Consumables, and Support.
            <span style={{ color: "#bf202f", fontSize: "26px" }}>
              &quot;
            </span>{" "}
          </h3>{" "}
        </div>
      </section>
      <Partners />

      {/* <section className="team-wrapper section-padding fix">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 order-2 order-xl-1 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="row team-member-inner mtn-40">
                <Image
                  className="moving-vertical"
                  src={solution}
                  alt="policy banner"
                  width={583} // Adjust as needed
                  height={634} // Adjust as needed
                />
              </div>
            </div>
            <div
              className="col-xl-5 offset-xl-1 order-1 order-xl-2 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="team-content team-content--style_2 about-inner">
                <h2 className="h1 title">
                  We have <span>Creative</span> Team
                  <br /> <span>Discover</span> our exerts
                </h2>
                <h3 className="subtitle">
                  Create some exclusive way to solve our customer problems
                </h3>
                <p>
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim{" "}
                  <br /> ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ex ea commodi consequatur?
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam
                </p>
                <Link href="#" className="btn btn-all">
                  Let Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="policy-area pb-125">
        <div className="container">
          <div className="row mtn-30">
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon1} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Creative Ideas</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon2} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Low Cost</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon3} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Talented Team</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-policy-item mt-30">
                <div className="service-policy-icon">
                  <Image src={icon4} alt="icon" width={50} height={50} />
                </div>
                <h3 className="service-policy-title">Online Support</h3>
                <p className="service-policy-desc">
                  Ideas es to obtain pain of itself, because it is pain, but
                  because occasionallyght ocean
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Testimonials /> */}
      {/* <div className="">
        <Counter />
      </div>
      <ParticleSlider /> */}
    </>
  );
};

export default About;
