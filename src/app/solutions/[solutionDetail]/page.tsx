import About from "@/app/about/page";
import { getData } from "@/app/lib/getData";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName, reFormatName } from "@/utils/FormatName";
import Image from "next/image";
import React from "react";
import download1 from "@/assets/wrriterwarehouse.jpg";
import download2 from "@/assets/laptopwarehouse.jpg";
import "./solutionDetail.css";
import icon1 from "@/assets/icon-1.png";
import icon2 from "@/assets/icon-2.png";
import icon3 from "@/assets/icon-3.png";
import icon4 from "@/assets/icon-4.png";
import Link from "next/link";
export async function generateStaticParams() {
  const data = await getData("solution-app/solution?limit=0");
  const solutionData = data?.results;
  const params = solutionData?.map((solution: any) => {
    return {
      solutionDetail: formatName(solution?.name).toLowerCase(),
    };
  });
  

  return params;
}
const Page = async ({ params }: any) => {
  const solutionName = reFormatName(params.solutionDetail);
  const solutions = await getData("solution-app/solution?limit=0&offset=0");
  const solutionData = solutions?.results;
  const matchedSolution = solutionData?.find(
    (solution: any) => solution.name.toLowerCase() === solutionName
  );
  const data = await getData("product-app/product?limit=0&offset=0");
  const products = data?.results;
  const brandData = await getData("product-app/brand");
  const brands = brandData?.results;
  return (
    <div>
      <AboutHero title={"solutions"} subTitle={solutionName} />
      <section className="blog-area ">
        <div className="container">
          <div className="row mt-40">
            <div className="col-lg-12 order-1 order-lg-2 ">
              <div className="blog-item mt-40">
                <div className="blog-content blog-details">
                  <div className="row mt-4">
                    <div className="col-5">
                      <Image
                        src={matchedSolution.logo}
                        width={370}
                        height={250}
                        alt="blog-img"
                      />
                    </div>
                    <div className="col-7">
                      <Image
                        src={matchedSolution.logo}
                        width={100}
                        height={50}
                        alt="blog-img"
                      />
                      <p>
                        {matchedSolution.description} Bigger ipsum dolor sit
                        amet consectetur adipisicing elit. Voluptate perferendis
                        consequuntur illo aliquid nihil ad neque, debitis
                        praesentium libero ullam asperiores exercitationem
                        deserunt inventore facilis, officiis, aliquam maiores
                        asperiores recusandae commodi blanditiis ipsum tempora
                        culpa possimus assumenda ab quidem a voluptatum quia
                        natus? Ex neque, saepe reiciendis quasi velit
                        perspiciatis error vel quas quibusdam autem nesciunt
                        voluptas odit quis dignissimos eos aspernatur voluptatum
                        est repellat. Pariatur praesentium, corrupti deserunt
                        ducimus quo doloremque nostrum aspernatur saepe
                        cupiditate sit autem exercitationem debitis, maiores
                        vitae perferendis nemo? Voluptas illo, animi temporibus
                        quod earum molestias eaque, iure rem amet autem
                        dignissimos officia dolores numquam distinctio esse
                        voluptates optio pariatur aspernatur omnis? Ipsam qui
                        commodi velit natus reiciendis quod quibusdam nemo
                        eveniet similique animi!
                      </p>
                    </div>
                  </div>
                  <div className="section-padding">
                    <h3 className="blog-title pb-4">Features</h3>
                    <div className="row m-0 mt-4">
                      <div className="col-6 order-1 p-0">
                        <Image
                          className="w-100"
                          src={download1}
                          width={370}
                          height={250}
                          alt="blog-img"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div
                        className="col-6 d-flex flex-column justify-content-center align-items-start order-2"
                        style={{ padding: "50px" }}
                      >
                        <h4
                          className="blog-sub-title pb-2"
                          style={{ color: "#bf202f" }}
                        >
                          Features
                        </h4>
                        {matchedSolution.description} Bigger ipsum dolor sit
                        amet consectetur adipisicing elit. Voluptate perferendis
                        consequuntur illo aliquid nihil ad neque, debitis
                        praesentium libero ullam asperiores exercitationem
                        deserunt inventore facilis, officiis, aliquam maiores
                      </div>
                      <div className="col-6 order-2 p-0">
                        <Image
                          className="w-100"
                          src={download2}
                          width={370}
                          height={250}
                          alt="blog-img"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div
                        className="col-6 d-flex flex-column justify-content-center align-items-start order-1"
                        style={{ padding: "50px" }}
                      >
                        <h4
                          className="blog-sub-title pb-2"
                          style={{ color: "#bf202f" }}
                        >
                          Features
                        </h4>
                        {matchedSolution.description} Bigger ipsum dolor sit
                        amet consectetur adipisicing elit. Voluptate perferendis
                        consequuntur illo aliquid nihil ad neque, debitis
                        praesentium libero ullam asperiores exercitationem
                        deserunt inventore facilis, officiis, aliquam maiores
                      </div>
                    </div>{" "}
                  </div>

                  <div className="section-padding">
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
                  </div>
                  <div className="section-padding">
                    <h3 className="blog-title pb-4">Advantages</h3>
                    <div className="">
                      <div className="container">
                        <div className="row mt-30 d-flex justify-content-center">
                          <div className="col-lg-4 col-md-6">
                            <div className="service-policy-item mt-30">
                              <div className="service-policy-icon d-flex justify-content-center">
                                <Image
                                  src={icon2}
                                  alt="icon"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <h3 className="service-policy-title text-center">
                                Low Cost
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="service-policy-item mt-30">
                              <div className="service-policy-icon d-flex justify-content-center">
                                <Image
                                  src={icon3}
                                  alt="icon"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <h3 className="service-policy-title text-center">
                                Talented Team
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="service-policy-item mt-30">
                              <div className="service-policy-icon d-flex justify-content-center">
                                <Image
                                  src={icon4}
                                  alt="icon"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <h3 className="service-policy-title text-center">
                                Online Support
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="service-policy-item mt-30">
                              <div className="service-policy-icon d-flex justify-content-center ">
                                <Image
                                  src={icon4}
                                  alt="icon"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <h3 className="service-policy-title text-center">
                                Online Support
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="service-policy-item mt-30">
                              <div className="service-policy-icon d-flex justify-content-center">
                                <Image
                                  src={icon4}
                                  alt="icon"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <h3 className="service-policy-title text-center">
                                Online Support
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 pl-lg-45 ">
              <div className="row">
                {products?.map((product: any) => {
                  const brandId = product?.brand;
                  const matchedBrand = brands?.find(
                    (brand: any) => brand.id === brandId
                  );

                  return (
                    <div key={product?.id} className="col-md-3">
                      <div className="blog-item mt-40">
                        <div className="blog-thumb" style={{ height: "170px" }}>
                          <Link
                            href={`/products/${matchedBrand?.brand?.toLowerCase()}/${formatName(
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
                              href={`/products/${matchedBrand?.brand?.toLowerCase()}/${formatName(
                                product?.productName
                              )}`}
                              style={{ fontSize: "16px" }}
                            >
                              {product?.productName}
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
  );
};

export default Page;
