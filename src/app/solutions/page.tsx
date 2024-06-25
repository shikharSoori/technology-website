import React from "react";
import { getData } from "../lib/getData";
import About from "../about/page";
import AboutHero from "@/components/Hero/AboutHero";
import Link from "next/link";
import Image from "next/image";
import { formatName } from "@/utils/FormatName";

const Solutions = async () => {
  const data = await getData("solution-app/solution?limit=0&offset=0");
  const solutions = data?.results;
  console.log(solutions, "solutions");
  return (
    <>
      <AboutHero title="solutions" />{" "}
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {solutions?.map((solution: any) => {
                  return (
                    <div key={solution?.id} className="col-md-6">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb">
                          <Link
                            href={`/solutions/${solution?.name.toLowerCase()}`}
                          >
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
                            <Link
                              href={`/solutions/${solution?.name.toLowerCase()}`}
                            >
                              {solution?.name}
                            </Link>
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
