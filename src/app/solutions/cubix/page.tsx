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
      "CUBIX is a comprehensive warehouse management software designed to streamline inventory control, optimize warehouse operations, and enhance productivity. It offers real-time inventory tracking, multi-location support, and flexible reporting, ensuring efficient and accurate management of all warehouse activities",
    features: [
      {
        id: 1,
        title: "Real-Time Inventory Management",
        image:
          "https://images.stockcake.com/public/a/b/3/ab3b06f0-0bcb-4c25-98e1-b04b2c6c0217_large/inventory-scanning-process-stockcake.jpg",
        description:
          "CUBIX offers accurate, instant stock tracking across warehouses.",
      },
      {
        id: 2,
        image:
          "https://images.stockcake.com/public/e/f/b/efbb2413-01f5-4f49-a76d-41416fbb9470_large/warehouse-inventory-stock-stockcake.jpg",
        title: "Multi Location",
        description:
          "CUBIX ensures seamless inventory management across multiple stores/warehouses.",
      },
      {
        id: 3,
        image:
          "https://images.stockcake.com/public/c/7/2/c72e411c-9cd7-4b76-9f76-512ce8a5fbca_large/warehouse-inventory-check-stockcake.jpg",
        title: "Multi-Currency Capability",
        description:
          "CUBIX enables smooth international transactions with flexible rate options.",
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
        id: 3,
        productName: "ZT400 Series",
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/zt400-series-front-group-3x2-3600.jpg",
        specs: [
          "Performance, versatility and reliablity",
          "Simple to setup, manage and secure with pirnt DNA software FRID capable",
        ],
        category: 3,
        brand: 1,
      },
      {
        id: 6,
        productName: "TC26 - Mobile Computer",
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-graphics/spec-sheet-assets/tc21-tc26-spec-sheet-asset-photography.jpg.imgw.3600.3600.jpg",
        specs: ["Android Mobile Computer", "Scanner inbuilt"],
        category: 6,
        brand: 1,
      },
      {
        id: 1,
        productName: "FS70/VS70",
        image:
          "data:image/jpeg;base64,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",
        specs: [
          "Customizable for the most challenging track-and-trace and inspection applications",
          "Configurable optics and lightning single or Dual M12 Gigabit Ethernet",
        ],
        category: 1,
        brand: 1,
      },
      {
        id: 7,
        productName: "Label",
        image:
          "https://m.media-amazon.com/images/I/71C6ooUXhwL._AC_SL1500_.jpg",
        specs: ["Label"],
        category: 7,
        brand: 1,
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
                          src="https://www.youtube.com/embed/O210zu4RUd4?si=33S0M5XN3G4k36Px&autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          style={{
                            borderRadius: "30px 0px 30px 0px ",
                            width: "100%",
                            aspectRatio: "16/9",
                          }}
                          className="mt-4 mt-lg-0"
                        ></iframe>
                        {/* <iframe
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
                        ></iframe> */}
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
                              href={`/hardware/${product?.category}/${product?.id}`}
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
                                href={`/hardware/${product?.category}/${product?.id}`}
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
