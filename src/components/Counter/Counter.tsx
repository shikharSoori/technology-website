// "use client";
import { getData } from "@/app/lib/getData";
import React from "react";
import CountUp from "@/components/CountUp/Carousel";
import TitleText from "../Testimonials/TitleText";

const Count = ({ number, title, duration }: any) => {
  return (
    <div className="number odometer h1">
      <CountUp
        duration={duration}
        className="counter  odometer h1"
        end={number}
      />
      <span>{title}</span>
    </div>
  );
};
const Counter = async () => {
  // const data = await getData(`solution-app/client-count`);
  // const clients = data?.results;
  return (
    <section
      className="funfacts-section section-padding--ptb_90 fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="section-title section-title--style_2 text-center">
          <h1 className=" title" style={{ fontSize: "24px" }}>
            <TitleText
              title={`Sucessfully <span>completed</span> 100+ <span>projects</span> with <br/> numbers of satisfied client`}
            />
          </h1>
        </div>
     
        <div className="row mtn-40">
          <div className="col-md-3 col-sm-6">
            <div className="counterup-item ">
              <Count
                className="odometer h1"
                duration={3}
                number="200"
                title="+"
              />
              <h5>Active Clients</h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counterup-item ">
              <Count
                className="odometer h1"
                duration={3}
                number="300"
                title="+"
              />{" "}
              <h5>Active Members</h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counterup-item ">
              <Count
                className="odometer h1"
                duration={3}
                number="400"
                title="+"
              />{" "}
              <h5>Active Companies</h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counterup-item ">
              <Count
                className="odometer h1"
                duration={3}
                number="500"
                title=""
              />{" "}
              <h5>Products</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
