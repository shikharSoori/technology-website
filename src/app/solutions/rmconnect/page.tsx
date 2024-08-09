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
import icon5 from "@/assets/5.png";
import "../[solutionDetail]/solutionDetail.css";
import download1 from "@/assets/wrriterwarehouse.jpg";
import download2 from "@/assets/laptopwarehouse.jpg";
import Adavantage from "@/components/Advantages/Adavantage";
import TitleText from "@/components/Testimonials/TitleText";
import cubix from "@/assets/cubix.jpg";
import FeatureModule from "@/components/FeaturesModule/FeatureModule";
const Cubix = () => {
  const data = {
    name: "RM Connect",
    results: [],
    logo: cubix,

    description:
      "RM Connect is an innovative software solution designed to streamline and enhance the management of the credit department in banks. Specializing in lead management, loan processing, collateral registration, inspection, and collection & recovery, RM Connect offers a comprehensive suite of modules that integrate seamlessly with existing systems. With a mobile-centric approach and real-time data capabilities, RM Connect ensures efficient workflows, accurate data management, and improved customer experiences. By minimizing manual processes and enhancing operational efficiency, RM Connect helps banks make informed lending decisions, reduce costs, and improve overall productivity.",
    features: [
      {
        id: 1,
        title: "Lead Management",
        image:
          "https://images.stockcake.com/public/a/b/3/ab3b06f0-0bcb-4c25-98e1-b04b2c6c0217_large/inventory-scanning-process-stockcake.jpg",
        description: "Create, update, and track potential clients.",
      },
      {
        id: 2,
        image:
          "https://images.stockcake.com/public/e/f/b/efbb2413-01f5-4f49-a76d-41416fbb9470_large/warehouse-inventory-stock-stockcake.jpg",
        title: "Loan Processing",
        description: "Manage loan applications, approvals, and disbursements",
      },
      {
        id: 3,
        image:
          "https://images.stockcake.com/public/c/7/2/c72e411c-9cd7-4b76-9f76-512ce8a5fbca_large/warehouse-inventory-check-stockcake.jpg",
        title: "Mobile-Centric Approac",
        description: "Enhances field mobility and data collection.",
      },
      {
        id: 4,
        image: download2,
        title: "Collection & Recovery",
        description:
          "Tools for reporting, disposition capture, and automated communications.",
      },
      {
        id: 5,
        image: download1,
        title: "Collateral Registration",
        description: "Pre-valuation, ad hoc, and full valuation of collateral",
      },
      {
        id: 6,
        image: download2,
        title: "Inspection",
        description: "Conduct thorough inspections with real-time updates.",
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Streamlined Workflows",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjYmYyMDI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yOTMgMGMuMzkgMCAuNzA3LjMxNy43MDcuNzA3VjJoMS4yOTNhLjcwNy43MDcgMCAwIDEgLjUgMS4yMDdsLTEuNDYgMS40NkExLjE0IDEuMTQgMCAwIDEgMTMuNTMgNWgtMS40N0w4LjUzIDguNTNhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNkwxMSAzLjk0VjIuNDdjMC0uMzAxLjEyLS41OS4zMzMtLjgwNGwxLjQ2LTEuNDZhLjcuNyAwIDAgMSAuNS0uMjA3TTIuNSA4YTUuNSA1LjUgMCAwIDEgNi41OTgtNS4zOWEuNzUuNzUgMCAwIDAgLjI5OC0xLjQ3QTcgNyAwIDEgMCAxNC44NiA2LjZhLjc1Ljc1IDAgMCAwLTEuNDcuMjk5cS4xMDkuNTMzLjExIDEuMTAxYTUuNSA1LjUgMCAxIDEtMTEgMG01LjM2NC0yLjQ5NmEuNzUuNzUgMCAwIDAtLjA4LTEuNDk4QTQgNCAwIDEgMCAxMS45ODggOC4zYS43NS43NSAwIDAgMC0xLjQ5Ni0uMTExYTIuNSAyLjUgMCAxIDEtMi42My0yLjY4NiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMTcgMTRoLTYuN2wtNy40NS0yLjIzbC4zMS0uNjJsOC40NC44NWwzLjkzLTIuOTRzMy43NyAzLjQ0IDQuMjcgNC4xNGMwIDAtMS4xLjgtMi44LjgiIG9wYWNpdHk9IjAuMyIvPjxwYXRoIGZpbGw9IiNiZjIwMjQiIGQ9Ik0yMiAxN2MwIC41NS0uNDUgMS0xIDFoLS4xN2wtMi4yLTIuMkMyMC41OCAxNS4zNyAyMiAxNC40IDIyIDEzYzAtMS04LTgtOC04aC0zdjJoMi4yNWwuOC43MkwxMSAxMEwyIDlsLTIgNGw0LjU0IDEuMzZsLTMuNDkgMS44OEMtLjc3IDE3LjIyLS4wNyAyMCAyIDIwaDZjMi4yMSAwIDQtMS43OSA0LTRoNGwyIDJoLTN2Mmg2YzEuNjYgMCAzLTEuMzQgMy0zek04IDE4SDJsNS4yNS0yLjgzTDEwIDE2YTIgMiAwIDAgMS0yIDJtOS00aC02LjdsLTcuNDUtMi4yM2wuMzEtLjYybDguNDQuODVsMy45My0yLjk0czMuNzcgMy40NCA0LjI3IDQuMTRjMCAwLTEuMS44LTIuOC44Ii8+PC9zdmc+",
        title: "Real-Time Data",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDEyIDEyIj48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMy41IDJhLjUuNSAwIDEgMCAwIDFhLjUuNSAwIDAgMCAwLTFNMiAyLjVhMS41IDEuNSAwIDEgMSAzIDBhMS41IDEuNSAwIDAgMS0zIDBNMy41IDlhMSAxIDAgMCAxIDEtMWgzYTEgMSAwIDAgMSAxIDF2LjE2N2MwIC41ODctLjM1NyAxLjA1OC0uODA4IDEuMzU4QzcuMjM3IDEwLjgzIDYuNjM3IDExIDYgMTFzLTEuMjM3LS4xNzEtMS42OTItLjQ3NWMtLjQ1LS4zLS44MDgtLjc3MS0uODA4LTEuMzU4em0xIDB2LjE2N2MwIC4xNDkuMDkuMzQ1LjM2My41MjZjLjI3LjE4LjY3LjMwNyAxLjEzNy4zMDdzLjg2OC0uMTI3IDEuMTM3LS4zMDdjLjI3Mi0uMTgxLjM2My0uMzc3LjM2My0uNTI2Vjl6TTggMi41YS41LjUgMCAxIDEgMSAwYS41LjUgMCAwIDEtMSAwTTguNSAxYTEuNSAxLjUgMCAxIDAgMCAzYTEuNSAxLjUgMCAwIDAgMC0zTTYgNWEuNS41IDAgMSAwIDAgMWEuNS41IDAgMCAwIDAtMW0tMS41LjVhMS41IDEuNSAwIDEgMSAzIDBhMS41IDEuNSAwIDAgMS0zIDBNMy41NSA1SDJhMSAxIDAgMCAwLTEgMXYuMjA3YzAgLjU5Ni4zNDMgMS4wODYuNzk3IDEuNDA3Yy4yNzIuMTkzLjU5Ny4zMzYuOTUyLjQyYTIgMiAwIDAgMSAxLjIwOC0uOTZxLS4yMTUuMDQ1LS40NTcuMDQ2Yy0uNDYxIDAtLjg1OC0uMTMzLTEuMTI2LS4zMjJDMi4xMDUgNi42MDggMiA2LjM5IDIgNi4yMDdWNmgxLjU1YTIuNSAyLjUgMCAwIDEgMC0xbTQuOSAxSDEwdi4yMDdjMCAuMTg0LS4xMDUuNC0uMzc0LjU5Yy0uMjY4LjE5LS42NjUuMzIzLTEuMTI2LjMyM3EtLjI0MiAwLS40NTctLjA0NWMuNTIuMTQ2Ljk1My40OTYgMS4yMDguOTU5Yy4zNTUtLjA4NC42OC0uMjI3Ljk1Mi0uNDJjLjQ1NC0uMzIuNzk3LS44MTEuNzk3LTEuNDA3VjZhMSAxIDAgMCAwLTEtMUg4LjQ1YTIuNSAyLjUgMCAwIDEgMCAxIi8+PC9zdmc+",
        title: "Cost Efficiency",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMjEuNTEgMThIMTVjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTFoMS4yNXYtLjI1YzAtLjk3Ljc4LTEuNzUgMS43NS0xLjc1czEuNzUuNzggMS43NSAxLjc1VjE3aDEuNzZjLjI4IDAgLjUuMjIuNS41Yy0uMDEuMjctLjIzLjUtLjUuNSIgb3BhY2l0eT0iMC4zIi8+PHBhdGggZmlsbD0iI2JmMjAyNCIgZD0iTTIxLjUgMTQuOThjLS4wMiAwLS4wMyAwLS4wNS4wMUEzLjQ5IDMuNDkgMCAwIDAgMTggMTJjLTEuNCAwLTIuNi44My0zLjE2IDIuMDJBMi45ODggMi45ODggMCAwIDAgMTIgMTdjMCAxLjY2IDEuMzQgMyAzIDNsNi41LS4wMmEyLjUgMi41IDAgMCAwIDAtNW0uMDEgMy4wMkgxNWMtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMWgxLjI1di0uMjVjMC0uOTcuNzgtMS43NSAxLjc1LTEuNzVzMS43NS43OCAxLjc1IDEuNzVWMTdoMS43NmMuMjggMCAuNS4yMi41LjVjLS4wMS4yNy0uMjMuNS0uNS41TTEwIDQuMjZ2Mi4wOUM3LjY3IDcuMTggNiA5LjM5IDYgMTJjMCAxLjc3Ljc4IDMuMzQgMiA0LjQ0VjE0aDJ2Nkg0di0yaDIuNzNBNy45NDIgNy45NDIgMCAwIDEgNCAxMmMwLTMuNzMgMi41NS02Ljg1IDYtNy43NE0yMCA2aC0yLjczYTcuOTggNy45OCAwIDAgMSAyLjY2IDVoLTIuMDJjLS4yMy0xLjM2LS45My0yLjU1LTEuOTEtMy40NFYxMGgtMlY0aDZ6Ii8+PC9zdmc+",
        title: "Improved Accuracy",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNiZjIwMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMjIgOC4zNVYyMGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY4LjM1QTIgMiAwIDAgMSAzLjI2IDYuNWw4LTMuMmEyIDIgMCAwIDEgMS40OCAwbDggMy4yQTIgMiAwIDAgMSAyMiA4LjM1TTYgMThoMTJNNiAxNGgxMiIvPjxwYXRoIGQ9Ik02IDEwaDEydjEySDZ6Ii8+PC9nPjwvc3ZnPg==",
        title: "Enhanced Conversion",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
    ],
    products: [],
    modules: [
      {
        id: "1",
        title: "Lead Module",
        description:
          "Manages and tracks potential clients from initial contact to conversion, improving efficiency and conversion rates.",
      },
      {
        id: "2",
        title: "Loan Module",
        description:
          "Manages the entire loan lifecycle, from application to disbursement, ensuring data accuracy and reducing operational costs.",
      },
      {
        id: "3",
        title: "Collateral Registration Module",
        description:
          "Simplifies collateral registration with pre-valuation and full valuation processes, enhancing security and efficiency",
      },
      {
        id: "4",
        title: "Inspection Module",
        description:
          "Supports thorough inspections of collateral and loan conditions with real-time updates, improving accuracy and reducing inspection times.",
      },
      {
        id: "5",
        title: "Collection & Recovery Module",
        description:
          "Manages overdue loans and fund recovery with tools for reporting and automated communications, enhancing the recovery process.",
      },
    ],
  };

  return (
    <>
      <div>
        <AboutHero title={"solutions"} subTitle={"RM Connect"} />
        <section className="blog-area solution-area">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 order-1 order-lg-2 ">
                <div className="blog-item ">
                  <div className="blog-content blog-details">
                    <div className="row mt-4">
                      <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <iframe
                          src="https://www.youtube.com/embed/0H_kFIkoNEY?si=uIE_PmWdqvylpHK8&autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1"
                          title="Cubix"
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
                        <p className="text-justify mt-4">{data.description}</p>
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

              {data?.products.length > 0 && (
                <div className=" col-lg-12 order-1 order-lg-2 section-padding ">
                  <h3 className="h1 title pb-5">
                    <TitleText
                      title={`<span>Hardwares</span> used in ${data.name}`}
                    />
                  </h3>
                  <div className="row">
                    {data?.products?.length > 0 &&
                      data?.products?.map((product: any, number: number) => {
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
                                    {/* {product?.productName ? " - " : ""}
                                {product?.category} */}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cubix;
