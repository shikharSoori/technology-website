import { getData } from "@/app/lib/getData";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName } from "@/utils/FormatName";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  params: {
    servicesDetail: string;
  };
}
export async function generateStaticParams() {
  const data = await getData("solution-app/solution");
  const solutions = data?.results;
  const params = solutions.map((services: any) => ({
    servicesDetail: formatName(services.name), // Assuming 'name' is the property you want to use as 'company'
  }));

  return params;
}
const ServicesDetail = async ({ params }: props) => {
  const reFormatName = (name: any) => {
    return name
      .replace(/\_/g, " ") // Replace all spaces with underscores
      .replace(/\-/g, "/"); // Replace all slashes with dashes
  };
  const serviceData = await getData("solution-app/solution?limit=0&offset=0");
  const services = serviceData?.results;
  const serviceName = reFormatName(params.servicesDetail);

  const matchedServie = services?.find(
    (service: any) => service.name === serviceName
  );

  return (
    <div>
      <AboutHero title={serviceName} />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45">
              <div className="blog-item mt-40">
                <div className="blog-thumb">
                  <Link href={"#"}>
                    <Image
                      src={matchedServie.image}
                      width={870}
                      // fill={true}
                      // layout="responsive"
                      height={500}
                      alt="blog-img"
                      // objectFit="contain"
                      // object-fit: "cover"
                    />
                  </Link>
                </div>
                <div className="blog-content blog-details">
                  <h3 className="blog-title">{matchedServie.name}</h3>
                  <div className="blog-meta">
                    <Link href="#">{serviceData.createdDateBs}</Link>
                  </div>
                  <p> {matchedServie.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
