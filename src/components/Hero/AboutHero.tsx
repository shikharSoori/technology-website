import { url } from "inspector";
import React from "react";
import "../../app/about/about.scss";
import Link from "next/link";
const AboutHero = ({ title, subTitle }: any) => {
  return (
    <div className="breadcrumb-area bg-img about-us">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrap">
              <nav aria-label="breadcrumb">
                <h2 className="breadcrumb-title">{title}</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {!subTitle ? (
                      title
                    ) : (
                      <Link href={`/${title}`}>{title}</Link>
                    )}
                  </li>
                  {subTitle && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {subTitle}
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
