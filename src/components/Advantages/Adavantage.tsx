import Image from "next/image";
import React from "react";
import icon2 from "@/assets/icon-2.png";
import TitleText from "../Testimonials/TitleText";
const Adavantage = ({ advantage }: any) => {
  return (
    <div className="section-padding">
      <h3 className="h1 title pb-5">
        <TitleText title={`Advantages `} />
      </h3>
      <div className="">
        <div className="container">
          <div className="row mt-30 d-flex justify-content-center">
            {advantage?.map((item: any, index: number) => {
              return (
                <div key={index} className="col-lg-4 col-md-4 col-6">
                  <div className="service-policy-item mt-30">
                    <div className="service-policy-icon d-flex justify-content-center">
                      <Image
                        src={item?.icon}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3 className="service-policy-title text-center">
                      {item?.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adavantage;
