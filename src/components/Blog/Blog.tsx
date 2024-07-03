import Link from "next/link";
import React from "react";
import TitleText from "../Testimonials/TitleText";
import { getData } from "@/app/lib/getData";
import Image from "next/image";
import "./blog.css";
import BlogData from "@/utils/Blogs.json";
const Blog = async () => {
  const data = await getData("blog-app/blog?limit=0&offset=0");
  // const blogs = data?.results;
  const blogs = BlogData?.blogs;
  const mainBlogs = blogs[0];
  const subBlogs = blogs.slice(2, 4);
  const maxLength = 50;


  return (
    <section
      className="blog-area section-padding--ptb_90  fix wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="row m-0">
          <div className="col-12">
            <div className="section-title text-center mb-4">
              <h2 className="h1 title">
                <TitleText
                  title={`<span>Latest</span> Post  from <span>Blog</span> `}
                />
                {/* Latest Post from Blog */}
              </h2>
            </div>
          </div>
        </div>
        <div className="row mtn-30 m-0">
          <div className="col-md-9 col-12">
            <div className="d-flex flex-column blog-item h-100 mt-30">
              <div className="blog-thumb h-100">
                <Link href="blog-details.html">
                  <Image
                    className="blog-thumb-img"
                    height={200}
                    width={200}
                    src={"https://i.imgur.com/uQSiIyE.jpeg"}
                    alt="blog thumb"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">
                  <Link href={`blog/${mainBlogs.id}`}>{mainBlogs.name}</Link>
                </h3>
                <p>
                  {mainBlogs.description.length >= maxLength + 100
                    ? `${mainBlogs.description
                        .substr(0, maxLength + 100)
                        .trim()}...`
                    : mainBlogs.description}
                </p>
                <div className="blog-meta">
                  <Link href="#">25 October, 2019</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 row m-0">
            {subBlogs?.length > 0 &&
              subBlogs.map((blogitem: any) => {
                const maxTitleLength = 20;
                return (
                  <div key={blogitem.id} className="col-12 pt-3 pt-md-0">
                    <div className="home blog-item d-flex mt-30 row">
                      <div className="blog-thumb col-md-12 col-12 p-0">
                        <Link href={`blog/${blogitem.id}`}>
                          <Image
                            className="blog-thumb-img"
                            height={200}
                            width={200}
                            src={blogitem.image}
                            alt="blog thumb"
                          />
                        </Link>
                      </div>
                      <div className="blog-content col-12 col-md-12 mt-2 pt-md-0 p-0">
                        <h3 className="blog-title">
                          <Link href={`blog/${blogitem.id}`}>
                            {" "}
                            {blogitem.name.length >= maxTitleLength
                              ? `${blogitem.name
                                  .substr(0, maxTitleLength)
                                  .trim()}...`
                              : blogitem.name}
                          </Link>
                        </h3>
                        <p>
                          {blogitem.description.length >= maxLength
                            ? `${blogitem.description
                                .substr(0, maxLength)
                                .trim()}...`
                            : blogitem.description}
                        </p>
                        <div className="blog-meta">
                          <Link href="#">25 October, 2019</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
