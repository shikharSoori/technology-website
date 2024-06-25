"use client";
import React, { use, useEffect } from "react";
import TitleText from "../Testimonials/TitleText";
import Slider from "react-slick";
import AOS from "aos";
const TrackTraceVideo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="testimonial-wrapper testimonial-wrapper--style_2  section-padding fix gray-bg">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-7 col-lg-7  order-1 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div
                className="testimonial-thumb testimonial-thumb--style_2"
                data-aos="zoom-out-left"
                // data-aos-duration="2000"
                // data-aos-delay="5000"
              >
                {/* <Image
                  src={solution}
                  alt="policy banner"
                  className="moving-vertical"
                  width={583} // Adjust as needed
                  height={634} // Adjust as needed
                /> */}
                <iframe
                  width="660"
                  height="370"
                  src="https://www.youtube.com/embed/Sxa7MWMZR9A?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1&playlist=Sxa7MWMZR9A"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="0"
                  allowFullScreen
                  style={{ borderRadius: "60px 0px 60px 0px " }}
                ></iframe>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 order-2 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="testimonial-inner mt-0">
                <h2 className="h1 title">
                  <TitleText
                    title={`
    Track <span data-aos="fade-right" data-aos-duration="2000" data-aos-delay="5000">Trace &</span> \
    <br /> Identity  `}
                  />
                  {/* What <span>Client’s</span> say <br /> happy reviews{" "} */}
                </h2>
                <p className="mt-3">
                  We assist businesses in leveraging digital transformation to
                  gain a competitive advantage. Regardless of your level of
                  experience in the field, our RFID solution will help you in
                  raising the bar for overall productivity and standards. We
                  ensure, traceability with a single click.
                </p>

                {/* <Slider>
                  <div className="testimonial-item testimonial-item--style_2 ">
                    <div className="testimonial-content">
                      <p>{"Hello"}</p>
                      <h5 className="client-name">{"testimonial?.name"}</h5>
                      <h6 className="client-desig">
                        {"testimonial?.designation"},{" "}
                        {"testimonial?.designation"}
                      </h6>
                    </div>
                  </div>
                </Slider> */}

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackTraceVideo;
