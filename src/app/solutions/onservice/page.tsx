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
import onservice from "@/assets/onservicelogo.png";
import FeatureModule from "@/components/FeaturesModule/FeatureModule";

const OnService = () => {
  const data = {
    name: "On Service",
    results: [],
    logo: onservice,
    description:
      "OnService empowers service providers worldwide with streamlined hardware repair and maintenance solutions. Simplifying workforce management from routine to emergency tasks, it ensures smooth operations, minimizes downtime, and boosts productivity. Real-time monitoring, automated reminders, and detailed employee reporting enable teams to proactively manage challenges and optimize performance, fostering stronger client relationships.",
    features: [
      {
        id: 1,
        title: "Ease in managing workforce",
        image:
          "https://images.stockcake.com/public/8/9/7/897391f5-54ef-4968-9531-c75b81cd99f8_large/office-workflow-management-stockcake.jpg",
        description:
          "Ensure flexibility and productivity with anytime, anywhere management capabilities.",
      },
      {
        id: 2,
        image:
          "https://images.stockcake.com/public/9/f/0/9f04403c-8155-40bf-90bb-de11cb0b7d95_large/factory-worker-assembles-stockcake.jpg",
        title: "Work Integration",
        description:
          " Streamline operations across functions for enhanced workflow efficiency and cohesion.",
      },

      {
        id: 3,
        image:
          "https://images.stockcake.com/public/6/f/5/6f5aa198-c478-4ef3-86d7-493468479fb9_large/vintage-pressure-gauge-stockcake.jpg",
        title: "Project Cost Analysis",
        description:
          "Effortlessly track performance, gain insights, and foster continuous improvement.",
      },
      {
        id: 4,
        image: download1,
        title: "Work Assignment & Management",
        description:
          "Track and evaluate individual performance effortlessly with our intuitive tools. Gain insights into each team member's contributions and progress to foster continuous improvement",
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Eaze Work Force Management",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDEyIDEyIj48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMy41IDJhLjUuNSAwIDEgMCAwIDFhLjUuNSAwIDAgMCAwLTFNMiAyLjVhMS41IDEuNSAwIDEgMSAzIDBhMS41IDEuNSAwIDAgMS0zIDBNMy41IDlhMSAxIDAgMCAxIDEtMWgzYTEgMSAwIDAgMSAxIDF2LjE2N2MwIC41ODctLjM1NyAxLjA1OC0uODA4IDEuMzU4QzcuMjM3IDEwLjgzIDYuNjM3IDExIDYgMTFzLTEuMjM3LS4xNzEtMS42OTItLjQ3NWMtLjQ1LS4zLS44MDgtLjc3MS0uODA4LTEuMzU4em0xIDB2LjE2N2MwIC4xNDkuMDkuMzQ1LjM2My41MjZjLjI3LjE4LjY3LjMwNyAxLjEzNy4zMDdzLjg2OC0uMTI3IDEuMTM3LS4zMDdjLjI3Mi0uMTgxLjM2My0uMzc3LjM2My0uNTI2Vjl6TTggMi41YS41LjUgMCAxIDEgMSAwYS41LjUgMCAwIDEtMSAwTTguNSAxYTEuNSAxLjUgMCAxIDAgMCAzYTEuNSAxLjUgMCAwIDAgMC0zTTYgNWEuNS41IDAgMSAwIDAgMWEuNS41IDAgMCAwIDAtMW0tMS41LjVhMS41IDEuNSAwIDEgMSAzIDBhMS41IDEuNSAwIDAgMS0zIDBNMy41NSA1SDJhMSAxIDAgMCAwLTEgMXYuMjA3YzAgLjU5Ni4zNDMgMS4wODYuNzk3IDEuNDA3Yy4yNzIuMTkzLjU5Ny4zMzYuOTUyLjQyYTIgMiAwIDAgMSAxLjIwOC0uOTZxLS4yMTUuMDQ1LS40NTcuMDQ2Yy0uNDYxIDAtLjg1OC0uMTMzLTEuMTI2LS4zMjJDMi4xMDUgNi42MDggMiA2LjM5IDIgNi4yMDdWNmgxLjU1YTIuNSAyLjUgMCAwIDEgMC0xbTQuOSAxSDEwdi4yMDdjMCAuMTg0LS4xMDUuNC0uMzc0LjU5Yy0uMjY4LjE5LS42NjUuMzIzLTEuMTI2LjMyM3EtLjI0MiAwLS40NTctLjA0NWMuNTIuMTQ2Ljk1My40OTYgMS4yMDguOTU5Yy4zNTUtLjA4NC42OC0uMjI3Ljk1Mi0uNDJjLjQ1NC0uMzIuNzk3LS44MTEuNzk3LTEuNDA3VjZhMSAxIDAgMCAwLTEtMUg4LjQ1YTIuNSAyLjUgMCAwIDEgMCAxIi8+PC9zdmc+",
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBzdHJva2U9IiNiZjIwMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMSAxMmMwIDQuNzE0IDAgNy4wNzEtMS4zMTggOC41MzVDMTguMzY0IDIyIDE2LjI0MiAyMiAxMiAyMmMtNC4yNDMgMC02LjM2NCAwLTcuNjgyLTEuNDY1QzMgMTkuMDcyIDMgMTYuNzE0IDMgMTJzMC03LjA3MSAxLjMxOC04LjUzNkM1LjYzNiAyIDcuNzU4IDIgMTIgMmM0LjI0MyAwIDYuMzY0IDAgNy42ODIgMS40NjRjLjg3Ni45NzQgMS4xNyAyLjM0MyAxLjI2OCA0LjUzNiIvPjxwYXRoIHN0cm9rZT0iI2JmMjAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDhjMC0uNDY1IDAtLjY5Ny4wNTEtLjg4OGExLjUgMS41IDAgMCAxIDEuMDYtMS4wNkM4LjMwNCA2IDguNTM2IDYgOSA2aDZjLjQ2NSAwIC42OTcgMCAuODg4LjA1MWExLjUgMS41IDAgMCAxIDEuMDYgMS4wNkMxNyA3LjMwNCAxNyA3LjUzNiAxNyA4czAgLjY5Ny0uMDUxLjg4OGExLjUgMS41IDAgMCAxLTEuMDYgMS4wNkMxNS42OTcgMTAgMTUuNDY0IDEwIDE1IDEwSDljLS40NjUgMC0uNjk3IDAtLjg4OC0uMDUxYTEuNSAxLjUgMCAwIDEtMS4wNi0xLjA2QzcgOC42OTYgNyA4LjQ2NCA3IDhaIi8+PGNpcmNsZSBjeD0iOCIgY3k9IjEzIiByPSIxIiBmaWxsPSIjYmYyMDI0Ii8+PGNpcmNsZSBjeD0iOCIgY3k9IjE3IiByPSIxIiBmaWxsPSIjYmYyMDI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMyIgcj0iMSIgZmlsbD0iI2JmMjAyNCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjEiIGZpbGw9IiNiZjIwMjQiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjEzIiByPSIxIiBmaWxsPSIjYmYyMDI0Ii8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNyIgcj0iMSIgZmlsbD0iI2JmMjAyNCIvPjwvZz48L3N2Zz4=",
        title: "Revenue Calculation",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9IiNiZjIwMjQiPjxwYXRoIGQ9Ik0yMTYgNDh2NTUuNzdDMjE2IDE3NC42IDE3Ni42IDIzMiAxMjggMjMycy04OC01Ny40LTg4LTEyOC4yMVY0OGE4IDggMCAwIDEgMTAuODktNy40N0M2NiA0Ni40MSA5NS4xMSA1NS43MSAxMjggNTUuNzFzNjItOS4zIDc3LjExLTE1LjE2QTggOCAwIDAgMSAyMTYgNDgiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTcgMzQuOGExNS45NCAxNS45NCAwIDAgMC0xNC44Mi0xLjcxYy0xNC4wMyA1LjQ2LTQyLjM2IDE0LjYyLTc0LjE4IDE0LjYycy02MC4xNi05LjE2LTc0LjIxLTE0LjYyQTE2IDE2IDAgMCAwIDMyIDQ4djU1Ljc3YzAgMzUuODQgOS42NSA2OS42NSAyNy4xOCA5NS4xOGMxOC4xNiAyNi40NiA0Mi42IDQxIDY4LjgyIDQxczUwLjY2LTE0LjU3IDY4LjgyLTQxYzE3LjUzLTI1LjUxIDI3LjE4LTU5LjMyIDI3LjE4LTk1LjE2VjQ4YTE2IDE2IDAgMCAwLTctMTMuMm0tOSA2OWMwIDMyLjY0LTguNjYgNjMuMjMtMjQuMzcgODYuMTNDMTY4LjU0IDIxMS45IDE0OC43OSAyMjQgMTI4IDIyNHMtNDAuNTQtMTIuMS01NS42My0zNC4wOEM1Ni42NiAxNjcgNDggMTM2LjQzIDQ4IDEwMy43OVY0OGMxNS4xMSA1Ljg3IDQ1LjU4IDE1LjcxIDgwIDE1LjcxczY0LjktOS44NCA4MC0xNS43MXY1NS44MVptLTE4IDE4Ljg3YTggOCAwIDEgMS0xMiAxMC42NmMtMi42OC0zLTguODUtNS4zMy0xNC01LjMzcy0xMS4zNiAyLjM0LTE0IDUuMzNhOCA4IDAgMSAxLTEyLTEwLjY3YzUuNzEtNi4zOCAxNi4xNC0xMC42NiAyNi0xMC42NnMyMC4yNSA0LjI4IDI2IDEwLjY2Wk05MiAxMjhjLTUuMTkgMC0xMS4zNiAyLjM0LTE0IDUuMzNhOCA4IDAgMSAxLTEyLTEwLjY3QzcxLjc1IDExNi4yOCA4Mi4xOCAxMTIgOTIgMTEyczIwLjI1IDQuMjggMjYgMTAuNjZhOCA4IDAgMSAxLTEyIDEwLjY3Yy0yLjY0LTIuOTktOC44MS01LjMzLTE0LTUuMzNtNzYuNDUgNDUuMTlhNTIuOSA1Mi45IDAgMCAxLTgwLjkgMGE4IDggMCAxIDEgMTIuMTctMTAuMzlhMzYuODkgMzYuODkgMCAwIDAgNTYuNTYgMGE4IDggMCAwIDEgMTIuMTcgMTAuMzkiLz48L2c+PC9zdmc+",
        title: "Client Satisfcation",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMTcuMjUgMTkuNUg2Ljc1YS4yNS4yNSAwIDAgMS0uMjUtLjI1di0uNkEzLjI0IDMuMjQgMCAwIDEgNy45MiAxNkwxMCAxNC41MkEzLjIyIDMuMjIgMCAwIDAgMTEuNDQgMTJoMS4xMkEzLjIyIDMuMjIgMCAwIDAgMTQgMTQuNTJMMTYuMDggMTZhMy4yNCAzLjI0IDAgMCAxIDEuNDIgMi42NXYuNmEuMjUuMjUgMCAwIDEtLjI1LjI1TTYuNzUgMkEyLjc1IDIuNzUgMCAwIDAgNCA0Ljc1di40MmE1Ljc1IDUuNzUgMCAwIDAgMi43OTIgNC45M2wxLjgxIDEuMDg2YS43NS43NSAwIDAgMSAuMDM2IDEuMjYzbC0yLjEyMSAxLjQ0M0E1Ljc1IDUuNzUgMCAwIDAgNCAxOC42NDd2LjYwM0EyLjc1IDIuNzUgMCAwIDAgNi43NSAyMmgxMC41QTIuNzUgMi43NSAwIDAgMCAyMCAxOS4yNXYtLjYwNGE1Ljc1IDUuNzUgMCAwIDAtMi41MTctNC43NTRsLTIuMTIxLTEuNDQzYS43NS43NSAwIDAgMSAuMDM2LTEuMjYzbDEuODEtMS4wODZBNS43NSA1Ljc1IDAgMCAwIDIwIDUuMTd2LS40MkEyLjc1IDIuNzUgMCAwIDAgMTcuMjUgMnpNNS41IDQuNzVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoMTAuNWMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXYuNDJhNC4yNSA0LjI1IDAgMCAxLTIuMDYzIDMuNjQzTDE0LjYyNyA5LjljLTEuNDEuODQ1LTEuNDY3IDIuODY2LS4xMDggMy43OWwyLjEyIDEuNDQyYTQuMjUgNC4yNSAwIDAgMSAxLjg2MSAzLjUxNXYuNjAzYzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNUg2Ljc1Yy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjV2LS42MDRhNC4yNSA0LjI1IDAgMCAxIDEuODYtMy41MTRsMi4xMjEtMS40NDJjMS4zNTktLjkyNCAxLjMwMi0yLjk0NS0uMTA3LTMuNzlsLTEuODEtMS4wODdBNC4yNSA0LjI1IDAgMCAxIDUuNSA1LjE3eiIvPjwvc3ZnPg==",
        title: "Time Estimation",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMTcgNGExIDEgMCAxIDEgMC0yaDRhMSAxIDAgMCAxIDEgMXY0YTEgMSAwIDEgMS0yIDBWNS40MTRsLTUuNzkzIDUuNzkzYTEgMSAwIDAgMS0xLjQxNCAwTDEwIDguNDE0bC01LjI5MyA1LjI5M2ExIDEgMCAwIDEtMS40MTQtMS40MTRsNi02YTEgMSAwIDAgMSAxLjQxNCAwTDEzLjUgOS4wODZMMTguNTg2IDR6TTUgMTh2M2ExIDEgMCAxIDEtMiAwdi0zYTEgMSAwIDEgMSAyIDBtNS00YTEgMSAwIDEgMC0yIDB2N2ExIDEgMCAxIDAgMiAwem00IDFhMSAxIDAgMCAxIDEgMXY1YTEgMSAwIDEgMS0yIDB2LTVhMSAxIDAgMCAxIDEtMW02LTRhMSAxIDAgMSAwLTIgMHYxMGExIDEgMCAxIDAgMiAweiIvPjwvc3ZnPg==",
        title: "Enhanced Productivity",
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
          "https://m.media-amazon.com/images/I/71C6ooUXhwL._AC_SL1500_.jpg",
        productName: "",
        brand: "Brand 1",
        category: "Label",
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

export default OnService;
