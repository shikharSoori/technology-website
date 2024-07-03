import AboutHero from "@/components/Hero/AboutHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogsData from "@/utils/Blogs.json";
import "./blogDetail.css";
interface props {
  params: {
    blogDetail: any;
  };
}
export async function generateStaticParams() {
  const blogs = blogsData?.blogs;
  const params = blogs.map((blog: any) => {
    return {
      blogDetail: String(blog.id),
    };
  });

  return params;
}
const BlogDetail = async ({ params }: props) => {
  const blogs = blogsData?.blogs;

  const blogName = params.blogDetail;

  const matchedBlogs = blogs?.find((blog: any) => {
    return blog.id === Number(blogName);
  });
  console.log(matchedBlogs);
  const fallbackImage = "/path/to/default-image.png";

  return (
    <>
      <AboutHero title="blogs" />{" "}
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-12 order-1 order-lg-2 ">
              <div className="blog-item mt-40">
                <div className="blog-thumb">
                  <Link href="#">
                    <Image
                      src={matchedBlogs?.image || fallbackImage}
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
                  <h3 className="blog-title">{matchedBlogs?.name}</h3>
                  <div className="blog-meta">
                    <Link href="#">{matchedBlogs?.createdDateBs}</Link>
                  </div>
                  <p className="text-justify"> {matchedBlogs?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-9">
              {matchedBlogs?.keyPoints?.map((keyPoint: any, index: number) => {
                return (
                  <div key={index} className="row  gap-4">
                    <div className="col-12 key-point ">
                      <div className="flex-grow-1 key-point-item">
                        <h4 className="title">{keyPoint.title}</h4>
                        <p className="description ">{keyPoint.description}</p>
                        <div className="benefits-wrapper">
                          <h5 className="title mt-5">Key Benefits:</h5>
                          <ul className=" mt-4 m-0 ">
                            {keyPoint.keyBenefits?.map(
                              (keyBenefit: any, index: number) => {
                                return (
                                  <li
                                    key={index}
                                    className=" key-benefits-item"
                                  >
                                    <div className="bullet"></div>
                                    <div className="flex-grow-1 description">
                                      <h4>{keyBenefit.title}</h4>
                                      <p className="text-justify">
                                        {keyBenefit.description}
                                      </p>
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
                );
              })}
              <div className="row  gap-4">
                <div className="col-12 key-point ">
                  <div className="flex-grow-1 key-point-item">
                    <h4 className="title">Why Soori Technology?</h4>
                    <div className="benefits-wrapper">
                      <ul className=" mt-4 m-0 ">
                        {matchedBlogs?.whySooriTechnology?.map(
                          (why: any, index: number) => {
                            return (
                              <li key={index} className=" key-benefits-item">
                                <div className="bullet"></div>
                                <div className="flex-grow-1 description">
                                  <h4>{why.title}</h4>
                                  <p className="text-justify">
                                    {why.description}
                                  </p>
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
            </div>
            <div
              className="col-3 align-items-start d-flex "
              style={{ position: "relative", paddingTop: "100px" }}
            >
              <div className="request-demo-wrapper">
                <p className="text-center">
                  For more information or to schedule a demo, visit our website
                  or contact our sales team. Let work together to take your
                  business to new heights with Soori Technology.
                </p>
                <Link
                  href="/contact"
                  style={{ width: "max-content" }}
                  className=" btn py-2 px-4 mt-2"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="row  gap-4">
            <div className="col-12 key-point ">
              <div className="flex-grow-1 key-point-item">
                <h4 className="title">{matchedBlogs?.conclusion?.title}</h4>
                <p className="description">
                  {matchedBlogs?.conclusion?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
