import Image from "next/image";
import React from "react";
import solution from "../../assets/Solution.png";
import { fetchWhySoori, getData } from "@/app/lib/getData";
import Link from "next/link";
import TitleText from "../Testimonials/TitleText";
import WhySooriItem from "./WhySooriItem";

// export const revalidate = 60;
const WhySoori = async () => {
  const data = await getData(`product-app/why-soori`);
  const whyReason = data?.results;
  // const data = await getData(
  //   `product-app/product?ordering=-id&brand_id=${matchedBrand.id}&offset=0&limit=0`
  // );
  return (
    <section
      className="blog-area section-padding--ptb_90 fix wow fadeInUp gray-bg"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="h1 title w-100 mw-100">
                <TitleText
                  title={`Why<br/> <span>Soori</span> Technology <span>?</span>`}
                />
                {/* <span>Why</span> <br /> Soori Technology */}
              </h2>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                labore dolore magnam aliquam quaerat voluptatem ad minima
                veniam, quis nostrum exercitationem
              </p>
            </div>
          </div>
        </div>
        <div className="row mtn-30">
          <WhySooriItem />
        </div>
      </div>
    </section>
  );
};

export default WhySoori;
