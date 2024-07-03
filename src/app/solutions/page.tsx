import React from "react";
import { getData } from "../lib/getData";
import About from "../about/page1";
import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";
import Image from "next/image";
import { formatName } from "@/utils/FormatName";
import { link } from "fs";

const Solutions = async () => {
  const data = await getData("solution-app/solution?limit=0&offset=0");
  const solutions = data?.results;
  const data1 = await getData("product-app/product?limit=0&offset=0");
  const products = data1?.results;
  const brandData = await getData("product-app/brand");
  const brands = brandData?.results;
  const newSolutions = [
    {
      id: 1,
      name: "Trackline",
      link: "/solutions/trackline",
      image: "https://i.imgur.com/C61WPEz.jpeg",
      description: "",
    },
    {
      id: 2,
      name: "Cubix",
      link: "/solutions/cubix",
      image: "https://i.imgur.com/0sgmtem.jpeg",
    },
    {
      id: 3,
      name: "On Service",
      link: "/solutions/onservice",
      image: "https://i.imgur.com/23ryrSg.jpeg",
    },
    {
      id: 4,
      name: "Activ",
      link: "/solutions/activ",
      image: "https://i.imgur.com/2MXoeZe.jpeg",
    },
  ];
  return (
    <>
      <AboutHero title="solutions" />{" "}
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {newSolutions?.map((solution: any) => {
                  return (
                    <div key={solution?.id} className="col-md-6 col-12">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb">
                          <Link href={solution?.link}>
                            <Image
                              src={solution.image}
                              width={370}
                              height={250}
                              alt="solution-img"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <h3 className="blog-title">
                            <Link href={solution?.link}>{solution?.name}</Link>
                          </h3>
                          <p>
                            Ideas es to obtain pain of itself, because it is
                            pain, but because occasionally ocean the Internet
                            tend to be chunks as necessary with some of
                            themoment.
                          </p>
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
    </>
  );
};

export default Solutions;
