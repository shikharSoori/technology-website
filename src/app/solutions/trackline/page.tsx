import Features from "@/components/Features/Features";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import icon1 from "@/assets/icon-1.png";
import icon2 from "@/assets/icon-2.png";
import icon3 from "@/assets/icon-3.png";
import icon4 from "@/assets/icon-4.png";
import "../[solutionDetail]/solutionDetail.css";
import download1 from "@/assets/wrriterwarehouse.jpg";
import download2 from "@/assets/laptopwarehouse.jpg";
import Adavantage from "@/components/Advantages/Adavantage";
import TitleText from "@/components/Testimonials/TitleText";
import trackline from "@/assets/tracklinelogo.png";
import FeatureModule from "@/components/FeaturesModule/FeatureModule";

const Trackline = () => {
  const data = {
    name: "Trackline",
    results: [],
    logo: trackline,
    description:
      "Trackline is a comprehensive asset management software specifically designed to streamline the tracking, maintenance, and lifecycle management of company assets across various industries. The software leverages advanced barcode and RFID technology to capture and maintain detailed information about each asset, from initial procurement to deployment at specific sites or branches.",
    features: [
      {
        id: 1,
        title: "Detailed Asset Tracking",
        image: download1,
        description:
          "Manage your workforce from anywhere, at any time, ensuring maximum flexibility and productivity. ",
      },
      {
        id: 2,
        image: download2,
        title: "Procurement Integration",
        description:
          "Enjoy seamless integration across all corporate functions, which streamlines your workflow and increases efficiency. Our technology ensures that all of your tools and procedures operate together seamlessly.",
      },

      {
        id: 3,
        image: download2,
        title: "Warranty and Service Agreement Management",
        description:
          "Track and evaluate individual performance effortlessly with our intuitive tools. Gain insights into each team member's contributions and progress to foster continuous improvement",
      },
      {
        id: 4,
        image: download1,
        title: "Reporting and Insights",
        description:
          "Track and evaluate individual performance effortlessly with our intuitive tools. Gain insights into each team member's contributions and progress to foster continuous improvement",
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Streamlined asset management process",
        icon: icon1,
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: icon2,
        title: "Improved Efficency",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: icon3,
        title: "Cost Optimization",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: icon4,
        title: "Minimized downtime through timely action",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: icon1,
        title: "Data-driven decision making",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
    ],
    products: [
      {
        id: 1,
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/zt400-series-left-front-3x2-3600.jpg",
        productName: "ZT400",
        brand: "Brand 1",
        category: "Industrial Printer",
      },
      {
        id: 2,
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/rfd40premium-3x2-3600.jpg.imgw.1200.1200.jpg",
        productName: "RFD40",
        brand: "Brand 1",
        category: "RFID Reader",
      },
      {
        id: 3,
        image:
          "https://www.expresscorp.com/wp-content/uploads/2023/03/standard-rfid.jpeg",
        productName: "",
        brand: "Brand 1",
        category: "RFID Tag",
      },
      {
        id: 4,
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/an4x-front-facing-3x2-3600.jpg",
        productName: " AN480",
        brand: "Brand 1",
        category: "RFID Antenna",
      },
    ],
    modules: [],
  };

  return (
    <>
      <div>
        <AboutHero title={"solutions"} subTitle={"Cubix"} />
        <section className="blog-area solution-area">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 order-1 order-lg-2 ">
                <div className="blog-item ">
                  <div className="blog-content blog-details">
                    <div className="row mt-4">
                      <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <iframe
                          src="https://www.youtube.com/embed/Sxa7MWMZR9A?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1&playlist=Sxa7MWMZR9A"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          frameBorder="0"
                          allowFullScreen
                          style={{
                            borderRadius: "30px 0px 30px 0px ",
                            width: "100%",
                            aspectRatio: "16/9",
                          }}
                          className="mt-4 mt-lg-0"
                        ></iframe>
                      </div>
                      <div className="col-12  col-lg-6 order-lg-2">
                        <Image
                          src={data.logo}
                          width={100}
                          height={50}
                          alt="blog-img"
                          className="solution-logo"
                        />
                        <p className="text-justify mt-2">{data.description}</p>
                      </div>
                    </div>

                    <Features solution={data.features} />

                    {data.modules.length > 0 && (
                      <FeatureModule modules={data.modules} />
                    )}

                    <Adavantage advantage={data.advantages} />
                  </div>
                </div>
              </div>

              <div className=" col-lg-12 order-1 order-lg-2 section-padding ">
                <h3 className="h1 title pb-5">
                  <TitleText
                    title={`<span>Hardwares</span> used in ${data.name}`}
                  />
                </h3>
                <div className="row justify-content-center">
                  {data?.products?.map((product: any, number: number) => {
                    // const brandId = product?.brand;
                    // const matchedBrand = brands?.find(
                    //   (brand: any) => brand.id === brandId
                    // );

                    return (
                      <div key={number} className="col-6 col-md-4 col-lg-3">
                        <div className="blog-item mt-40">
                          <div
                            className="blog-thumb"
                            style={{ height: "170px" }}
                          >
                            <Link
                              href={`/products/${product?.brand}/${formatName(
                                product?.productName
                              )}`}
                            >
                              <Image
                                src={product.image}
                                width={370}
                                height={250}
                                alt="product-img"
                              />
                            </Link>
                          </div>
                          <div className="blog-content">
                            <h3 className="blog-title">
                              <Link
                                href={`/products/${product?.brand}/${formatName(
                                  product?.productName
                                )}`}
                                style={{ fontSize: "22px" }}
                              >
                                {product?.productName}
                                {product?.productName ? " - " : ""}
                                {product?.category}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Trackline;
