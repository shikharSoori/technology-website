import React from "react";
import "./features.css";
import Image from "next/image";
import icon from "@/assets/icon-1.png";
import download1 from "@/assets/wrriterwarehouse.jpg";
import download2 from "@/assets/laptopwarehouse.jpg";
const Features = (solution: any) => {
  console.log(solution, "solution");

  const data = [
    {
      title: "Solutions",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Solutions",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Solutions",
      description: "Lorem ipsum dolor sit amet",
    },
   
  ];
  return (
    <>
      <div className="section-padding">
        <h3 className="blog-title pb-4">Features</h3>
        <div className="row m-0 mt-4">
          {data.map((item, index) => (
            <div
              className="col-12 col-md-4 col-lg-4 p-0 features-list"
              key={index}
            >
              <div
                className={`d-flex ${
                  index % 3 === 0 || index % 3 === 2
                    ? "flex-column"
                    : "flex-column-reverse"
                } feature-column-mobile`}
              >
                <div
                  className="features-bg"
                  style={{ backgroundImage: `url(${download2.src})` }}
                ></div>
                <div className="features-desc">
                  <div className="features-logo-bg">
                    <Image
                      className="w-100"
                      src={icon}
                      width={370}
                      height={250}
                      alt="blog-img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="features-title">{item.title}</h3>
                  <p className="features-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-4 p-0">
            <div className="d-flex flex-column">
              <div
                className="features-bg"
                style={{ backgroundImage: `url(${download2.src})` }}
              ></div>
              <div className="features-desc">
                <div className="features-logo-bg">
                  <Image
                    className="logo-features"
                    src={icon}
                    width={370}
                    height={250}
                    alt="blog-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="features-title">Solutions</h3>
                <p className="features-text">
                  {solution.description} Bigger ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="col-6 order-1 p-0">
            <Image
              className="w-100"
              src={download1}
              width={370}
              height={250}
              alt="blog-img"
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div
            className="col-6 d-flex flex-column justify-content-center align-items-start order-2"
            style={{ padding: "50px" }}
          >
            <h4 className="blog-sub-title pb-2" style={{ color: "#bf202f" }}>
              Features
            </h4>
            {solution.description} Bigger ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate perferendis consequuntur illo aliquid
            nihil ad neque, debitis praesentium libero ullam asperiores
            exercitationem deserunt inventore facilis, officiis, aliquam maiores
          </div> */}
        </div>{" "}
      </div>
    </>
  );
};

export default Features;
