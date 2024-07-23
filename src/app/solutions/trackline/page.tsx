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
        image:
          "https://images.stockcake.com/public/3/4/7/34712036-ccd3-4c10-b11d-e45b794e3f3a_large/teamwork-high-five-stockcake.jpg",
        description:
          "Manage workforce anywhere, anytime for maximum flexibility and productivity.",
      },
      {
        id: 2,
        image:
          "https://images.stockcake.com/public/d/7/b/d7be9cab-c14f-47ab-a86d-da7e38919ff8_large/warehouse-workforce-activity-stockcake.jpg",
        title: "Procurement Integration",
        description:
          "Seamlessly integrates corporate functions, streamlining workflow and increasing efficiency.",
      },

      {
        id: 3,
        image:
          "https://images.stockcake.com/public/0/6/e/06e9204a-ebd2-42dd-9327-9ae3705302cd_large/precision-engineering-work-stockcake.jpg",
        title: "Service Agreement Management",
        description:
          " Effortlessly track performance and gain insights with intuitive tools.",
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
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNiZjIwMjQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNMiAxNGMwLTMuNzcxIDAtNS42NTcgMS4xNzItNi44MjhDNC4zNDMgNiA2LjIyOSA2IDEwIDZoNGMzLjc3MSAwIDUuNjU3IDAgNi44MjggMS4xNzJDMjIgOC4zNDMgMjIgMTAuMjI5IDIyIDE0YzAgMy43NzEgMCA1LjY1Ny0xLjE3MiA2LjgyOEMxOS42NTcgMjIgMTcuNzcxIDIyIDE0IDIyaC00Yy0zLjc3MSAwLTUuNjU3IDAtNi44MjgtMS4xNzJDMiAxOS42NTcgMiAxNy43NzEgMiAxNFoiLz48cGF0aCBkPSJNMTYgNmMwLTEuODg2IDAtMi44MjgtLjU4Ni0zLjQxNEMxNC44MjggMiAxMy44ODYgMiAxMiAyYy0xLjg4NiAwLTIuODI4IDAtMy40MTQuNTg2QzggMy4xNzIgOCA0LjExNCA4IDYiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMCAxNUg2Yy0uNDcxIDAtLjcwNyAwLS44NTQuMTQ2QzUgMTUuMjkzIDUgMTUuNTMgNSAxNnYxYzAgLjQ3MSAwIC43MDcuMTQ2Ljg1NEM1LjI5MyAxOCA1LjUzIDE4IDYgMThoNGMuNDcxIDAgLjcwNyAwIC44NTQtLjE0NkMxMSAxNy43MDcgMTEgMTcuNDcgMTEgMTd2LTFjMC0uNDcxIDAtLjcwNy0uMTQ2LS44NTRDMTAuNzA3IDE1IDEwLjQ3IDE1IDEwIDE1WiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTYgNi41VjE1bTAgNi41di0zbTEyLTEydjE1IiBvcGFjaXR5PSIwLjUiLz48L2c+PC9zdmc+",
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDEyIDEyIj48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJNMy41IDJhLjUuNSAwIDEgMCAwIDFhLjUuNSAwIDAgMCAwLTFNMiAyLjVhMS41IDEuNSAwIDEgMSAzIDBhMS41IDEuNSAwIDAgMS0zIDBNMy41IDlhMSAxIDAgMCAxIDEtMWgzYTEgMSAwIDAgMSAxIDF2LjE2N2MwIC41ODctLjM1NyAxLjA1OC0uODA4IDEuMzU4QzcuMjM3IDEwLjgzIDYuNjM3IDExIDYgMTFzLTEuMjM3LS4xNzEtMS42OTItLjQ3NWMtLjQ1LS4zLS44MDgtLjc3MS0uODA4LTEuMzU4em0xIDB2LjE2N2MwIC4xNDkuMDkuMzQ1LjM2My41MjZjLjI3LjE4LjY3LjMwNyAxLjEzNy4zMDdzLjg2OC0uMTI3IDEuMTM3LS4zMDdjLjI3Mi0uMTgxLjM2My0uMzc3LjM2My0uNTI2Vjl6TTggMi41YS41LjUgMCAxIDEgMSAwYS41LjUgMCAwIDEtMSAwTTguNSAxYTEuNSAxLjUgMCAxIDAgMCAzYTEuNSAxLjUgMCAwIDAgMC0zTTYgNWEuNS41IDAgMSAwIDAgMWEuNS41IDAgMCAwIDAtMW0tMS41LjVhMS41IDEuNSAwIDEgMSAzIDBhMS41IDEuNSAwIDAgMS0zIDBNMy41NSA1SDJhMSAxIDAgMCAwLTEgMXYuMjA3YzAgLjU5Ni4zNDMgMS4wODYuNzk3IDEuNDA3Yy4yNzIuMTkzLjU5Ny4zMzYuOTUyLjQyYTIgMiAwIDAgMSAxLjIwOC0uOTZxLS4yMTUuMDQ1LS40NTcuMDQ2Yy0uNDYxIDAtLjg1OC0uMTMzLTEuMTI2LS4zMjJDMi4xMDUgNi42MDggMiA2LjM5IDIgNi4yMDdWNmgxLjU1YTIuNSAyLjUgMCAwIDEgMC0xbTQuOSAxSDEwdi4yMDdjMCAuMTg0LS4xMDUuNC0uMzc0LjU5Yy0uMjY4LjE5LS42NjUuMzIzLTEuMTI2LjMyM3EtLjI0MiAwLS40NTctLjA0NWMuNTIuMTQ2Ljk1My40OTYgMS4yMDguOTU5Yy4zNTUtLjA4NC42OC0uMjI3Ljk1Mi0uNDJjLjQ1NC0uMzIuNzk3LS44MTEuNzk3LTEuNDA3VjZhMSAxIDAgMCAwLTEtMUg4LjQ1YTIuNSAyLjUgMCAwIDEgMCAxIi8+PC9zdmc+",
        title: "Improved Efficency",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiNiZjIwMjQiIGQ9Ik0yMzIuNzYgMTM3Ljg4YTI4LjM5IDI4LjM5IDAgMCAwLTI0LjYzLTQuODhMMTcyIDE0MS4yNlYxNDBhMzIgMzIgMCAwIDAtMzItMzJIODkuOTRhMzUuNzYgMzUuNzYgMCAwIDAtMjUuNDUgMTAuNTRMNDMgMTQwSDIwYTIwIDIwIDAgMCAwLTIwIDIwdjQwYTIwIDIwIDAgMCAwIDIwIDIwaDEwMGExMiAxMiAwIDAgMCAyLjkxLS4zNmw2NC0xNmExMS40IDExLjQgMCAwIDAgMS43OS0uNmwzOC44Mi0xNi41NGMuMjMtLjA5LjQ1LS4xOS42Ny0uM2EyOC42MSAyOC42MSAwIDAgMCA0LjU3LTQ4LjMyTTM2IDE5NkgyNHYtMzJoMTJabTE4MS42OC0zMS4zOWwtMzcuNTEgMTZMMTE4LjUyIDE5Nkg2MHYtMzlsMjEuNDYtMjEuNDZhMTEuOTMgMTEuOTMgMCAwIDEgOC40OC0zLjU0SDE0MGE4IDggMCAwIDEgMCAxNmgtMjhhMTIgMTIgMCAwIDAgMCAyNGgzMmExMi4yIDEyLjIgMCAwIDAgMi42OS0uM2w2Ny0xNS40MWwuNDctLjEyYTQuNjEgNC42MSAwIDAgMSA1LjgyIDQuNDRhNC41OCA0LjU4IDAgMCAxLTIuMyA0TTE2NCAxMDBhNDAgNDAgMCAwIDAgNS4xOC0uMzRhNDAgNDAgMCAxIDAgMjkuNjctNTkuMzJBNDAgNDAgMCAxIDAgMTY0IDEwMG00MC0zNmExNiAxNiAwIDEgMS0xNiAxNmExNiAxNiAwIDAgMSAxNi0xNm0tNDAtMjBhMTYgMTYgMCAwIDEgMTIuOTQgNi41OEEzOS45IDM5LjkgMCAwIDAgMTY0LjIgNzZoLS4yYTE2IDE2IDAgMCAxIDAtMzIiLz48L3N2Zz4=",
        title: "Cost Optimization",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNiZjIwMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xNC4xMDYgMTAuMzMzbC44MDItNC42NjVjLjEzMy0uNzczLS4zNy0xLjUxLTEuMTI1LTEuNjQ2Yy0uNzU0LS4xMzYtMS40NzMuMzgtMS42MDYgMS4xNTNsLTEuNjA2IDkuMzNsLS4xMzMuNzIybC0xLjc5Ny0xLjkwOGExLjUxMiAxLjUxMiAwIDAgMC0yLjMwMi4xMzJhMS42NSAxLjY1IDAgMCAwLS4wMyAxLjk2NGwyLjc1NiAzLjgwNmMuNjI1Ljg2NC45MzggMS4yOTYgMS4zMTQgMS42MzJhNC41IDQuNSAwIDAgMCAyLjAwMSAxLjAzN2MuNDg1LjExIDEuMDA2LjExIDIuMDQ4LjExaDEuODE4YTUgNSAwIDAgMCA0LjkwNy00LjA0bC43NDUtMy44MTRsLjA4LS40NjdjLjEzNC0uNzczLS4zNy0xLjUxLTEuMTI0LTEuNjQ2cy0xLjQ3NC4zOC0xLjYwNyAxLjE1M2wtLjA4LjQ2Nm0tNS4wNjItMy4zMmwtLjI0IDEuNG0uMjQtMS40Yy4xMzMtLjc3Mi44NTMtMS4yODggMS42MDctMS4xNTJzMS4yNTguODc0IDEuMTI1IDEuNjQ2bC0uMTYuOTMzbTAgMGwtLjA4LjQ2N20uMDgtLjQ2N2MuMTMyLS43NzMuODUyLTEuMjg5IDEuNjA2LTEuMTUyYy43NTQuMTM2IDEuMjU4Ljg3MyAxLjEyNSAxLjY0NmwtLjA4LjQ2Nk02Ljk1NiAyLjQ5cy0uMjUyIDIuMjc0IDAgMi41MjJtMCAwYy4zMjYuMzIxIDIuNjAyLjA1IDIuNjAyLjA1bS0yLjYwMi0uMDVMMTAgMk01LjA0NCA5LjUxcy4yNTItMi4yNzQgMC0yLjUyMm0wIDBjLS4zMjYtLjMyMS0yLjYwMi0uMDUtMi42MDItLjA1bTIuNjAyLjA1TDIgMTAiIGNvbG9yPSIjYmYyMDI0Ii8+PC9zdmc+",
        title: "Minimized Downtime",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48ZGVmcz48bWFzayBpZD0iaXBUTGFwdG9wQ29tcHV0ZXIwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCI+PHJlY3Qgd2lkdGg9IjM4IiBoZWlnaHQ9IjI0IiB4PSI1IiB5PSI4IiBmaWxsPSIjNTU1IiByeD0iMiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQgNDBoNDBNMjIgMTRoNCIvPjwvZz48L21hc2s+PC9kZWZzPjxwYXRoIGZpbGw9IiNiZjIwMjQiIGQ9Ik0wIDBoNDh2NDhIMHoiIG1hc2s9InVybCgjaXBUTGFwdG9wQ29tcHV0ZXIwKSIvPjwvc3ZnPg==",
        title: "Data-driven Decision Making",
        description:
          "<span>  CUBIX</span> is a cloud-based warehouse management system that offers the flexibility for real-time access to warehouse operations from anywhere.",
      },
    ],
    products: [
      {
        id: 3,
        productName: "Industrial Printer",
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/zt400-series-left-front-3x2-3600.jpg",
        specs: [
          "Performance, versatility and reliablity",
          "Simple to setup, manage and secure with pirnt DNA software FRID capable",
        ],
        category: 3,
        brand: 1,
      },
      {
        id: 11,
        productName: "RFID Reader",
        image:
          "https://cdn11.bigcommerce.com/s-ka7ofex/images/stencil/1280x1280/products/2371/8017/Zebra_FX9600_Reader__00320.1704390636.jpg?c=2",
        specs: [
          "Faster, Smart and Future-Proof",
          "Fast RFID tag capture",
          "High Performance battery for full shift",
        ],
        category: 5,
        brand: 1,
        description: "",
      },
      {
        id: 12,
        productName: "RFID Tag",
        image:
          "https://www.expresscorp.com/wp-content/uploads/2023/03/standard-rfid.jpeg",
        specs: ["RFID tag"],
        category: 11,
        brand: 1,
        description: "",
      },
      {
        id: 13,
        productName: "AN480 - RFID Antenna",
        image:
          "https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web001/an4x-front-facing-3x2-3600.jpg",
        specs: ["AN480 - RFID Antenna"],
        category: 12,
        brand: 1,
        description: "",
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
                        {/* <iframe
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
                        ></iframe> */}
                        <iframe
                          src="https://www.youtube.com/embed/a3GzmYIVVjs?si=B1MKR831r0du4rrg&autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1"
                          title="YouTube video player"
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
                        <p className="text-justify mt-4">{data.description}</p>
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
                    return (
                      <div key={number} className="col-12  col-md-6 col-lg-3">
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Trackline;
