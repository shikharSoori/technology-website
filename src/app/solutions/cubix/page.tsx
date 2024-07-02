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
import cubix from "@/assets/cubix.jpg";
import FeatureModule from "@/components/FeaturesModule/FeatureModule";
const Cubix = () => {
  const data = {
    name: "Cubix",
    results: [],
    logo: cubix,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis, aliquam maiores",
    features: [
      {
        id: 1,
        title: "Real-Time Inventory Management",
        image: download1,
        description:
          "CUBIX offers real-time inventory visibility and accurate stock tracking across single or multiple warehouses with immediate updates",
      },
      {
        id: 2,
        image: download2,
        title: "Multi Location",
        description:
          "For businesses with multiple stores or warehouses, CUBIX enables seamless inventory management across all locations.",
      },
      {
        id: 3,
        image: download1,
        title: "Multi-Currency Capability",
        description:
          "CUBIX supports currency conversion and financial reporting for smooth international transactions with flexible rate options",
      },
      {
        id: 4,
        image: download2,
        title: "Insights and Reporting",
        description:
          "CUBIX provides comprehensive analytics and reports, offering detailed insights into inventory, orders, and warehouse performance.",
      },
      {
        id: 5,
        image: download1,
        title: "Cloud Based Accessibility",
        description:
          "CUBIX is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere",
      },
      {
        id: 6,
        image: download2,
        title: "Integration with Other System",
        description:
          "CUBIX integrates seamlessly with courier, accounting, and other essential systems, enhancing efficiency and reducing data entry errors.",
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Inventory Optimization & Accuracy",
        icon: icon1,
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: icon2,
        title: "Mobility Solution",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: icon3,
        title: "Operational Efficiency",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: icon4,
        title: "Real-Time Data and Reporting",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: icon1,
        title: "Control Warehouse",
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
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/tc26-3x2-3600.jpg.imgw.3600.3600.jpg",
        productName: "TC26",
        brand: "Brand 1",
        category: "Mobile Computer",
      },
      {
        id: 3,
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/fs70-product-front-down-3x2-3600.jpg",
        productName: "FS70",
        brand: "Brand 1",
        category: "Fixed Industrial Scanner",
      },
      {
        id: 4,
        image:
          "https://m.media-amazon.com/images/I/71C6ooUXhwL._AC_SL1500_.jpg",
        productName: "",
        brand: "Brand 1",
        category: "Label",
      },
    ],
    modules: [
      {
        id: "1",
        title: "Purchase Module",
        description:
          "This module allows for the creation and acceptance of purchase orders, viewing of pending orders, and order cancellations. Additionally, it provides easy access to opening stocks, purchase returns, and requests",
      },
      {
        id: "2",
        title: "Order Module",
        description:
          "-	This module handles the business aspects related to customers, including quotations, sales orders, and customer orders",
      },
      {
        id: "3",
        title: "Dispatch Module",
        description:
          "Items can be sold through direct sales, challans, and credit transactions. Additionally, it includes a comprehensive dispatch process",
      },
      {
        id: "4",
        title: "Mobility & Transfer Module",
        description:
          "This module handles mobility operations, including location shifting and item transfers. It also verifies items after they are picked up and dropped off",
      },
      {
        id: "5",
        title: "Stock Management & Packing",
        description:
          "Current stock levels for any item can be viewed, including package information and package type",
      },
    ],
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
                        <p className="text-justify mt-2">
                          {data.description} Bigger ipsum dolor sit amet
                          consectetur adipisicing elit. Voluptate perferendis
                          consequuntur illo aliquid nihil ad neque, debitis
                        </p>
                      </div>
                    </div>

                    <Features solution={data.features} />

                    {/* <div className="section-padding">
                      <h3 className="blog-title pb-4 ">Process</h3>
                      <div className="row m-0 step-circle">
                        <div className="col-md-12">
                          <div className="main-timeline d-flex justify-content-center">
                            <div className="timeline">
                              <div className="timeline-icon">
                                <span className="year">1</span>
                              </div>
                              <div className="timeline-content">
                                <h3 className="title">Web Desginer</h3>
                              </div>
                            </div>
                            <div className="timeline">
                              <div className="timeline-icon">
                                <span className="year">1</span>
                              </div>
                              <div className="timeline-content">
                                <h3 className="title">Web Desginer</h3>
                              </div>
                            </div>
                            <div className="timeline">
                              <div className="timeline-icon">
                                <span className="year">1</span>
                              </div>
                              <div className="timeline-content">
                                <h3 className="title">Web Desginer</h3>
                              </div>
                            </div>
                            <div className="timeline">
                              <div className="timeline-icon">
                                <span className="year">1</span>
                              </div>
                              <div className="timeline-content">
                                <h3 className="title">Web Desginer</h3>
                              </div>
                            </div>
                            <div className="timeline">
                              <div className="timeline-icon">
                                <span className="year">1</span>
                              </div>
                              <div className="timeline-content">
                                <h3 className="title">Web Desginer</h3>
                              </div>
                            </div>

                            <div className="timeline">
                              <div className="timeline-icon">
                                <span className="year">1</span>
                              </div>
                              <div className="timeline-content">
                                <h3 className="title">Web Desginer</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <FeatureModule modules={data.modules} />

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
                <div className="row">
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

export default Cubix;
