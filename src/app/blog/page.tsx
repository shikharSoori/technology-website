import React, { useState } from "react";
import { getData } from "../lib/getData";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "@/components/Hero/AboutHero";
import { formatName } from "@/utils/FormatName";
import BlogCard from "@/components/Blog/BlogCard";

const Blogs = async () => {
  const data = await getData("blog-app/blog?limit=0&offset=0");
  const blogs = data?.results;

  return (
    <>
      <AboutHero title="Blogs" />
      <section className="blog-area section-padding">
        <div className="container">
          <div className="row mtn-40">
            {blogs?.length > 0 ? (
              blogs.map((blogitem: any) => (
                <div key={blogitem.id} className="col-lg-4 col-md-6">
                  <BlogCard blog={blogitem} />
                </div>
              ))
            ) : (
              <p>No blogs found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
