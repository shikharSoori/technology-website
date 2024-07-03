import AboutHero from "@/components/Hero/AboutHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clientsData from "@/utils/Home.json";
import "./clientsSuccessDetail.css";
interface props {
  params: {
    clientsSuccessDetail: any;
  };
}
export async function generateStaticParams() {
  const blogs = clientsData?.clientsReview;
  const params = blogs.map((blog: any) => {
    return {
      clientsSuccessDetail: String(blog.id),
    };
  });

  return params;
}
const Page = async ({ params }: props) => {
  const blogs = clientsData?.clientsReview;

  const blogName = params.clientsSuccessDetail;

  const matchedClients = blogs?.find((blog: any) => {
    return blog.id === Number(blogName);
  });
  const fallbackImage = "/path/to/default-image.png";
  return (
    <>
      <AboutHero title="blogs" />{" "}
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 ">
              <div className="blog-item mt-40">
                <div className="blog-content blog-details">
                  <h3 className="blog-title">{matchedClients?.name}</h3>
                  <p className="text-justify"> {matchedClients?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 key-point ">
              <div className="flex-grow-1 key-point-item">
                <h4 className="title">Challenges</h4>
                <div className="benefits-wrapper">
                  <ul className=" mt-4 m-0 ">
                    {matchedClients?.challenge?.challenges?.map(
                      (why: any, index: number) => {
                        return (
                          <li key={index} className=" key-benefits-item">
                            <div className="bullet"></div>
                            <div className="flex-grow-1 description">
                              <p className="text-justify">{why.description}</p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 key-point ">
              <div className="flex-grow-1 key-point-item">
                <h4 className="title">Solutions</h4>
                <p className="description ">
                  {matchedClients?.solution?.description}
                </p>

                <div className="benefits-wrapper">
                  <ul className=" mt-4 m-0 ">
                    {matchedClients?.solution?.solutions?.map(
                      (why: any, index: number) => {
                        return (
                          <li key={index} className=" key-benefits-item">
                            <div className="bullet"></div>
                            <div className="flex-grow-1 description">
                              <h4>{why.title}</h4>
                              <p className="text-justify">{why.description}</p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {matchedClients?.conclusion && (
            <div className="row  gap-4">
              <div className="col-12 key-point ">
                <div className="flex-grow-1 key-point-item">
                  <h4 className="title">Conclusion</h4>
                  <p className="description">{matchedClients?.conclusion}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
