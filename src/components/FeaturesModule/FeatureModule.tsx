import React from "react";
import TitleText from "../Testimonials/TitleText";
import "./featuremodule.css";
import Link from "next/link";
const FeatureModule = ({ modules }: any) => {
  return (
    <div className="section-padding">
      <h3 className="h1 title pb-5">
        <TitleText title={`Modules`} />
      </h3>
      <div className="row m-0 mt-4 justify-content-between">
        <div className="col-9">
          <div className="row gap-4">
            {modules?.map((modules: any, index: number) => {
              return (
                <div key={index} className="col-12  module-item">
                  <div className="h1 title">
                    <TitleText title={`0<span>${index + 1}</span> `} />
                  </div>
                  <div className="flex-grow-1 description">
                    <h4>{modules.title}</h4>
                    <p>{modules.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3 align-items-start d-flex ">
          <div className="request-demo-wrapper">
            <p className="text-center">
              Gain a thorough exposition of the solution, featuring a use case
              that is custom-fitted nuances of your business environment.
            </p>
            <Link
              href="/contact"
              style={{ width: "max-content" }}
              className=" btn py-2 px-4 mt-2"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureModule;
