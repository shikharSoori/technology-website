import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroItem = () => {
  return (
    <div>
      <div className="hero-single-slide">
        <div className="hero-slider-item">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-sm-6">
                <div className="hero-slider-content">
                  <h1 className="slide-title">
                    Great Plan to increase your Business
                  </h1>
                  <Link href="about.html" className="btn btn-hero">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-sm-6">
                <div className="slider-thumb moving-vertical">
                  {/* <Image
                    src={solution}
                    alt="policy banner"
                    className="moving-vertical"
                    width={699} // Adjust as needed
                    height={486} // Adjust as needed
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
