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
import activ from "@/assets/activ.jpg";
import FeatureModule from "@/components/FeaturesModule/FeatureModule";

const Activ = () => {
  const data = {
    name: "Activ",
    results: [],
    logo: activ,
    description:
      "HR payroll software is a comprehensive solution designed to streamline and automate the payroll process for organizations of all sizes. By integrating payroll processing, tax compliance, direct deposit, and employee self-service features, this software enhances efficiency and accuracy in managing employee compensation. It ensures compliance with local, state, and federal regulations, reduces administrative costs, and improves employee satisfaction by providing timely and transparent access to payroll information. With customizable settings, seamless integration with HR and accounting systems, and robust data security, HR payroll software is an essential tool for modern HR management.",
    features: [
      {
        id: 1,
        title: "Automated Payroll Processing",
        image: download1,
        description: "Automatically calculates wages, taxes, and deductions",
      },
      {
        id: 2,
        image: download2,
        title: "Tax Compliance",
        description:
          "Ensures compliance with local, state, and federal tax regulations",
      },
      {
        id: 3,
        image: download1,
        title: "Time & Attendance",
        description:
          "Integrates with time-tracking systems to ensure accurate payroll",
      },
      {
        id: 4,
        image: download2,
        title: "Benefits Administration",
        description:
          "CUBIX provides comprehensive analytics and reports, offering detailed insights into inventory, orders, and warehouse performance.",
      },
      {
        id: 5,
        image: download1,
        title: "Reporting & Analytics",
        description:
          "CUBIX is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere",
      },
      {
        id: 6,
        image: download2,
        title: "Mobile Access",
        description:
          "CUBIX integrates seamlessly with courier, accounting, and other essential systems, enhancing efficiency and reducing data entry errors.",
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Increased Efficiency",
        icon: icon1,
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: icon2,
        title: "Cost Savings",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: icon3,
        title: "Compliance & Accuracy",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: icon4,
        title: "Employee Satisfaction",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: icon1,
        title: "Data Security",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
      {
        id: 6,
        icon: icon1,
        title: "Scability",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
      {
        id: 7,
        icon: icon1,
        title: "Improved Decision Making",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
      {
        id: 8,
        icon: icon1,
        title: "Compliance Processes",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
      {
        id: 9,
        icon: icon1,
        title: "Enhanced Record Keeping",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
      {
        id: 10,
        icon: icon1,
        title: "Streamlined Processes",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
    ],
    products: [
      {
        id: 1,
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/zc100-3x2-3600.jpg.imgw.1200.1200.jpg",
        productName: "ZC100",
        brand: "Brand 1",
        category: "Card Printer",
      },
      {
        id: 2,
        image:
          "https://m.media-amazon.com/images/I/615fBEcsp9L._AC_SL1500_.jpg?4vu9g0hn3oc5",
        productName: "",
        brand: "Brand 1",
        category: "Attendance Machine",
      },
      {
        id: 3,
        image:
          "https://image.made-in-china.com/2f0j00yPGkHwmWMMqI/Free-Sample-13-56MHz-Mf-Classic-EV1-1K-White-Blank-Smart-Card-Printable-NFC-RFID-Card.webp",
        productName: "",
        brand: "Brand 1",
        category: "Card",
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

export default Activ;
