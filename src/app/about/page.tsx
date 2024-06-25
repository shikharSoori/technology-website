import AboutHero from "@/components/Hero/AboutHero";
import React from "react";
import "./about.scss";
import Image from "next/image";
import solution from "../../assets/Solution.png";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonials/Testimonials";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import Link from "next/link";
const About = () => {
  return (
    <>
      <AboutHero title="About Us" />
      <section className="about-wrapper-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-1 order-lg-1">
              <div className="about-inner">
                <h2 className="h1 title">
                  <span>Provide</span> the Best <br /> Solutions{" "}
                  <span>to Improve</span> <br />
                  your Business
                </h2>
                <h3 className="subtitle">
                  Create some exclusive way to solve our customer problems
                </h3>
                <p>
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit
                  esse quam
                </p>
                <Link href="#" className="btn btn-all">
                  Start
                </Link>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 order-2 order-lg-2">
              <div className="about-thumb">
                <Image
                  className="moving-vertical"
                  src={solution}
                  alt="policy banner"
                  width={583} // Adjust as needed
                  height={634} // Adjust as needed
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gray-bg">
        <Counter />
      </div>
      <section className="team-wrapper section-padding fix">
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
                {/* team */}
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
      </section>
      <section className="policy-area pb-125">
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
      </section>
      <Testimonials />
    </>
  );
};

export default About;
