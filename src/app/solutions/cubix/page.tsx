import Features from '@/components/Features/Features';
import AboutHero from '@/components/Hero/AboutHero';
import { formatName } from '@/utils/FormatName';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import icon1 from '@/assets/icon-1.png';
import icon2 from '@/assets/icon-2.png';
import icon3 from '@/assets/icon-3.png';
import icon4 from '@/assets/icon-4.png';
import "../[solutionDetail]/solutionDetail.css";
const Cubix = () => {
    const data=
        {products:[],name: "Cubix",results:[],logo:icon1,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis, aliquam maiores"}

    
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
                      {/* <Image
                        src={matchedSolution.logo}
                        width={370}
                        height={250}
                        alt="blog-img"
                      /> */}
                      <iframe
                        // height="auto"
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
                      <p className="text-justify mt-2">
                        {data.description} Bigger ipsum dolor sit
                        amet consectetur adipisicing elit. Voluptate perferendis
                        consequuntur illo aliquid nihil ad neque, debitis
                      </p>
                    </div>
                  </div>

                  <Features solution={data} />

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
                          <div className="col-lg-4 col-md-4 col-6">
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
                          <div className="col-lg-4 col-md-4 col-6">
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
                          <div className="col-lg-4 col-md-4 col-6">
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
                          <div className="col-lg-4 col-md-4 col-6">
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
                          <div className="col-lg-4 col-md-4 col-6">
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
                  <div className="section-padding">
                    <h3 className="blog-title pb-4">Products used in this</h3>
                    <div className="row mtn-40">
                      <div className="col-lg-12 order-1 order-lg-2 pl-lg-45 ">
                        <div className="row">
                          {data.products?.map((product: any) => {
                            const brandId = product?.brand;
                            // const matchedBrand = brands?.find(
                            //   (brand: any) => brand.id === brandId
                            // );

                            return (
                              <div
                                key={product?.id}
                                className="col-6 col-md-4 col-lg-3"
                              >
                                <div className="blog-item mt-40">
                                  {/* <div
                                    className="blog-thumb"
                                    style={{ height: "170px" }}
                                  >
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
                                  </div> */}
                                  {/* <div className="blog-content">
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
                                  </div> */}
                                </div>
                              </div>
                            );
                          })}
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
    </div>
    </>
  )
}

export default Cubix
