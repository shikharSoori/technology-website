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
        image:
          "https://images.stockcake.com/public/b/8/2/b82c73fa-8bf9-4b13-8d40-16f71515fa2d_large/innovative-technology-workspace-stockcake.jpg",
        description: "Automatically calculates wages, taxes, and deductions",
      },
      {
        id: 2,
        image:
          "https://images.stockcake.com/public/6/3/f/63fe081e-a797-43ff-84fe-d865bb89fa44_large/data-analysis-display-stockcake.jpg",
        title: "Tax Compliance",
        description:
          "Ensures compliance with local, state, and federal tax regulations",
      },
      {
        id: 3,
        image:
          "https://images.stockcake.com/public/2/b/7/2b7f90ce-a969-47f8-a04b-cbb9287eb03b_large/office-work-essentials-stockcake.jpg",
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
        title: "Compliance & Accuracy",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjYmYyMDI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yOTMgMGMuMzkgMCAuNzA3LjMxNy43MDcuNzA3VjJoMS4yOTNhLjcwNy43MDcgMCAwIDEgLjUgMS4yMDdsLTEuNDYgMS40NkExLjE0IDEuMTQgMCAwIDEgMTMuNTMgNWgtMS40N0w4LjUzIDguNTNhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNkwxMSAzLjk0VjIuNDdjMC0uMzAxLjEyLS41OS4zMzMtLjgwNGwxLjQ2LTEuNDZhLjcuNyAwIDAgMSAuNS0uMjA3TTIuNSA4YTUuNSA1LjUgMCAwIDEgNi41OTgtNS4zOWEuNzUuNzUgMCAwIDAgLjI5OC0xLjQ3QTcgNyAwIDEgMCAxNC44NiA2LjZhLjc1Ljc1IDAgMCAwLTEuNDcuMjk5cS4xMDkuNTMzLjExIDEuMTAxYTUuNSA1LjUgMCAxIDEtMTEgMG01LjM2NC0yLjQ5NmEuNzUuNzUgMCAwIDAtLjA4LTEuNDk4QTQgNCAwIDEgMCAxMS45ODggOC4zYS43NS43NSAwIDAgMC0xLjQ5Ni0uMTExYTIuNSAyLjUgMCAxIDEtMi42My0yLjY4NiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
        description:
          "Enables real-time visibility into inventory levels, locations and movements within the warehouse.",
      },
      {
        id: 2,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9IiNiZjIwMjQiPjxwYXRoIGQ9Im0yMjEuNjYgODUuNjZsLTEyMCAxMjBhOCA4IDAgMCAxLTExLjMyIDBMNTIuNjkgMTY4TDE4NCAzNi42OWwzNy42NiAzNy42NWE4IDggMCAwIDEgMCAxMS4zMiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0OCAxMzZhOCA4IDAgMCAwLTggOHYxNmgtNDQuNjlMMTc3IDE0MS42Nmw1MC4zNC01MC4zNWExNiAxNiAwIDAgMCAwLTIyLjYybC01Ni01NmExNiAxNiAwIDAgMC0yMi42MyAwTDIuOTIgMTU4Ljk0QTEwIDEwIDAgMCAwIDEwIDE3NmgzOS4zN2wzNS4zMiAzNS4zMWExNiAxNiAwIDAgMCAyMi42MiAwTDE2NS42NiAxNTNMMTg0IDE3MS4zMWExNS44NiAxNS44NiAwIDAgMCAxMS4zMSA0LjY5SDI0MHYxNmE4IDggMCAwIDAgMTYgMHYtNDhhOCA4IDAgMCAwLTgtOE0xNjAgMjRsMTIuNjkgMTIuNjlMNDkuMzcgMTYwSDI0LjQ2Wk05NiAyMDBsLTMyLTMyTDE4NCA0OGwzMiAzMloiLz48L2c+PC9zdmc+",
        title: "Data Security",
        description:
          "<span> Do you have lots of stores, warehouses? CUBIX</span> Provides mobility leverage both individuals and businesses can achieve greater efficiency, cost savings, imporved communication, and a better overall experience.",
      },
      {
        id: 3,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjYmYyMDI0IiBkPSJtMTUuMzkzIDQuMDU0bC0uNTAyLjU1N3ptMy45NTkgMy41NjNsLS41MDIuNTU3em0yLjMwMiAyLjUzN2wtLjY4NS4zMDV6TTMuMTcyIDIwLjgyOGwuNTMtLjUzem0xNy42NTYgMGwtLjUzLS41M3pNMTQgMjEuMjVoLTR2MS41aDR6TTIuNzUgMTR2LTRoLTEuNXY0em0xOC41LS40MzdWMTRoMS41di0uNDM3ek0xNC44OTEgNC42MWwzLjk1OSAzLjU2M2wxLjAwMy0xLjExNWwtMy45NTgtMy41NjN6bTcuODU5IDguOTUyYzAtMS42ODkuMDE1LTIuNzU4LS40MS0zLjcxNGwtMS4zNzEuNjFjLjI2Ni41OTguMjgxIDEuMjgzLjI4MSAzLjEwNHptLTMuOS01LjM4OWMxLjM1MyAxLjIxOCAxLjg1MyAxLjY4OCAyLjExOSAyLjI4NWwxLjM3LS42MWMtLjQyNi0uOTU3LTEuMjMtMS42Ni0yLjQ4Ni0yLjc5ek0xMC4wMyAyLjc1YzEuNTgyIDAgMi4xNzkuMDEyIDIuNzEuMjE2bC41MzgtMS40Yy0uODUyLS4zMjgtMS43OC0uMzE2LTMuMjQ4LS4zMTZ6bTUuODY1Ljc0NmMtMS4wODYtLjk3Ny0xLjc2NS0xLjYwNC0yLjYxNy0xLjkzbC0uNTM3IDEuNGMuNTMyLjIwNC45OC41OTIgMi4xNSAxLjY0NXpNMTAgMjEuMjVjLTEuOTA3IDAtMy4yNjEtLjAwMi00LjI5LS4xNGMtMS4wMDUtLjEzNS0xLjU4NS0uMzg5LTIuMDA4LS44MTJsLTEuMDYgMS4wNmMuNzQ4Ljc1IDEuNjk3IDEuMDgxIDIuODY5IDEuMjM5YzEuMTUuMTU1IDIuNjI1LjE1MyA0LjQ4OS4xNTN6TTEuMjUgMTRjMCAxLjg2NC0uMDAyIDMuMzM4LjE1MyA0LjQ4OWMuMTU4IDEuMTcyLjQ5IDIuMTIxIDEuMjM4IDIuODdsMS4wNi0xLjA2Yy0uNDIyLS40MjQtLjY3Ni0xLjAwNC0uODExLTIuMDFjLS4xMzgtMS4wMjctLjE0LTIuMzgyLS4xNC00LjI4OXpNMTQgMjIuNzVjMS44NjQgMCAzLjMzOC4wMDIgNC40ODktLjE1M2MxLjE3Mi0uMTU4IDIuMTIxLS40OSAyLjg3LTEuMjM4bC0xLjA2LTEuMDZjLS40MjQuNDIyLTEuMDA0LjY3Ni0yLjAxLjgxMWMtMS4wMjcuMTM4LTIuMzgyLjE0LTQuMjg5LjE0ek0yMS4yNSAxNGMwIDEuOTA3LS4wMDIgMy4yNjItLjE0IDQuMjljLS4xMzUgMS4wMDUtLjM4OSAxLjU4NS0uODEyIDIuMDA4bDEuMDYgMS4wNmMuNzUtLjc0OCAxLjA4MS0xLjY5NyAxLjIzOS0yLjg2OWMuMTU1LTEuMTUuMTUzLTIuNjI1LjE1My00LjQ4OXptLTE4LjUtNGMwLTEuOTA3LjAwMi0zLjI2MS4xNC00LjI5Yy4xMzUtMS4wMDUuMzg5LTEuNTg1LjgxMi0yLjAwOGwtMS4wNi0xLjA2Yy0uNzUuNzQ4LTEuMDgxIDEuNjk3LTEuMjM5IDIuODY5QzEuMjQ4IDYuNjYxIDEuMjUgOC4xMzYgMS4yNSAxMHptNy4yOC04Ljc1Yy0xLjg3NSAwLTMuMzU2LS4wMDItNC41MTEuMTUzYy0xLjE3Ny4xNTgtMi4xMjkuNDktMi44NzggMS4yMzhsMS4wNiAxLjA2Yy40MjQtLjQyMiAxLjAwNS0uNjc2IDIuMDE3LS44MTFjMS4wMzMtLjEzOCAyLjM5NS0uMTQgNC4zMTItLjE0eiIvPjxwYXRoIHN0cm9rZT0iI2JmMjAyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTYgMTQuNWg4TTYgMThoNS41IiBvcGFjaXR5PSIwLjUiLz48cGF0aCBzdHJva2U9IiNiZjIwMjQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTMgMi41VjVjMCAyLjM1NyAwIDMuNTM2LjczMiA0LjI2OEMxNC40NjQgMTAgMTUuNjQzIDEwIDE4IDEwaDQiIG9wYWNpdHk9IjAuNSIvPjwvZz48L3N2Zz4=",
        title: "Enhanced Record Keeping",
        description:
          " By implementing <span>CUBIX</span>, warehouses and distribution centers can achieve substantial improvements in operational efficiency, leading to cost savings, better resource utilization, and enhanced customer satisfaction.",
      },
      {
        id: 4,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNiZjIwMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02IDUuNWMwLS45MzUgMC0xLjQwMi4yMDEtMS43NWExLjUgMS41IDAgMCAxIC41NDktLjU0OUM3LjA5OCAzIDcuNTY1IDMgOC41IDNoM2MuOTM1IDAgMS40MDIgMCAxLjc1LjIwMWExLjUgMS41IDAgMCAxIC41NDkuNTQ5QzE0IDQuMDk4IDE0IDQuNTY1IDE0IDUuNXMwIDEuNDAyLS4yMDEgMS43NWExLjUgMS41IDAgMCAxLS41NDkuNTQ5QzEyLjkwMiA4IDEyLjQzNSA4IDExLjUgOGgtM2MtLjkzNSAwLTEuNDAyIDAtMS43NS0uMjAxYTEuNSAxLjUgMCAwIDEtLjU0OS0uNTQ5QzYgNi45MDIgNiA2LjQzNSA2IDUuNW0wIDEwYzAtLjkzNSAwLTEuNDAyLjIwMS0xLjc1YTEuNSAxLjUgMCAwIDEgLjU0OS0uNTQ5QzcuMDk4IDEzIDcuNTY1IDEzIDguNSAxM2gzYy45MzUgMCAxLjQwMiAwIDEuNzUuMjAxYTEuNSAxLjUgMCAwIDEgLjU0OS41NDljLjIwMS4zNDguMjAxLjgxNS4yMDEgMS43NXMwIDEuNDAyLS4yMDEgMS43NWExLjUgMS41IDAgMCAxLS41NDkuNTQ5Yy0uMzQ4LjIwMS0uODE1LjIwMS0xLjc1LjIwMWgtM2MtLjkzNSAwLTEuNDAyIDAtMS43NS0uMjAxYTEuNSAxLjUgMCAwIDEtLjU0OS0uNTQ5QzYgMTYuOTAyIDYgMTYuNDM1IDYgMTUuNW0xNC44NCAxLjY0Yy43NzMtLjc3MyAxLjE2LTEuMTYgMS4xNi0xLjY0cy0uMzg3LS44NjctMS4xNi0xLjY0bC0uMi0uMmMtLjc3My0uNzczLTEuMTYtMS4xNi0xLjY0LTEuMTZzLS44NjcuMzg3LTEuNjQgMS4xNmwtLjIuMmMtLjc3My43NzMtMS4xNiAxLjE2LTEuMTYgMS42NHMuMzg3Ljg2NyAxLjE2IDEuNjRsLjIuMmMuNzczLjc3MyAxLjE2IDEuMTYgMS42NCAxLjE2cy44NjctLjM4NyAxLjY0LTEuMTZ6TTYuMDA2IDUuNUgyLjAwOG0wIDBWMm0wIDMuNVYxMmMwIDEuMTA0LS4xNTIgMi40NjguODg4IDMuMTYzYy41MDQuMzM3IDEuMjA2LjMzNyAyLjYxLjMzN204LjQ5NiAwaDJtMi45OTgtM3YtM2MwLTEuODg2IDAtMi44MjgtLjU4NS0zLjQxNGMtLjU4Ni0uNTg2LTEuNTI4LS41ODYtMy40MTMtLjU4NmgtMU0yMiAyMmMtLjkzMiAwLTEuMzk4IDAtMS43NjUtLjEzYy0uNDktLjE3NS0uODgtLjUwOC0xLjA4My0uOTI4QzE5IDIwLjYyNyAxOSAyMC4yMjcgMTkgMTkuNDI5VjE5IiBjb2xvcj0iI2JmMjAyNCIvPjwvc3ZnPg==",
        title: "Streamlined Processes",
        description:
          "Generates insightful reports and analytics on key performance indicators (KPIs).",
      },
      {
        id: 5,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSIjYmYyMDI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE3IDE3YTUgNSAwIDEgMCAwLTEwYTUgNSAwIDAgMCAwIDEwbS43NS03YS43NS43NSAwIDAgMC0xLjUgMHYxLjg0NmMwIC4xOC4wNjUuMzU1LjE4My40OTFsMSAxLjE1NGEuNzUuNzUgMCAwIDAgMS4xMzQtLjk4MmwtLjgxNy0uOTQzeiIvPjxwYXRoIGQ9Ik0xLjI1IDdBLjc1Ljc1IDAgMCAxIDIgNi4yNWg4YS43NS43NSAwIDAgMSAwIDEuNUgyQS43NS43NSAwIDAgMSAxLjI1IDdtMCA1YS43NS43NSAwIDAgMSAuNzUtLjc1aDZhLjc1Ljc1IDAgMCAxIDAgMS41SDJhLjc1Ljc1IDAgMCAxLS43NS0uNzVtMCA1YS43NS43NSAwIDAgMSAuNzUtLjc1aDhhLjc1Ljc1IDAgMCAxIDAgMS41SDJhLjc1Ljc1IDAgMCAxLS43NS0uNzUiIG9wYWNpdHk9IjAuNSIvPjwvZz48L3N2Zz4=",
        title: "Enhanced Efficiency",
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

export default Activ;
